describe('My First Test', () => {
    it('Verify the title with positive test ', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq',"OrangeHRM")
    cy.get('[name="username"]').type("Admin")
    cy.get('[name="password"]').type("admin123")
    cy.get('[type="submit"]').click()
 })
 
 
 })
   
      
      
  