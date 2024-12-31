const ProductPage = require('../../support/pageObjects/ProductPage');


class HomePage{
    login(username, password){
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.contains('Sign In').click();
        return new ProductPage()
        
    }

    goTo(url){
        cy.visit(url)
    }
}

module.exports=HomePage;