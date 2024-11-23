'use server'

import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

export default async function GeneratePdf(req :NextApiRequest, res :NextApiResponse) {
        function uint8ArrayToBase64(array :Uint8Array) {
            // @ts-expect-error
            return btoa(String.fromCharCode.apply(null, array as any)); 
        }

        const browser = await puppeteer.launch()
        const page = await browser.newPage()

        await page.goto('http://ricardoabicalhob.github.io/safety-inspection-report/inscritos')
        
        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: {top: '1cm', right: '1cm', bottom: '1cm', left: '1cm'}
        })

        const base64Buffer = uint8ArrayToBase64(pdfBuffer)
        const dataUrl = `data:application/pdf;base64,${base64Buffer}`       
        
        await browser.close()

        res?.setHeader('Content-Type', 'application/pdf')
        //res?.setHeader('Content-Disposition', 'attachment; filename="meu-pdf.pdf"')
        res?.send(base64Buffer)

        return(
            <div className="h-screen w-screen">
                <iframe src={dataUrl} width="100%" height="100%"></iframe>
            </div>
        )
}