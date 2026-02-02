import { Page } from "@playwright/test"
import { Cart } from "./Cart.ts"
import { Home } from "./Home.ts"
import { Product } from "./Product.ts"
import {Register} from "./Register.ts"
import {Login} from "./Login.ts"


export class POManager {
    cart: Cart;
    home: Home;
    product: Product
    register: Register;
    login : Login;

    constructor(page: Page) {
        this.cart = new Cart(page)
        this.home = new Home(page)
        this.product = new Product(page);
        this.register = new Register(page);
        this.login = new Login(page);
    }

    getCartPage(){
        return this.cart;
    }

    getHomePage(){
        return this.home;
    }

    getProductPage(){
        return this.product;
    }

    getRegisterPage(){
        return this.register;
    }

    getLoginPage(){
        return this.login;
    }
}
