'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <Button onClick={()=> window.location.href = '/api/generate-pdf-2'}>Emitir relatório</Button>
          {/* <a href="ricardoabicalhob.github.io/safety-inspection-report/api/generate-pdf" download={'ricardoabicalhob.github.io/safety-inspection-report/api/generate-pdf'}>Baixar PDF</a> */}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href={'/api/generate-pdf-2'}>
          Baixar o relatório em PDF
        </Link>
      </footer>
    </div>
  );
}
