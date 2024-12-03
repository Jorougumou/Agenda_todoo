import Agenda from '../components/Agenda'
import Listatodo from '../components/Listatodo'

export default function Afazeres() {
   return(
    <div className="bg-slate-300 h-full pb-40 w-full">
    <div className="w-full h-20 bg-slate-400 flex justify-center items-center font-semibold text-5xl text-white">Agenda</div>
    <Agenda/>

    
    <Listatodo/>
</div>
   )
}