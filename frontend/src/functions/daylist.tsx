import { getDaysInMonth} from 'date-fns'


export default function datamonth(datab:Date){
    let list = []
    let inicio=1
    let ano = datab.getFullYear()
    let mes = datab.getMonth()
    let dia = getDaysInMonth(datab)

    while (inicio != dia+1) {
        list.push(new Date(ano,mes,inicio))
        inicio++
    }
    return(list)
}