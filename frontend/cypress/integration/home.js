describe("Home page", () => {
  beforeEach(function () {
    cy.setupDefaultServer()
    cy.visit("/")
  })

  it("should display lukes mini bio", function () {
    cy.contains("A solo songwriter and musician from Boulder, Colorado")
  })

  it("should load songs", function () {
    cy.wait("@getMusic")
  })

  it("should load bio", function () {
    cy.wait("@getBio")
  })

  it("should load shows", function () {
    cy.wait("@getShows")
  })

  describe("once everything has loaded", () => {
    beforeEach(() => {
      cy.wait("@getMusic")
      cy.wait("@getBio")
      cy.wait("@getShows")
    })

    describe("When i navigate to...", () => {
      beforeEach(() => cy.get("#social-media-hamburger").click())

      describe("...the bio page", () => {
        beforeEach(() => cy.contains("BIO").click())

        it("should show the bio", () => {
          cy.contains("I am luke and I am great musician")
          cy.contains("check me out on soundcloud")
        })
      })

      describe("...the music page", () => {
        beforeEach(() => cy.contains("MUSIC").click())

        it("should have two spotify iframes", function () {
          cy.get(".music-container").should(it => {
            expect(it.length).to.eql(2)
          })
          cy.get(".music-label-container").should(it => {
            expect(it.length).to.eql(1)
            expect(it[0].innerText).to.contain("spotify")
          })
        })

      })
    })
  })
})