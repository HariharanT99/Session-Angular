import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable({
    providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

    constructor(private service: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        let url: string = state.url;

        return this.CheckLogin(url);
    }

    CheckLogin(url: string): true | UrlTree {
        console.log('url: '+ url);

        let val = localStorage.getItem('isUserLoggedIn');

        if(val != null && val == "true"){
            if(url == "/login")
               return this.router.parseUrl('/user-home');
            else
                return true;
        } 
        else {
            return this.router.parseUrl('/login');
        }
    }
    
}