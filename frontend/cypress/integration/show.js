describe("Show Admin", () => {
  beforeEach(function () {
    cy.setupDefaultServer()
    cy.visit("/admin")
    cy.wait("@getMusic")
    cy.wait("@getBio")
    cy.wait("@getShows")

    cy.route({
      method: "POST",
      url: "/login",
      response: {
        username: "user_bro",
        token: "token_the_token"
      }
    })
      .as("login")

    cy.route({
      method: "POST",
      url: "/venues",
      response: "kewl"
    }).as("postVenues")


    cy.get("#username").type("user_bro")
    cy.get("#password").type("password123")

    cy.get("#login-button").click()

    cy.wait("@login")

    cy.contains("Shows").click()
  })

  describe("When i go to create a show", () => {

    beforeEach(function () {
      cy.get("#open-new-show").click()
    });

    it('should allow me to add a venue', function () {

      cy.route({
        method: "GET",
        url: "/venues",
        response: []
      }).as("postVenues")


      cy.get("#select-venue").click()

      cy.contains("New Venue").click()

      cy.get("#venue-name").type("zee club")
      cy.get("#venue-link").type("www.google.maps/club")
      cy.get("#venue-city").type("Chicago")
      cy.get("#venue-state").type("IL")


      cy.wait("@postVenues").then(xhr => {
        expect(xhr.requestBody).to.eql({
          name: "zee club",
          googleMapsLink: "www.google.maps/club",
          city: "Chicago",
          state: "IL"
        })
      })

    });

  })
})