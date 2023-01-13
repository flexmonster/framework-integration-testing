xdescribe('check Flexmonster Demo page', () => {
    before((client) => {
        this.currentPage = client.page.homepage();
        this.pivotExample = this.currentPage.section.mainContainer.section.pivotExample;
        this.currentPage.navigate();
    });

    it('Check title', () => {
        this.pivotExample.expect.element('@mainTitle').to.be.visible;
        this.pivotExample.expect.element('@mainTitle').text.to.be.equal("Pivot Table Demo");    
    }); 

    after(client => client.end());
});
