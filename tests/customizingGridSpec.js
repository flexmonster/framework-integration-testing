xdescribe('testing Customizing Grid page', () => {
    before((client) => {
        this.customizingGridPage = client.page.customizingGridPage();
        this.pivotContainer = this.customizingGridPage.section.pivotContainer;
        this.customizingGridPage.navigate();
    });

    it("Check 'Customizig the Grid' link to docs", (browser) => {
        this.pivotContainer.section.description.expect
            .element('@toCustomizingGridLink').to.be.visible;
        this.pivotContainer.section.description.expect
            .element('@toCustomizingGridLink').text.to.be.equal('Customizing the grid');
        this.pivotContainer.section.description.expect
            .element('@toCustomizingGridLink').to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/doc/customizing-grid');
    });

    it('Check Customizing the grid Toggle (enabled)', (browser) => {
        this.pivotContainer.section.toggle.expect.element('@checkbox').to.be.selected;
        this.pivotContainer.section.toggle.expect.element('@checkboxLabel')
            .text.to.be.equal("The grid cells are customized");
        browser.assert.cssProperty("#customizationToggle label", "background-color", "rgba(0, 164, 90, 1)");
    });

    it('Check Customizing the grid Toggle (disable)', (browser) => {
        this.pivotContainer.section.toggle.expect.element('@checkbox').to.be.selected;
        browser
            .waitForElementVisible('#customizationToggle')
            .click('#customizationToggle label');
        this.pivotContainer.section.toggle.expect.element('@checkbox').to.not.be.selected;

        this.pivotContainer.section.toggle.expect
            .element('@checkboxLabel').text.to.be.equal("The grid cells are not customized")
        browser.assert.cssProperty("#customizationToggle label", "background-color", "rgba(193, 193, 193, 1)");
    });

    after(client => client.end());
});
