let testSuit = {

    runTestSuit: function () {

        const navbar = this.section.navbar;

        describe("Check navigation header", () => {
            it("Check navbar logo link", () => {
                navbar.expect.section('@logo').to.be.visible;
                navbar.expect.section('@logo').to.have.attribute('href').which.contains('https://www.flexmonster.com');
                navbar.section.logo.expect.element('@logoImg').to.be.visible;
                navbar.section.logo.expect.element('@logoImg').to.have.attribute('src').which.contains('/img/svg/logo.svg');
            });

            it("Check navbar 'Integration with Vue2/3' link", () => {
                navbar.section.links.expect.element('@toVueIntegrationLink').to.be.visible;
                navbar.section.links.expect.element('@toVueIntegrationLink')
                    .to.have.attribute('href')
                    .which.contains('https://www.flexmonster.com/doc/integration-with-vue');
                navbar.section.links.expect.element('@toVueIntegrationLink').text.to.contain("INTEGRATION WITH VUE");

            });

            it("Check navbar 'Docs' link", () => {
                navbar.section.links.expect.element('@toDocsLink').to.be.visible;
                navbar.section.links.expect.element('@toDocsLink')
                    .to.have.attribute('href')
                    .which.contains('https://www.flexmonster.com/doc');
                navbar.section.links.expect.element('@toDocsLink').text.to.be.equal("DOCS");

            });

            it("Check navbar 'Help Center' link", () => {
                navbar.section.links.expect.element('@toHelpCenterLink').to.be.visible;
                navbar.section.links.expect.element('@toHelpCenterLink')
                    .to.have.attribute('href')
                    .which.contains('https://www.flexmonster.com/help-center');
                navbar.section.links.expect.element('@toHelpCenterLink').text.to.be.equal("HELP CENTER");

            });

            it("Check navbar 'Contact us' link", () => {
                navbar.section.links.expect.element('@toContactLink').to.be.visible;
                navbar.section.links.expect.element('@toContactLink')
                    .to.have.attribute('href')
                    .which.contains('https://www.flexmonster.com/contact');
                navbar.section.links.expect.element('@toContactLink').text.to.be.equal("CONTACT US");
            });

        });
    }
}

module.exports = {
    commands: [testSuit],
    sections: {
        navbar: {
            selector: "header > div.container-xl",
            sections: {
                logo: {
                    selector: 'a.logo',
                    elements: {
                        logoImg: 'img',
                    }
                },
                links: {
                    selector: "ul.mainnav",
                    elements: {
                        toVueIntegrationLink: 'li:nth-child(1) > a',
                        toDocsLink: 'li:nth-child(2) > a',
                        toHelpCenterLink: 'li:nth-child(3) > a',
                        toContactLink: 'li:nth-child(4) > a',
                    }
                }
            }
        }
    }
}
