describe("Luke's Website", () => {
    beforeEach(function () {
        cy.visit("https://https://luke-dapuzzo-client.cfapps.io/")
    });
    it('should show the subheader', function () {
        cy.contains("A solo songwriter and musician from Boulder, Colorado")
    });
});