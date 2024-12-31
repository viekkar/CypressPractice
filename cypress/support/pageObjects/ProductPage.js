const CartPage = require('../../support/pageObjects/CartPage');


class ProductPage{

    pageValidation(){
        cy.contains('Shop Name').should('be.visible')
    }

    verifyCardLimit(){
        cy.get('app-card').should('have.length',4)


    }

    selectProduct(productName){
        cy.get('app-card').filter(`:contains("${productName}")`).then($element=>{
            cy.wrap($element).should('have.length',1)
            cy.wrap($element).contains('button','Add').click()
        })

    }

    selectFirstProduct(productIndex){
        cy.get('app-card').eq(productIndex).contains('Add').click();

    }

    gotToCart(){
        cy.contains('a','Checkout').click();
        return new CartPage()

    }
}

module.exports=ProductPage;