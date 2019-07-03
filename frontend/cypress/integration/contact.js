describe("Contact page", () => {
  beforeEach(function () {
    cy.setupDefaultServer()

    cy.route({
      method: "POST",
      url: "/email",
      response: "good",
      delay: 200
    }).as("sendEmail")

    cy.visit("/contact")
  })

  describe("Whe I'm filling out the form", () => {
    it("should not allow me to click send  without a name", function () {
      cy.get("#email-contact-form").type("guy@label.com")
      cy.get("#message-contact-form").type("You sound great, i want you")

      cy.contains("Send It").should("be.disabled")
    })
  })

  describe("When I fill out the form correctly", function () {
    beforeEach(function () {
      cy.get("#name-contact-form").type("Record label guy")
      cy.get("#email-contact-form").type("guy@label.com")
      cy.get("#message-contact-form").type("You sound great, i want you")
    })

    describe("And i submit the form", function () {
      beforeEach(function () {
        cy.contains("Send It").click()
      })

      it("should remove the input fields", function () {
        cy.get("#name-contact-form").should("not.exist")
        cy.get("#email-contact-form").should("not.exist")
        cy.get("#message-contact-form").should("not.exist")
      })

      it("should say sending", function () {
        cy.contains("Sending Email")
      })

      describe("After it finishes", function () {
        beforeEach(function () {
          cy.wait("@sendEmail")
        })

        it("should say sent email after it finishes", function () {
          cy.contains("Email Sent!")
        })

        it("should be able to restart", function () {
          cy.contains("Send Another").click()

          cy.get("#name-contact-form").type("Record label guy")
          cy.get("#email-contact-form").type("guy@label.com")
          cy.get("#message-contact-form").type("You sound great, i want you")
        })
      })
    })
  })
})