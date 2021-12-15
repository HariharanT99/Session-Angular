import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ApiEndpointService } from "../api-service/http.endpoint";
import { HttpService } from "../api-service/http.service";
import { LoginUser } from "../model/loginUser";
import { Role } from "../enum/roles"



@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpService, private apiEndpointService: ApiEndpointService, private router: Router) {

        // this.Users = [
        //     {id: 1, userName: 'hari', password: 'hari123', role: 'user'},
        //     {id: 2, userName: 'admin', password: 'admin123', role: 'admin'}
        // ]

        // this.u = { id: 0, userName: '', password: '', role: ''};

        this.user = {Username: '', Password: ''};
    }

    // Users: User[] = [];

    // isUserLoggedIn: boolean = false;

    // u: User;

    invalidLogin: boolean = false;

    user: LoginUser;

    Login( username: string, password: string): void {

        this.user = {Username: username, Password: password}
        
        if(this.user){
            this.http.post(this.apiEndpointService.login(), this.user).subscribe({
                next: response => {
                    const token = (<any>response).token;
                    localStorage.setItem("jwt",token);

                    
                    let jwtData = token.split('.')[1]
                    let decodedJwtJsonData = window.atob(jwtData)
                    let decodedJwtData = JSON.parse(decodedJwtJsonData)


                    let userRole = decodedJwtData.role

                    if(userRole == "User")
                    {
                        localStorage.setItem('UserRole',userRole)
                        this.router.navigate(["user"]);
                    }
                    else
                    {
                        localStorage.setItem('UserRole',userRole)
                        this.router.navigate(["admin"]);
                    }
                    
                },
                error: () => {
                    this.invalidLogin = true;
                }
            })
        }

        // this.http.post(this.apiEndpointService.login(), this.user)
        // .subscribe( response => {
        //     console.log("res"+response)
        //     const token = (<any>response).token;
        //     localStorage.setItem("jwt",token);
        //     this.router.navigate(["user"]);
        //     return true;
        // },err => {
        //     console.log("error");
        //     console.log(err);
        //     this.invalidLogin = true;
        //     return false;
        // });


        // console.log(user);
        // console.log(password);
        // this.isUserLoggedIn = !!this.Users.find(u => u.userName == user && u.password == password)
        // console.log(this.isUserLoggedIn);

        // localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn? "true" : "false")
        // // if(this.isUserLoggedIn){
        // //     this.Users.map(data => (data.userName == user)? this.u = data : null)

            
        // // }

        // return of(this.isUserLoggedIn).pipe(
        //     delay(1000),
        //     tap(val => {
        //         console.log("Is User Authentication is successful: " + val);
        //     })
        // );
    }

    // GetUser(user: string): User{
    //     this.Users.map(data => (data.userName == user)? this.u = data : null)
    //     return this.u
    // }


    Logout(): void {

        localStorage.removeItem("jwt");
        localStorage.removeItem("UserRole");


        // this.isUserLoggedIn = false;
        // localStorage.removeItem('isUserLoggedIn');
    }

    public isAuthorised(roles: any[]): boolean{
        const currentUserRole = localStorage.getItem('UserRole');
        if(!currentUserRole) return false;
        return (roles.indexOf(currentUserRole) >= 0);
    }

}