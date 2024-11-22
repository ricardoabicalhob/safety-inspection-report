import { redirect } from 'next/navigation'
import puppeteer from 'puppeteer'

export default async function GeneratePdf() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('http://localhost:3000/inscritos')

    await page.pdf({
        path: './src/lib/meu-pdf.pdf',
        format: 'A4',
        printBackground: true,
        margin: {top: '1cm', right: '1cm', bottom: '1cm', left: '1cm'}
    })

    await browser.close()
    redirect('/')
}