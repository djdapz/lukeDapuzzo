describe("Luke's Website", () => {
    beforeEach(function () {
        cy.visit("http://luke-dapuzzo-client.cfapps.io/")
    });
    it('should show the subheader', function () {
        cy.contains("A solo songwriter and musician from Boulder, Colorado")
    });
});