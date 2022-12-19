xdescribe('check Flexmonster Demo page', () => {
    before((client) => {
        this.homepage = client.page.homepage();
        this.pivotExample = this.homepage.section.mainContainer.section.pivotExample;
        this.homepage.navigate();
    });

    it('Check title', () => {
        this.pivotExample.expect.element('@mainTitle').to.be.visible;
        this.pivotExample.expect.element('@mainTitle').text.to.be.equal("Pivot Table Demo");    
    }); 

    after(client => client.end());
});
