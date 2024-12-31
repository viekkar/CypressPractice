describe('My First Test Suite', function () {

    it('My FirstTest case', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('tr td:nth-child(2)').each(($el, index, $list)=>{
            let text=$el.text()
            if(text.includes('Python')){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    let priceText=price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })

        

        })})