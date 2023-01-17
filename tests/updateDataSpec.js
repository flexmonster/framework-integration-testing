xdescribe('testing Update data page', () => {

    before((client) => {
        this.currentPage = client.page.updateDataPage();
        this.sidebar = client.page.commons.sidebar();
        this.navbar = client.page.commons.navbar();
        this.toolbar = client.page.commons.toolbar();
        this.pivotContainer = this.currentPage.section.pivotContainer;
        this.currentPage.navigate();
    });


    it("Checks common sections", () => {
        this.navbar.runTestSuit();
        this.sidebar.runTestSuit();
        this.toolbar.runTestSuit();
        //different grid and fields in Field List
    });

    it('Check link to docs', () => {
        this.pivotContainer.section.description.expect.element('@toUpdateDataLink').to.be.visible;
        this.pivotContainer.section.description
            .expect.element('@toUpdateDataLink').to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/api/updatedata');
    });

    it('Check update data button', (client) => {
        this.pivotContainer.expect.element('@updateDataButton').to.be.visible;
        this.pivotContainer.section.pivot.section.gridContainer
            .expect.element('@row1col1').to.be.visible;
        const cellValue = '100';//TODO extract value from cell using Nightwatch API
        this.pivotContainer.section.pivot.section.gridContainer
            .expect.element('@row1col1').text.to.be.equal(cellValue);
        this.pivotContainer.click('@updateDataButton');
        this.pivotContainer.section.pivot.section.gridContainer
            .waitForElementPresent('@row1col1');
        this.pivotContainer.section.pivot.section.gridContainer
            .expect.element('@row1col1').text.to.not.be.equal(cellValue);
    });

    after(client => client.end());

});
