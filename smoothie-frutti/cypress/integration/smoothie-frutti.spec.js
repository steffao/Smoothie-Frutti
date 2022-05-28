// https://docs.cypress.io/api/introduction/api.html

describe('Search, add and remove a fruit', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('div', 'Smoothie Frutti')
    cy.get('input[class=mySearch]')
    cy.get('div[class=fruitsCart--empty]')
  })
  it('search and select a fruit', () => {
    cy.visit('/')
    cy.get('div.goToFruitFinder').click()
    cy.get('input[class=mySearch]').should('be.focused')
    // No fruit found   
    cy.get('input[class=mySearch]').type('krti')
    cy.get('div[class=fruitUnavailable]').contains('Fruit unavailable')
    cy.get('input[class=mySearch]').clear()
    // Fruit found
    cy.get('input[class=mySearch]').type('b')
    cy.get('article[class=fruitFound]').contains('Banana')
    cy.get('input[class=mySearch]').clear()
    // fruit selected
    cy.get('input[class=mySearch]').type('blu')
    cy.get('article[class=fruitFound]').contains('Blueberry')
    cy.get('article[class=fruitFound]').contains('30')
    cy.get('article[class=fruitFound]').get('img[class=fruitFound__avatar__img]').click()
    // Fruit in cart
    cy.get('article[class=selectedFruit]').contains('Blueberry')
    cy.get('article[class=selectedFruit]').contains('30')
    cy.get('article[class=selectedFruit]').get('img[class=fruitFound__avatar__img]')
    // Test quantity of fruits and total calories
    cy.get('input[class=quantity]').should('have.value', '100g')
    cy.get('span.totalCalories__cal')
    cy.get('button.btn--plus').click()
    cy.get('input[class=quantity]').should('have.value', '200g')
    cy.get('span.totalCalories__cal')
    cy.get('button.btn--minus').click().click()
    cy.get('input[class=quantity]').should('have.value', '0g')
    cy.get('span.totalCalories__cal').should('have.text', '0 calories')
    // Remove fruit
    cy.get('i.fa-times').click()
    cy.get('div[class=fruitsCart--empty]')    
  })
})
