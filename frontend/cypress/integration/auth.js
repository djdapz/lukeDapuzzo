describe("Auth flows", () => {
  beforeEach(function () {
    cy.setupDefaultServer()
    cy.visit("/")
    cy.wait("@getMusic")
    cy.wait("@getBio")
    cy.wait("@getShows")

  })

  describe("when i have no token", () => {
    beforeEach(function () {
      window.localStorage.removeItem("token")
    })

    describe("and i go to the admin page", () => {
      beforeEach(function () {
        cy.visit("/admin")
      })

      it("should redirect me to the login page", function () {
        cy.location().should((loc) => {
          expect(loc.pathname).to.eq("/login")
        })
      })

      describe("when i login with a valid username and password", () => {

        beforeEach(function () {
          cy.route({
            method: "POST",
            url: "/login",
            response: {
              username: "user_bro",
              token: "token_the_token"
            }
          })
            .as("login")

          cy.get("#username").type("user_bro")
          cy.get("#password").type("password123")

          cy.get("#login-button").click()
        })

        it("should login for with username and password", function () {
          cy.wait("@login").should(xhr => {
            expect(xhr.requestBody).to.contain({
              username: "user_bro",
              password: "password123"
            })
          })
        })

        describe("when the login is successful", function () {
          beforeEach(function () {
            cy.wait("@login")

            cy.route({
              method:"POST",
              url: "/music",
              response: "kewl"
            }).as("postMusic")
          })

          it("should redirect to /admin/songs", function () {
            cy.location().should((loc) => {
              expect(loc.pathname).to.eq("/admin/songs")
            })
          })

          it("should save the token in local storage", function () {
            const token = window.localStorage.getItem("token")
            expect(token).to.equal("token_the_token")
          })

          it("should use the token when submitting a form", function () {
            cy.get("#open-new-song").click()
            cy.get("#select-song-type").click()
            cy.get("li").contains("Spotify Song").click()
            cy.get("#new-song-name").type("Fade the memory")
            cy.get("#new-song-id").type("slap-123")
            cy.get("button").contains("Send It").click()

            cy.wait("@postMusic").should(xhr =>{
              console.log(xhr)
              expect(xhr.request.headers["authorization"]).to.eql("Bearer token_the_token")
            })
          })
        })
      })
    })
  })
})