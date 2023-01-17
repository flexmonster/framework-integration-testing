xdescribe('testing using API calls page', () => {
    before((client) => {
        this.currentPage = client.page.apiCallsPage();
        this.sidebar = client.page.commons.sidebar();
        this.navbar = client.page.commons.navbar();
        this.toolbar = client.page.commons.toolbar();
        this.fieldList = client.page.commons.fieldList();
        this.pivotContainer = this.currentPage.section.pivotContainer;
        this.currentPage.navigate();
    });

    it("Checks common sections", () => {
        this.navbar.runTestSuit();
        this.sidebar.runTestSuit();
        this.toolbar.runTestSuit(); //configurator button hidden when read-only
      //  this.fieldList.runTestSuit(); // fails when creating calculated value measure
    });

    it('Check Using API calls link to docs', (browser) => {
        this.pivotContainer.section.description.expect
            .element('@linkToAPICalls').to.be.visible;
        this.pivotContainer.section.description.expect
            .element('@linkToAPICalls').text.to.be.equal('API calls');
        this.pivotContainer.section.description.expect
            .element('@linkToAPICalls').to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/api/methods');
    });

    it('Check Using API calls view toggle(column chart)', (browser) => {
        this.pivotContainer.section.viewToggle.expect.element('@viewCheckbox').to.be.selected;
        browser
            .waitForElementVisible('#viewToggle').click('#viewToggle label');
        this.pivotContainer.section.viewToggle.expect
            .element('@viewCheckbox').to.not.be.selected;
        this.pivotContainer.section.viewToggle.expect
            .element('@viewCheckboxLabel').text.to.be.equal("Column chart")
        browser.assert.cssProperty("#viewToggle label", "background-color", "rgba(223, 56, 0, 1)");
        this.pivotContainer.section.pivot.expect.element('@gridContainer').to.not.be.visible;
        this.pivotContainer.section.pivot.expect.element('@chartsContainer').to.be.visible;
    });


    it('Check Using API calls view toggle(grid)', (browser) => {
        this.pivotContainer.section.viewToggle.expect
            .element('@viewCheckbox').to.not.be.selected;
        browser
            .waitForElementVisible('#viewToggle').click('#viewToggle label');
        this.pivotContainer.section.viewToggle.expect
            .element('@viewCheckbox').to.be.selected;
        this.pivotContainer.section.viewToggle.expect
            .element('@viewCheckboxLabel').text.to.be.equal("Grid");
        browser.assert.cssProperty("#viewToggle label", "background-color", "rgba(0, 164, 90, 1)");
        this.pivotContainer.section.pivot.expect.element('@gridContainer').to.be.visible;
    });

    it('Check Using API calls mode toggle(read-only)', (browser) => {
        this.pivotContainer.section.modeToggle.expect.element('@modeCheckbox').to.be.selected;
        browser
            .waitForElementVisible('#modeToggle').click('#modeToggle label');
        this.pivotContainer.section.modeToggle.expect
            .element('@modeCheckbox').to.not.be.selected;
        this.pivotContainer.section.modeToggle.expect
            .element('@modeCheckboxLabel').text.to.be.equal("Read-only");
        browser.assert.cssProperty("#modeToggle label", "background-color", "rgba(223, 56, 0, 1)");
        this.pivotContainer.section.pivot.expect.element('@configuratorButton').to.not.be.visible;
       // browser.click('#modeToggle label');
    });

    it('Check Using API calls mode toggle(interactive)', (browser) => {
        this.pivotContainer.section.modeToggle.expect.element('@modeCheckbox').to.not.be.selected;
        browser
            .waitForElementVisible('#modeToggle').click('#modeToggle label');
        this.pivotContainer.section.modeToggle.expect
            .element('@modeCheckbox').to.be.selected;
        this.pivotContainer.section.modeToggle.expect
            .element('@modeCheckboxLabel').text.to.be.equal("Interactive");
        browser.assert.cssProperty("#modeToggle label", "background-color", "rgba(0, 164, 90, 1)");
        this.pivotContainer.section.pivot.expect.element('@configuratorButton').to.be.visible;
    });

    after(client => client.end());
});
