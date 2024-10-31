import { pdfModelServer } from './src/pdf/pdf-model-server.js'
import { testPlanCommandLine } from './src/command-line/test-plan-commandline.js'
import { getPDFContentForServer } from './src/pdf/models/template.js'

/*
this will return the object:
{
  answerPdfGeneration:  answerPdfGeneration,
  projectName: projectName,
  components: components,
  typeOfInterfaceApplication: typeOfInterfaceApplication
}
*/
let answer = await testPlanCommandLine()

if(answer.answerPdfGeneration === true){
    let pdfContent = getPDFContentForServer(answer.projectName, answer.components, answer.typeOfInterfaceApplication)
    pdfModelServer(pdfContent)
}