describe("Song flows", () => {
  beforeEach(function () {
    cy.setupDefaultServer()
    cy.visit("/")
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
    }).as("login")

    cy.route({
      method: "POST",
      url: "/music",
      response: "kewl"
    }).as("postMusic")

  })

  describe("when i login", () => {
    beforeEach(function () {
      cy.visit("/admin")

      cy.get("#username").type("user_bro")
      cy.get("#password").type("password123")

      cy.get("#login-button").click()

      cy.wait("@login")
    })

    describe("And i start filling out the song ", function () {
      beforeEach(function () {
        cy.location().should((loc) => {
          expect(loc.pathname).to.eq("/admin/songs")
        })

        cy.get("#open-new-song").click()

      })

      it("should not allow me to submit untill all fields are filled out", function () {
        cy.get("#select-song-type").click()
        cy.get("li").contains("Spotify Song").click()
        cy.get("#new-song-name").type("Fade the memory")

        cy.get("button").should("be.disabled")

        cy.get("#new-song-id").type("slap-123")

        cy.get("button").should("not.be.disabled")

        cy.get("#new-song-name").clear()

        cy.get("button").should("be.disabled")
      })

      it("should not display an error", function () {
        cy.contains("Sorry").should("not.exist")
      })

      describe("When the full form is filled out", () => {
        beforeEach(function () {
          cy.get("#select-song-type").click()
          cy.get("li").contains("Spotify Song").click()
          cy.get("#new-song-name").type("Fade the memory")
          cy.get("#new-song-id").type("slap-123")

          cy.contains("Send It").click()
        })

        it("should send all fields to the server", function () {
          cy.wait("@postMusic").should(xhr => {
            expect(xhr.requestBody).to.contain({
              name: "Fade the memory",
              id: "slap-123",
              type: "SPOTIFY_SONG"
            })
          })
        })

        it("should get new songs after submitting", function () {
          cy.wait("@postMusic")
          cy.wait("@getMusic")
        })
      })
    })
  })
})