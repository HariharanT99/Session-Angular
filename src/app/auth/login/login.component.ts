import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "src/app/model/user";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.user = {userName: '', password: ''};

    this.userData = {
      id: 0,
      password: '',
      userName: '',
      role: ''
    }
  }

  userData: User;

  loginForm: FormGroup = new FormGroup({});

  formErrors: any = {
    userName: "",
    password: "",
  };

  validationMessages: any = {
    userName: {
      required: "Please enter the username",
    },
    password: {
      required: "Please enter the password",
    },
  };

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  //Validation function
  logValidationErrors(group: FormGroup = this.loginForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this.formErrors[key] = "";
        if (
          abstractControl &&
          !abstractControl.valid &&
          (abstractControl.touched || abstractControl.dirty)
        ) {
          const messages = this.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + " ";
            }
          }
        }
      }
    });
  }

  user: {userName: string, password: string};

  OnSubmit(){
    this.user = {userName: this.loginForm.get('userName')?.value, password: this.loginForm.get('password')?.value}

    if(this.user){
      this.authService.Login(this.user.userName,this.user.password)
      .subscribe(data => {
        console.log("Is Login Success: "+ data);

        this.authService.Users.map(d => (d.userName == this.user.userName)? this.userData=d : '')
        
        if(data){
          if(this.userData.role == 'user'){
            this.router.navigate(['user-home']);
          }
          else if(this.userData.role == 'admin'){
            this.router.navigate(['admin-home']);
          }
          else{
            this.router.navigate(['login']);
          }
        } 
      })
    }
  }
}
