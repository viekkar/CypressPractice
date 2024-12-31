

class ConfirmationPage{

    validateOrderConfirmation(confirmationText){
        cy.get('.alert-success').should('contain','Success');
    }

    countryValidation(){
        cy.submitFormDetails()
    }

}

module.exports=ConfirmationPage;