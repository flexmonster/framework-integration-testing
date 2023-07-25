describe('check Flexmonster Composition API Demo page', () => {

    before((client) => {

        this.currentPage = client.page.compositionAPIPage();
        this.currentPage.navigate();
        //client.resizeWindow(1700, 1200);
        client.windowMaximize();
        //common sections
        this.sidebar = client.page.commons.sidebar();
        this.navbar = client.page.commons.navbar();
        this.toolbar = client.page.commons.toolbar();
        this.fieldList = client.page.commons.fieldList();

        //selectors
        this.calculatedValuesPopup = client.page.commons.calculatedValues();
        this.pivotGrid = client.page.commons.pivotGrid();
        this.pivotExample = this.currentPage.section.pivotContainer;
    });

    it("Checks common sections", (client) => {
        this.navbar.runTestSuit();
        this.sidebar.runTestSuit();
        this.pivotGrid.runTestSuit();
        this.toolbar.runTestSuit();
        this.fieldList.runTestSuit();
        this.calculatedValuesPopup.runTestSuit();
    });

    it('Check title', () => {
        this.pivotExample.expect.element('@mainTitle').to.be.visible;
        this.pivotExample.expect.element('@mainTitle').text.to.be.equal("Pivot Table Demo (Composition API)");
    });

    it('Check link to Vue docs', () => {
        this.pivotExample.section.description
            .expect.element('@toCompositionAPIVueLink').to.be.visible;
        this.pivotExample.section.description
            .expect.element('@toCompositionAPIVueLink').text.to.be.equal('Composition API');
        this.pivotExample.section.description.expect.element('@toCompositionAPIVueLink')
            .to.have.attribute('href').which.contains('https://vuejs.org/guide/extras/composition-api-faq.html');
    });

    it('Check link to Flexmonster docs', () => {
        this.pivotExample.section.description
            .expect.element('@toCompositionAPIGuideLink').to.be.visible;
        this.pivotExample.section.description
            .expect.element('@toCompositionAPIGuideLink').text.to.be.equal('Creating the pivot table using CompositionAPI');
        this.pivotExample.section.description
            .expect.element('@toCompositionAPIGuideLink').to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/doc/flexmonster-in-vue-3/?r=rm_vue/#composition-api');
    });

    after(client => client.end());
});
