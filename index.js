const fs = require('fs')
let arrayIOI = []
let arrayIOIT = []
let arrayIRU = []
let arrayIRT = []
let arrayIVS = []
let arrayASR = []
let arrayIS = []
let argumentos = process.argv.slice(2)
let [path] = argumentos

lstItemsIOI = fs.readdirSync(`${path}`,"utf8").filter(element => element.includes('ImportOrderInvoice'))
lstItemsIOIT = fs.readdirSync(`${path}`,"utf8").filter(element => element.includes('ImportOrderItemInvoiceItem'))
lstItemsIRU = fs.readdirSync(`${path}`,"utf8").filter(element => element.includes('ImportRegionUser'))
lstItemsIRT = fs.readdirSync(`${path}`,"utf8").filter(element => element.includes('ImportRoute'))
lstItemsIVS = fs.readdirSync(`${path}`,"utf8").filter(element => element.includes('ImportVisit'))
lstItemsASR = fs.readdirSync(`${path}`,"utf8").filter(element => element.includes('ImportStore'))
lstItemsIS = fs.readdirSync(`${path}`,"utf8").filter(element => element.includes('ImportStock'))

/*
GENERANDO ARCHIVO ImportOrderInvoice
*/
let generateIOI = (data,currentIndex) => {
    if(currentIndex<data.length){
        console.log('[Procesando]...',data[currentIndex])
        let content = fs.readFileSync(`${path}\\${data[currentIndex]}`,'utf-8').split('\n')
        // console.log(content)
        content.map(element => {
            arrayIOI.push(element.split('\t'))
        })
        generateIOI(data,currentIndex+1)
    }else{
        
        fs.writeFileSync('./ImportOrderInvoice.csv',arrayIOI.map(element => {
            // console.log(Object.values(element).join('|') + '\n')
            return Object.values(element).join('|') + '\n'
        }).join(''))
    }
}

generateIOI(lstItemsIOI,0)
/*
GENERANDO ARCHIVO ImportOrderItemInvoiceItem
*/
let generateIOIT = (data,currentIndex) => {
    if(currentIndex<data.length){
        console.log('[Procesando]...',data[currentIndex])
        let content = fs.readFileSync(`${path}\\${data[currentIndex]}`,'utf-8').split('\n')
        // console.log(content)
        content.map(element => {
            arrayIOIT.push(element.split('\t'))
        })
        generateIOIT(data,currentIndex+1)
    }else{
        
        fs.writeFileSync('./ImportOrderItemInvoiceItem.csv',arrayIOIT.map(element => {
            // console.log(Object.values(element).join('|') + '\n')
            return Object.values(element).join('|') + '\n'
        }).join(''))
    }
}
generateIOIT(lstItemsIOIT,0)
/*
GENERANDO ARCHIVO ImportRegionUser
*/ 
let generateIRU = (data,currentIndex) => {
    if(currentIndex<data.length){
        console.log('[Procesando]...',data[currentIndex])
        let content = fs.readFileSync(`${path}\\${data[currentIndex]}`,'utf-8').split('\n')
        // console.log(content)
        content.map(element => {
            arrayIRU.push(element.split('\t'))
        })
        generateIRU(data,currentIndex+1)
    }else{
        
        fs.writeFileSync('./ImportRegionUser.csv',arrayIRU.map(element => {
            // console.log(Object.values(element).join('|') + '\n')
            return Object.values(element).join('|') + '\n'
        }).join(''))
    }
}
generateIRU(lstItemsIRU,0)
/*
GENERANDO ARCHIVO ImportRoute
*/
let generateIRT = (data,currentIndex) => {
    if(currentIndex<data.length){
        console.log('[Procesando]...',data[currentIndex])
        let content = fs.readFileSync(`${path}\\${data[currentIndex]}`,'utf-8').split('\n')
        // console.log(content)
        content.map(element => {
            arrayIRT.push(element.split('\t'))
        })
        generateIRT(data,currentIndex+1)
    }else{
        
        fs.writeFileSync('./ImportRoute.csv',arrayIRT.map(element => {
            // console.log(Object.values(element).join('|') + '\n')
            return Object.values(element).join('|') + '\n'
        }).join(''))
    }
}
generateIRT(lstItemsIRT,0)
/*
GENERANDO ARCHIVO ImportVisit
*/
let generateIVS = (data,currentIndex) => {
    if(currentIndex<data.length){
        console.log('[Procesando]...',data[currentIndex])
        let content = fs.readFileSync(`${path}\\${data[currentIndex]}`,'utf-8').split('\n')
        // console.log(content)
        content.map(element => {
            arrayIVS.push(element.split('\t'))
        })
        generateIVS(data,currentIndex+1)
    }else{
        
        fs.writeFileSync('./ImportVisit.csv',arrayIVS.map(element => {
            // console.log(Object.values(element).join('|') + '\n')
            return Object.values(element).join('|') + '\n'
        }).join(''))
    }
}
generateIVS(lstItemsIVS,0)
/*
GENERANDO ARCHIVO ImportStore
*/
let generateASR = (data,currentIndex) => {
    if(currentIndex<data.length){
        console.log('[Procesando]...',data[currentIndex])
        let content = fs.readFileSync(`${path}\\${data[currentIndex]}`,'utf-8').split('\n')
        // console.log(content)
        content.map(element => {
            arrayASR.push(element.split('\t'))
        })
        generateASR(data,currentIndex+1)
    }else{
        
        fs.writeFileSync('./ImportStore.csv',arrayASR.map(element => {
            // console.log(Object.values(element).join('|') + '\n')
            return Object.values(element).join('|') + '\n'
        }).join(''))
    }
}
generateASR(lstItemsASR,0)
/*
GENERANDO ARCHIVO ImportStock
*/
let generateIS = (data,currentIndex) => {
    if(currentIndex<data.length){
        console.log('[Procesando]...',data[currentIndex])
        let content = fs.readFileSync(`${path}\\${data[currentIndex]}`,'utf-8').split('\n')
        // console.log(content)
        content.map(element => {
            arrayIS.push(element.split('\t'))
        })
        generateIS(data,currentIndex+1)
    }else{
        
        fs.writeFileSync('./ImportStock.csv',arrayIS.map(element => {
            // console.log(Object.values(element).join('|') + '\n')
            return Object.values(element).join('|') + '\n'
        }).join(''))
    }
}
generateIS(lstItemsIS,0)