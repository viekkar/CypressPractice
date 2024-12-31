const ConfirmationPage = require('../../support/pageObjects/ConfirmationPage');


class CartPage{

    validateTheSumAmount(){
        let sum=0;
        return cy.get('tr td:nth-child(4) strong')
        .each($el=>{
            const amount=parseInt(($el.text().split(" ")[1].trim()),10)

            sum=sum+amount
        
        }).then(()=>{
            return sum;
        }
        )
    }

    checkoutOrder(){
        cy.contains('button','Checkout').click();
        return new ConfirmationPage;
    }

}
module.exports=CartPage;