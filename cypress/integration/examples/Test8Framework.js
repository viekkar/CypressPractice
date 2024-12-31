describe('End to End ecommerce test',function(){
    it('Submit Order',function(){

        const productName='Nokia Edge';
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
        cy.get('#username').type('rahulshettyacademy');
        cy.get('#password').type('learning');
        cy.contains('Sign In').click();
        cy.contains('Shop Name').should('be.visible')
        cy.get('app-card').should('have.length','4')
        cy.get('app-card').filter(`:contains("${productName}")`).then($element=>{
            cy.wrap($element).should('have.length',1)
            cy.wrap($element).contains('button','Add').click()
        })
        cy.get('app-card').eq(0).contains('Add').click();
        cy.contains('a','Checkout').click();
        let sum=0;
        cy.get('tr td:nth-child(4) strong')
        .each($el=>{
            const amount=parseInt(($el.text().split(" ")[1].trim()),10)

            sum=sum+amount
        
        }).then(function(){
            expect(sum).to.be.lessThan(200000)
        }
        )
        cy.contains('button','Checkout').click();
        cy.get('#country').type('India')
        cy.get('.suggestions ul li').click();
        cy.contains('Purchase').click()
        cy.get('.alert-success').should('contain','Success');




    })
})