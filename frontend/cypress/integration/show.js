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
    cy.wait("@getVenues")

    cy.contains("Shows").click()
  })

  describe("When i go to create a show", () => {

    beforeEach(function () {
      cy.get("#open-new-show").click()

      cy.route({
        method: "GET",
        url: "/venues",
        response: newVenues
      }).as("getVenues")

      cy.get("#select-venue").click()

      cy.get("#open-new-venue").click()

      cy.get("#venue-name").type("zee club")
      cy.get("#venue-link").type("www.google.maps/club")
      cy.get("#venue-city").type("Chicago")
      cy.get("#venue-state").type("IL")

      cy.get("#submit-venue").click()
    })

    it("should allow me to add a venue", function () {
      cy.wait("@postVenues").then(xhr => {
        expect(xhr.requestBody).to.eql({
          name: "zee club",
          googleMapsLink: "www.google.maps/club",
          city: "Chicago",
          state: "IL"
        })
      })
    })

    describe("once the venue was submitted", function() {
      beforeEach(function () {
        cy.wait("@postVenues")
      })
      it("should add the new venue to the dropdown", function () {
        cy.wait("@getVenues")
        cy.get("#select-venue").click()

        cy.contains("zee club")
      })
    })
  })
})


let newVenues = {
  "venues": [
    {
      "id": 1,
      "name": "The Powder Keg",
      "googleMapsLink": "https://goo.gl/maps/ccwkfpo6Lbu",
      "city": {
        "id": 4,
        "name": "Niwot",
        "state": {
          "abbreviation": "CO",
          "name": "Colorado"
        }
      }
    },
    {
      "id": 2,
      "name": "Bootstrap Brewing Co",
      "googleMapsLink": "https://goo.gl/maps/omD8BmU78tv",
      "city": {
        "id": 1,
        "name": "Boulder",
        "state": {
          "abbreviation": "CO",
          "name": "Colorado"
        }
      }
    },
    {
      "id": 3,
      "name": "zee club",
      "googleMapsLink": "www.google.maps/club",
      "city": {
        "id": 3,
        "name": "Chicago",
        "state": {
          "abbreviation": "IL",
          "name": "Illinois"
        }
      }
    }
  ]
}