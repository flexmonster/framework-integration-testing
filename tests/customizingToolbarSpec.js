describe('testing Customizing Toolbar page', () => {
    before((client) => {
        client.window.maximize();
        this.currentPage = client.page.customizingToolbarPage();
        this.pivotContainer = this.currentPage.section.pivotContainer;
        this.currentPage.navigate();

        //common sections
        this.sidebar = client.page.commons.sidebar();
        this.navbar = client.page.commons.navbar();
        this.fieldList = client.page.commons.fieldList();
        this.pivotGrid = client.page.commons.pivotGrid();
    });

    it("Checks common sections", () => {
        this.currentPage.navigate();
        this.navbar.runTestSuit();
        this.sidebar.runTestSuit();
        //different Toolbar
        this.pivotGrid.runTestSuit();
        this.fieldList.runTestSuit();
    });

    it("Check 'Customizig the Toolbar' link to docs", (browser) => {
        this.pivotContainer.section.description.expect
            .element('@toCustomizingToolbarLink').to.be.visible;
        this.pivotContainer.section.description.expect
            .element('@toCustomizingToolbarLink').text.to.be.equal('Customizing the Toolbar');
        this.pivotContainer.section.description.expect
            .element('@toCustomizingToolbarLink').to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/doc/customizing-toolbar');
    });

    xit('Check New Tab on the Toolbar', (browser) => {
        this.pivotContainer.section.toolbar.section.leftGroup.expect
            .element('@newTab').to.be.visible;
        this.pivotContainer.section.toolbar.section.leftGroup.expect
            .element('@newTab').text.to.be.equal("New Tab");
        browser
            .waitForElementVisible('#fm-tab-newtab')
            .click('#fm-tab-newtab a');
        this.pivotContainer.expect.section('@popup').to.be.visible;
        this.pivotContainer.section.popup.expect.element('@popupTitle').text.to.be.equal('Customizing Flexmonster');
        this.pivotContainer.section.popup.expect.element('@popupLink')
            .to.have.attribute('href').which.contains('https://www.flexmonster.com/doc/customizing-toolbar');
        this.pivotContainer.section.popup.click('@popupOkButton');
    });

    after(client => client.end());
});