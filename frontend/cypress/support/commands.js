// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add("setupDefaultServer", () => {
  cy.fixture("bio").as("bioJson")
  cy.fixture("music").as("musicJson")
  cy.fixture("shows").as("showsJson")
  cy.fixture("venues").as("venuesJson")

  cy.server()

  cy.route({
    method: "GET",
    url: "/bio",
    response: "@bioJson"
  }).as("getBio")

  cy.route({
    method: "GET",
    url: "/shows",
    response: "@showsJson"
  }).as("getShows")

  cy.route({
    method: "GET",
    url: "/music",
    response: "@musicJson"
  }).as("getMusic")

  cy.route({
    method: "GET",
    url: "/venues",
    response: "@venuesJson"
  }).as("getVenues")

})
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
