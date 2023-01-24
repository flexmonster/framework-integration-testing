xdescribe('check Flexmonster Demo page', () => {
    before((client) => {
        this.currentPage = client.page.demoPage();
        this.sidebar = client.page.commons.sidebar();
        this.navbar = client.page.commons.navbar();
        this.toolbar = client.page.commons.toolbar();
        this.fieldList = client.page.commons.fieldList();
        this.calculatedValuesPopup = client.page.commons.calculatedValues();
        this.pivotGrid = client.page.commons.pivotGrid();
        this.pivotExample = this.currentPage.section.mainContainer.section.pivotExample;
        this.currentPage.navigate();
    });

    it("Checks common sections", (client) => {
        this.navbar.runTestSuit();
        this.sidebar.runTestSuit();
        this.toolbar.runTestSuit();
        this.fieldList.runTestSuit();
        this.calculatedValuesPopup.runTestSuit();
        this.pivotGrid.runTestSuit();
    });

    it('Check title', () => {
        this.pivotExample.expect.element('@mainTitle').to.be.visible;
        this.pivotExample.expect.element('@mainTitle').text.to.be.equal("Pivot Table Demo");    
    });

    it('Check link', () => {
        this.pivotExample.expect.element('@linkToDocs').to.be.visible;
        this.pivotExample.expect.element('@linkToDocs')
            .to.have.attribute('href').which.contains('https://www.flexmonster.com/doc/');
    });

    after(client => client.end());
});