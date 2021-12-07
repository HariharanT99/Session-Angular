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


    private createUrl = (action: string): string => {
    return this.path.base_URL + action;
    };
}