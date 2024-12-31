const HomePage = require('../../support/pageObjects/HomePage');

describe('End to End ecommerce test',function(){

    before(function(){
        this.homePage= new HomePage()

        cy.fixture('example').then(function(data){
            this.data=data

        })

    })
    it('Submit Order',function(){


        this.homePage.goTo('https://rahulshettyacademy.com/loginpagePractise/')
        const productPage=this.homePage.login(this.data.username,this.data.password)
        productPage.pageValidation()
        productPage.verifyCardLimit()
        productPage.selectProduct(this.data.productName)
        productPage.selectFirstProduct(0)
        const cartPage=productPage.gotToCart()
        cartPage.validateTheSumAmount(200000)
        const confirmationPage=cartPage.checkoutOrder()
        confirmationPage.countryValidation()
        confirmationPage.validateOrderConfirmation('India')

    })
})