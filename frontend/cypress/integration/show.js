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

    cy.route({
      method: "POST",
      url: "/shows",
      response: "kewl"
    }).as("postShow")

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

    })
    describe("When a venue that i want is missing", function () {
      beforeEach(function () {
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

      describe("once the venue was submitted", function () {
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

    describe("Filling out the form", () => {
      it("should only allow me to submit when i've filled it all out", function () {
        cy.get(".picker input").type("03022013")

        cy.contains("Send It").should("be.disabled")

        cy.get("#select-venue").click()

        cy.contains("The Powder Keg").click()

        cy.contains("Send It").should("not.be.disabled")
      })

      describe.only("When i fill out the form", () => {
        beforeEach(function () {
          cy.get(".picker input").type("03022013")
          cy.get("#select-venue").click()
          cy.contains("The Powder Keg").click()

          cy.contains("Send It").click()
        })

        it("should create a new show", function () {
          cy.wait("@postShow").then(xhr => {
            expect(xhr.requestBody).to.eql({ date: "2013-03-02", venueId: 1 })
          })
        })

        it("should refresh show list ", function () {
          cy.wait("@postShow")
          cy.wait("@getShows")
        })
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