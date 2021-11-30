import { Injectable } from "@angular/core";
import { delay, Observable, of, tap, timestamp } from "rxjs";
import { Role } from "../model/role";
import { User } from "../model/user";


@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor() {

        this.Users = [
            {id: 1, userName: 'hari', password: 'hari123', role: 'user'},
            {id: 2, userName: 'admin', password: 'admin123', role: 'admin'}
        ]

        this.u = { id: 0, userName: '', password: '', role: ''};
    }

    Users: User[] = [];

    isUserLoggedIn: boolean = false;

    u: User;

    Login( user: string, password: string): Observable<any> {
        console.log(user);
        console.log(password);
        this.isUserLoggedIn = !!this.Users.find(u => u.userName == user && u.password == password)
        console.log(this.isUserLoggedIn);

        localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn? "true" : "false")
        // if(this.isUserLoggedIn){
        //     this.Users.map(data => (data.userName == user)? this.u = data : null)

            
        // }

        return of(this.isUserLoggedIn).pipe(
            delay(1000),
            tap(val => {
                console.log("Is User Authentication is successful: " + val);
            })
        );
    }

    // GetUser(user: string): User{
    //     this.Users.map(data => (data.userName == user)? this.u = data : null)
    //     return this.u
    // }


    Logout(): void {
        this.isUserLoggedIn = false;
        localStorage.removeItem('isUserLoggedIn');
    }
}