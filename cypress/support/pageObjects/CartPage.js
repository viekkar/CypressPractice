const ConfirmationPage = require('../../support/pageObjects/ConfirmationPage');


class CartPage{

    validateTheSumAmount(amount){
        let sum=0;
        cy.get('tr td:nth-child(4) strong')
        .each($el=>{
            const amount=parseInt(($el.text().split(" ")[1].trim()),10)

            sum=sum+amount
        
        }).then(function(){
            expect(sum).to.be.lessThan(amount)
        }
        )
    }

    checkoutOrder(){
        cy.contains('button','Checkout').click();
        return new ConfirmationPage;
    }

}
module.exports=CartPage;