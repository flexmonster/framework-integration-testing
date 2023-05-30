module.exports = {
    url: "/with-amcharts",
    sections: {
        pivotContainer: {
            selector: "div.wrap > div.pivot-example-container",
            sections: {
                description: {
                    selector: "div.first-description-block",
                    elements: {
                        toAMChartsIntegrationLink: "a.title-link"
                    }
                },
                chart: {
                    selector: "div.chart-container",
                    elements: {
                        amCharts: "div#amcharts-container"
                    }
                }
            }
        }
    }
};
