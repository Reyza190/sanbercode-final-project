import Authentication from "../pages/Authentication";

describe("Register shop", () => {
    beforeEach(() => {
        Authentication.open();
    });

    const shop = {
        shopName: "Ada ide",
        email: "adaide@gmail.com",
        password: "adaide123"
    }

    it('Create new shop account vwith valid', () => {
        Authentication.openRegister();
        Authentication.register(shop.shopName, shop.email, shop.password);
        Authentication.btnSubmit.click();
        Authentication.toastAlert.should('be.visible');
    });

    it.only('Login account registered', () => {
        Authentication.login(shop.email, shop.password );
        Authentication.btnSubmit.click();
        Authentication.logo.should("be.visible");
    });
});