import { Component, OnDestroy, OnInit } from "@angular/core";
import { Form, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiEndpointService } from "src/app/api-service/http.endpoint";
import { HttpService } from "src/app/api-service/http.service";
import { Brand } from "src/app/model/brand";
import { Category } from "src/app/model/category";
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Subscription } from "rxjs";



@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit, OnDestroy{
    
  constructor(
    private fb: FormBuilder,
    private apiEndPointService: ApiEndpointService,
    private httpService: HttpService
    ) 
    { 
      this.formData = new FormData();

      this.token = localStorage.getItem('jwt');  

      this.categorySubscription = new Subscription;
      this.brandSubscription = new Subscription;
      this.postSubscription = new Subscription;

    }


    validation = "true";

    setValidateMessage(msg: any){
      this.validation = msg
    }





  productForm: FormGroup = new FormGroup({});

  fileName = '';

  brandList: Brand[] = [];

  categoryList: Category[] = [];


  formErrors: any={
    'name':'',
    'brand':'',
    'category':'',
    'inStock':'',
    'description':'',
    'expiryOn':'',
    'price':'',
    'picture':''
  };

  validationMessages: any ={
    'name':{
      'required':'First Name is required.',
      'maxlength':'First Name must be less than 50 characters'
    },
    'brand':{
      'required':'Brand is required.'
    },
    'category':{
      'required':'Category is required.',
      'maxlength':'Last employer name must be less than 30 characters'
    },
    'inStock':{
      'required':'Stock value is required.',
      'max':'Stock value must less dhan 10000'
    },
    'description':{
      'required':'Description is required.',
      'maxlength':'Designation must be less than 150 characters'
    },
    'expiryOn':{
        'required':'Expiry date is required.'
    },
    'price':{
        'required':'Price is required.',
        'max': 'Price must be less than 1 lakh'
    },
    'picture':{
        'required': 'Please Upload the picture',
        'extension': 'File format is not allowed'
    }
  };

  formData: FormData;

  ngOnInit(): void {



    this.GetBrand();
    this.GetCategory();


    this.productForm = this.fb.group({
      productId:[0],
      name:['',[Validators.required, Validators.maxLength(50)]],
      brand:['',Validators.required],
      category: ['', Validators.required],
      inStock: ['', [Validators.required, Validators.max(10000)]],
      description: ['', [Validators.required, Validators.maxLength(150)]],
      expiryOn: ['', Validators.required],
      price: ['', [Validators.required,Validators.max(100000)]],
      picture: ['', Validators.required]
    });

    //when the form value changes, logValidationErrors fuction is called
    this.productForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.productForm);
    })

  }

    //Validation function
    logValidationErrors(group: FormGroup = this.productForm): void {
      Object.keys(group.controls).forEach((key: string) => {
        const abstractControl = group.get(key);
        if (abstractControl instanceof FormGroup) {
          this.logValidationErrors(abstractControl);
        } else {
          this.formErrors[key] = '';
          if (abstractControl && !abstractControl.valid
              && (abstractControl.touched || abstractControl.dirty)) {
            const messages = this.validationMessages[key];
            for (const errorKey in abstractControl.errors) {
              if (errorKey) {
                this.formErrors[key] += messages[errorKey] + ' ';
              }
            }
          }
        }
      });
    }

  onFileSelected(event: any){
    const file:File = event.target.files[0];

    console.log(file.type);

    let allImages: Array<string> = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/tiff', 'image/bpg'];

    if(allImages.indexOf(file.type) === -1){
        this.validation = "false";
        this.productForm.value.picture = null;
        this.fileName = '';
        this.productForm.invalid == true;
    }
    else if (file) {
       this.validation = "true";
        this.fileName = file.name;
        this.productForm.value.picture = file;
    }
  }


  postSubscription: Subscription;
  token: any;
  onSubmit(): void {
    console.log('On submit');

    debugger

    this.SetFormData(this.token);

    this.postSubscription = this.httpService.post(this.apiEndPointService.PostProduct(), this.formData).subscribe({
      next: respose => {
        console.log(respose);
        this.productForm.reset();
        this.fileName = '';
        alert("Product added succesfully");
      },
      error: () => {
        alert("product submission failed");
      }
    })

    // this.httpService.post(this.apiEndPointService.PostProduct(), this.formData, {}).subscribe((res) => {
    //   console.log(res);
    //   this.productForm.reset();
    //   this.fileName = '';
    //   alert("Product added succesfully");
    // });
  }


  brandSubscription: Subscription;

  GetBrand(){
    this.httpService.get(this.apiEndPointService.getBrand())
    .subscribe((data) => {
      this.brandList.push(...data);
    })
  };

  categorySubscription: Subscription;

  GetCategory(){
    this.httpService.get(this.apiEndPointService.getCategory())
    .subscribe((data) => {
      this.categoryList.push(...data);
    })
  }

  SetFormData(token: string){

    let jwtData = token.split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)

    var id = decodedJwtData.nameid;

    console.log(id);

    this.formData.append('Name', this.productForm.value.name);
    this.formData.append('BrandId', this.productForm.value.brand);
    this.formData.append('CategoryId', this.productForm.value.category);
    this.formData.append('InStock', this.productForm.value.inStock);
    this.formData.append('Description', this.productForm.value.description);
    this.formData.append('ExpiryOn', this.productForm.value.expiryOn);
    this.formData.append('Price', this.productForm.value.price);
    this.formData.append('CreatedBy', id);
    this.formData.append('File', this.productForm.value.picture);

    console.log(this.formData.getAll);
  }

  dateValidation = "true";

  SetMessage(msg: string){
    console.log(msg)
    this.dateValidation = msg;
  }

  Reset(){
    this.productForm.reset();
    this.fileName = '';
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
    this.brandSubscription.unsubscribe();
    this.categorySubscription.unsubscribe();
  }

}