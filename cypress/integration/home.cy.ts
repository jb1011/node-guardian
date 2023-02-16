/// <reference types="cypress" />

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  })

  it("should find our welcome page and message", () => {
    cy.get("title").contains("Node Guardians");
  });
});

context("Home to detail Page", () => {
  it("should navigate to a detail page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="quests/1"]').click();
    cy.url().should('include', '/quests/1');
  });
});