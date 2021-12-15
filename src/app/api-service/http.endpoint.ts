import { Injectable } from "@angular/core";
import { Action } from "./http.api-action";


@Injectable({
    providedIn: 'root'
})

export class ApiEndpointService{
    constructor(private path: Action) { }

    public PostProduct = (): string =>
    this.createUrl(this.path.PostProduct);

    public getBrand = ():string =>
    this.createUrl(this.path.GetBrand);

    public getCategory = (): string =>
    this.createUrl(this.path.GetCategory)

    public getProduct = (): string =>
    this.createUrl(this.path.GetProduct)

    public getProductByCategory = (catId: number): string =>
    this.createUrl(`${this.path.GetProductByCategory}/?id=${catId}`)

    public getProductByName = (name: string): string =>
    this.createUrl(`${this.path.GetProductByName}/?name=${name}`)

    public getNavbar = (): string => 
    this.createUrl(this.path.GetNavbar)

    public setNavbar = (): string =>
    this.createUrl(`${this.path.UpdateNavbar}`)

    public login = (): string =>
    this.createUrl(this.path.Login)

    public getImage = (): string =>
    this.createUrl(this.path.GetImage)


    private createUrl = (action: string): string => {
    return this.path.base_URL + action;
    };
}