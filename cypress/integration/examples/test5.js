describe('My First Test Suite', function () {

    it('My FirstTest case', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#opentab').invoke('removeAttr','target').click();
        // cy.title().should('eq', 'QAClick Academy - A Testing Academy to Learn, Earn and Shine') 

        cy.origin("https://www.qaclickacademy.com/",()=>{
            cy.title().should('eq', 'QAClick Academy - A Testing Academy to Learn, Earn and Shine') 
            cy.get('#navbarSupportedContent a[href="about.html"]').click();
            cy.get('.mt-50 h2').should('contain','QAClick Academy')
        })

    })})