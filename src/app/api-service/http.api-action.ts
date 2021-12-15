import { calcPossibleSecurityContexts } from "@angular/compiler/src/template_parser/binding_parser";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class Action{
    public readonly base_URL = 'https://localhost:44396/api/'

    public readonly PostProduct = 'Product/PostProduct';
    public readonly GetBrand = 'Product/GetBrand';
    public readonly GetCategory = 'Product/GetCategory';
    public readonly GetProduct = 'Product/GetProduct';
    public readonly GetProductByCategory = 'Product/GetProductByCategory';
    public readonly GetProductByName = 'Product/GetProductByName';
    public readonly GetNavbar = 'Navbar/GetNavbar';
    public readonly UpdateNavbar = 'Navbar/UpdateNavbar';
    public readonly GetImage = 'Product/GetImage';



    public readonly Login = 'Account/Login';
}