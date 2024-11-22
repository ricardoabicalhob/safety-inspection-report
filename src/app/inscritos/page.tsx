import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type RiskProps = {
    risco :string
    acoes :string[]
    consequencias :string[]
    images :string[]
}

export default function Inscritos() {

    const content :RiskProps = {
        risco: 'Buraco na calçada em frente à porta de entrada do prédio administrativo',
        consequencias: ['Tropeços graves', 'Torções nos pés', 'Quedas graves resultando em morte'],
        acoes: ['Sinalização imediata do buraco', 'Fechamento do buraco'],
        images: []
    }

    return (
            
            <Card className="max-w-[960px]">
                <CardHeader className="grid grid-flow-row grid-cols-3 items-center bg-slate-200">
                    {/* <Image alt="" src={require('../../lib/images/logo-cipa-2.png')} width={100} height={100}/> */}
                    <CardTitle className="text-xl text-center">RELATÓRIO DE INSPEÇÃO DE SEGURANÇA DO TRABALHO</CardTitle>
                </CardHeader>
                {
                    content
                    &&
                    <CardContent className="flex flex-col gap-2 p-6">
                        <p className="font-bold">Situação de risco</p>
                        <p>{content.risco}</p>

                        <p className="font-bold">Fotos</p>

                        <div className="flex flex-row items-center justify-center flex-wrap p-6 gap-3 border-2 rounded-md">
                            
                        </div>

                        <p className="font-bold">Principais consequências</p>
                        {
                            content.consequencias.map((consequencia, index)=>(
                                <p key={index}>{consequencia}</p>
                            ))
                        }

                        <p className="font-bold">Ações recomendadas</p>
                        {
                            content.acoes.map((acao, index)=>(
                                <p key={index}>{acao}</p>
                            ))
                        }
                    </CardContent>
                    }
            </Card>
    )
}