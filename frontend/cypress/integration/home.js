describe("Home page", () => {
  beforeEach(function () {
    cy.server()

    cy.route({
      method: "GET",
      url: "/bio",
      response: {
        bio: "I am luke and I am great musician\ncheck me out on soundcloud"
      }
    }).as("getBio")

    cy.route({
      method: "GET",
      url: "/shows",
      response: [
        {
          "id": 1,
          "date": "2017-07-23",
          "notes": "Acoustic",
          "venue": {
            "id": 6,
            "name": "The Beebop",
            "googleMapsLink": "https://goo.gl/maps/6cwSXNDx9bF2",
            "city": { "id": 3, "name": "Boston", "state": { "abbreviation": "MA", "name": "Massachusetts" } }
          }
        },
        {
          "id": 2,
          "date": "2017-07-23",
          "notes": "Acoustic",
          "venue": {
            "id": 6,
            "name": "The Beebop",
            "googleMapsLink": "https://goo.gl/maps/6cwSXNDx9bF2",
            "city": { "id": 3, "name": "Boston", "state": { "abbreviation": "MA", "name": "Massachusetts" } }
          }
        }
      ]
    }).as("getShows")

    cy.route({
      method: "GET",
      url: "/music",
      response: [
        {
          "id": "58aKFIYVnNLw5ruYQOPRiv",
          "name": "Ignorance Is Bliss",
          "type": "SPOTIFY_ALBUM"
        },
        {
          "id": "6fg9COUD9wwohdHuSBJuuI",
          "name": "Nostalgia",
          "type": "SPOTIFY_SONG"
        }
      ]
    }).as("getMusic")

    cy.visit("http://localhost:3210")
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