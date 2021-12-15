import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable({
    providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

    constructor(private service: AuthService, private router: Router, private jwtHelper: JwtHelperService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {

        const token = localStorage.getItem("jwt");

        if (token && !this.jwtHelper.isTokenExpired(token)){
            let userRole = localStorage.getItem('UserRole')

            if(route.data['roles'] && this.service.isAuthorised(route.data['roles']))
            {
                return true;
            }

            this.router.navigate(['/unauthorized'])
            return false;
        };

        this.router.navigate(['/']);
        return false;


        // let url: string = state.url;

        // return this.CheckLogin(url);
    }

    // CheckLogin(url: string): true | UrlTree {
    //     console.log('url: '+ url);

    //     let val = localStorage.getItem('isUserLoggedIn');

    //     if(val != null && val == "true"){
    //         if(url == "/login")
    //            return this.router.parseUrl('/user-home');
    //         else
    //             return true;
    //     } 
    //     else {
    //         return this.router.parseUrl('/login');
    //     }
    // }
    
}