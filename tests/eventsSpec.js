describe('testing events page', () => {
    const gridVisibilityTimeout = 10000;

    before((client) => {
        browser.timeoutsImplicitWait(gridVisibilityTimeout);
        client.window.maximize();
        this.currentPage = client.page.eventsPage();
        this.pivotContainer = this.currentPage.section.pivotContainer;
        this.currentPage.navigate();

        //common sections
        this.sidebar = client.page.commons.sidebar();
        this.navbar = client.page.commons.navbar();
        this.toolbar = client.page.commons.toolbar();
        this.fieldList = client.page.commons.fieldList();
        this.pivotGrid = client.page.commons.pivotGrid();
    });

    it("Checks common sections", () => {
        browser.waitUntil(async () => {
            const result = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(true);
                }, gridVisibilityTimeout / 2);
            });
            return result;
        }, gridVisibilityTimeout);
        this.navbar.runTestSuit();
        this.sidebar.runTestSuit();
        this.pivotGrid.runTestSuit();
        this.toolbar.runTestSuit();
        this.fieldList.runTestSuit();
    });

    it('Check link to docs', (browser) => {
        this.pivotContainer.section.description
            .expect.element('@toFMEventsLink').to.be.visible;
        this.pivotContainer.section.description
            .expect.element('@toFMEventsLink').text.to.be.equal('Flexmonster event')
        this.pivotContainer.section.description
            .expect.element('@toFMEventsLink').to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/api/events');
    });


    it('Check toggle(enabled)', (client) => {
        this.pivotContainer.section.toggle.expect.element('@checkbox').to.be.selected;
        this.pivotContainer.section.toggle.expect.element('@checkboxLabel').text.to.be.equal("Events are tracked");
        client.assert.cssProperty("#eventsToggle label", "background-color", "rgba(0, 164, 90, 1)");
    });

    it('Check toggle(disable)', (client) => {
        this.pivotContainer.section.toggle.expect.element('@checkbox').to.be.selected;
        client
            .waitForElementVisible('#eventsToggle')
            .click('#eventsToggle label');
        this.pivotContainer.section.toggle.expect.element('@checkbox').to.not.be.selected;
        this.pivotContainer.section.toggle.expect.element('@checkboxLabel').text.to.be.equal("Events are not tracked")
        client.assert.cssProperty("#eventsToggle label", "background-color", "rgba(193, 193, 193, 1)");
        client
            .waitForElementVisible('#eventsToggle')
            .click('#eventsToggle label');
    });

    it('Check events output', (client) => {
        // Ensure element is in viewport by scrolling to it
        browser.execute(function () {
            const element = document.querySelector('div.event-logs-wrapper');
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });

        // Wait a bit for scroll to complete
        browser.pause(1000);
        this.pivotContainer
            .expect.section('@eventsOutput').to.be.visible;
        this.pivotContainer.section.eventsOutput
            .expect.element('@firstLine').to.be.visible;
        this.pivotContainer.section.clearOutput
            .expect.element('@clearOutputButton').to.be.visible;
    });


    after(client => client.end());
});