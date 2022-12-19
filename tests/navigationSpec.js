xdescribe('Testing navbar', () => {
    before((client) => {
        this.homepage = client.page.homepage();
        this.navbar = this.homepage.section.navbar;
        this.homepage.navigate();
    });

    it("Check navbar logo link", () => {
        this.navbar.expect.section('@logo').to.be.visible;
        this.navbar.expect.section('@logo').to.have.attribute('href').which.contains('https://www.flexmonster.com');
        this.navbar.section.logo.expect.element('@logoImg').to.be.visible;
        this.navbar.section.logo.expect.element('@logoImg').to.have.attribute('src').which.contains('/img/svg/logo.svg');
    });

    it("Check navbar 'Integration with Vue2' link", () => {
        this.navbar.section.links.expect.element('@toVue2IntegrationLink').to.be.visible;
        this.navbar.section.links.expect.element('@toVue2IntegrationLink')
            .to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/doc/integration-with-vue-2');
        this.navbar.section.links.expect.element('@toVue2IntegrationLink').text.to.be.equal("INTEGRATION WITH VUE 2");

    });

    it("Check navbar 'Docs' link", () => {
        this.navbar.section.links.expect.element('@toDocsLink').to.be.visible;
        this.navbar.section.links.expect.element('@toDocsLink')
            .to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/doc');
        this.navbar.section.links.expect.element('@toDocsLink').text.to.be.equal("DOCS");

    });

    it("Check navbar 'Help Center' link", () => {
        this.navbar.section.links.expect.element('@toHelpCenterLink').to.be.visible;
        this.navbar.section.links.expect.element('@toHelpCenterLink')
            .to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/help-center');
        this.navbar.section.links.expect.element('@toHelpCenterLink').text.to.be.equal("HELP CENTER");

    });

    it("Check navbar 'Contact us' link", () => {
        this.navbar.section.links.expect.element('@toContactLink').to.be.visible;
        this.navbar.section.links.expect.element('@toContactLink')
            .to.have.attribute('href')
            .which.contains('https://www.flexmonster.com/contact');
        this.navbar.section.links.expect.element('@toContactLink').text.to.be.equal("CONTACT US");
    });

    after(client => client.end());
});
