describe('My First Test Suite', function () {

    it('My FirstTest case', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


        cy.get('#opentab').then(function(el)
    {
        let url=el.prop('href');
        cy.visit(url)
        cy.origin(url,()=>
        {
            cy.title().should('includes','QAClick Academy - A Testing Academy to Learn, Earn and Shine')
        })
    })
        })

        

        })