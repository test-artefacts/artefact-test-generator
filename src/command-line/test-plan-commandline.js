import { input } from '@inquirer/prompts'
import { select, confirm } from '@inquirer/prompts'

export async function testPlanCommandLine(){

    const projectName = await input({ message: 'Enter your project name: ' })

    const components = await select({
        message: 'Select the component you want the test plan: ',
        choices: [
        {
            name: 'backend',
            value: 'backend',
            description: 'The test plan will be generated following the component backend',
        },
        {
            name: 'frontend',
            value: 'frontend',
            description: 'The test plan will be generated following the component backend',
        },
        {
            name: 'backend + frontend',
            value: 'backend + frontend',
            description: 'The test plan will be generated following the component backend + frontend',
        }
        ],
    });

    let typeOfInterfaceApplication = 'none';
    if (components != 'backend'){
        typeOfInterfaceApplication = await select({
            message: 'Select the type of the interface: ',
            choices: [
            {
                name: 'desktop',
                value: 'desktop'
            },
            {
                name: 'web',
                value: 'web'
            },
            {
                name: 'mobile',
                value: 'mobile',
            },
            {
                name: 'desktop + web + mobile',
                value: 'desktop + web + mobile',
            }
            ],
        });
    }

    const answerPdfGeneration = await confirm({ message: 'Should we generate the test plan for you?' });

    return {
        answerPdfGeneration:  answerPdfGeneration,
        projectName: projectName,
        components: components,
        typeOfInterfaceApplication: typeOfInterfaceApplication
    }
}