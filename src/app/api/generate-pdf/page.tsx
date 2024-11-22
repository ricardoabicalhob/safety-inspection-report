import puppeteer from 'puppeteer'
import os from 'os'
import path from 'path'
import { redirect } from 'next/navigation'

export default async function GeneratePdf() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('http://ricardoabicalhob.github.io/safety-inspection-report/inscritos')

    const downloadsPath = os.homedir() + '/Downloads'

    const pdfPath = path.join(downloadsPath, 'meu-pdf.pdf')

    await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: {top: '1cm', right: '1cm', bottom: '1cm', left: '1cm'}
    })

    await browser.close()
    
    redirect('/')
}