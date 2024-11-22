const ejs = require('ejs')
const path = require('path')
const pdf = require('html-pdf')

export default function About() {

    const filePath = path.join(__dirname, '../', '../', 'lib', 'print.ejs')
    
    return(
        <div>
            <p>About page</p>
            {
                
                ejs.renderFile(
                    filePath, {}, (err, data)=>{
                        if(err){
                            console.log(err)
                        }

                        console.log('iniciando conversao')

                        const options = {
                            height: "11.25in",
                            width: "8.5in",
                            header: {
                                height: "20mm"
                            },
                            footer: {
                                height: "20mm"
                            }
                        }

                        pdf.create(data, options).toFile("report.pdf", (err, data)=>{
                            if(err){

                            }

                            console.log('pdf criado com sucesso')
                        })
            
                        return data
                    }
                )
            }
        </div>
    )
}