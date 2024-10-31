function createCommonPDFContent(projectName, component, typeInterfaceApplication) {
    return [
        { 
            text: `Test Plan for ${projectName}`, 
            style: 'header' 
        },
        { 
            canvas: [
                { type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: '#DC143C' }
            ], 
            margin: [0, 0, 0, 20]
        },
        { 
            text: 'This Test Plan outlines quality measures in order to deliver the best solution.\n\n', 
            style: 'subheader'
        },
        {
            text: `Components: ${component}`, 
            style: 'sectionTitle'
        },
        {
            text: `Type of Interface Application: ${typeInterfaceApplication}`, 
            style: 'sectionTitle'
        },
        {
            ul: [
                { text: 'Resolution options: iPhone16, iPad, Laptop', style: 'listItem' },
                { text: 'Accessibility: WCAG 2.1 compliance', style: 'listItem' },
                { text: 'Security: Ensuring user data confidentiality', style: 'listItem' }
            ],
            margin: [0, 10, 0, 20]
        },
        {text: 'Performance of the application', style: 'header'},
		'This section is used to match the criterias for performance of this application.',
		{
			style: 'tableExample',
			table: {
				body: [
					['What are the key performance metrics for the application?', 'What is the maximum allowable downtime for the application?', 'What are the peak usage times, and how much traffic do you expect during these periods?'],
					['response time, throughput, resource utilization', 'uptime percentage, maintenance windows', 'daily users, concurrent users, usage spikes']
				]
			}
		}
    ];
}

function createPDFStyles() {
    return {
        header: {
            fontSize: 24,
            bold: true,
            color: '#333',
            margin: [0, 20, 0, 10]
        },
        subheader: {
            fontSize: 16,
            italics: true,
            color: '#DC143C',
            margin: [0, 0, 0, 20]
        },
        sectionTitle: {
            fontSize: 14,
            bold: true,
            color: '#DC143C',
            margin: [0, 15, 0, 5]
        },
        listItem: {
            fontSize: 12,
            color: '#333',
            margin: [0, 0, 0, 5]
        }
    };
}

export function getPDFContentForServer(projectName, component, browsers) {
    let pdfContent = {
        content: createCommonPDFContent(projectName, component, browsers),
        styles: createPDFStyles(),
        defaultStyle: {
            font: 'Helvetica'
        }
    };

    return pdfContent;
}

export function getPDFContentForClient(projectName, component, browsers) {
    let pdfContent = {
        content: createCommonPDFContent(projectName, component, browsers),
        styles: createPDFStyles()
    };

    return pdfContent;
}