import { pdfModelServer } from './src/pdf/pdf-model-server.js'
import { getPDFContentForServer } from './src/pdf/models/template.js'

let pdfContent = getPDFContentForServer('My project', 'frontend', 'device')
pdfModelServer(pdfContent)