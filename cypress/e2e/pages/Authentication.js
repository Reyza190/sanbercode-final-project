import routes from "../config/routes";
import Locator from "../helper/Locator"

const locator = new Locator();
class Authentication{
    
    get shopNameInput(){ return cy.get(locator.shopNameInput); }
    get emailInput(){ return cy.get(locator.emailInput); }
    get passwordInput(){ return cy.get(locator.passwordInput); }
    get btnSubmit(){ return cy.get(locator.btnSubmit); }
    get toastAlert(){ return cy.get(locator.toastAlert); }
    get linkToRegister() { return cy.get(locator.linkToRegister); }
    get logo() { return cy.get(locator.logo); }

    open(){
        cy.visit("/");
    }

    openRegister() {
        this.linkToRegister.click();
    }

    register(shopName, email, password){
        this.shopNameInput.type(shopName);
        this.emailInput.type(email);
        this.passwordInput.type(password);
    }

    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
    }

}

export default new Authentication();