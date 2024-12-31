describe('My First Test Suite', function () {

    it('My FirstTest case', function () {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")

        const monthNumber='8';
        const date='5';
        const year='2025'
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label__label').click()
        cy.get('.react-calendar__navigation__label__label').click()
        

        })

        

        })