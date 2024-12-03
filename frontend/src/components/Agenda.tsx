import { add, format,getDaysInMonth, sub } from "date-fns";
import Dia from './Dia'
import daylist from '../functions/daylist'
import { useEffect, useState } from "react";
export default function Agenda() {
   const [datab = new Date,setDatab] = useState<Date | undefined>()

    

    function voltarmes(){
        setDatab(sub(datab,{ years: 0,
            months: 1,
            weeks: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0}))
    }

    function avancarmes(){
        setDatab(add(datab,{ years: 0,
            months: 1,
            weeks: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0}))
    }

   


    return (
        <div className="w-8/12 bg-orange-300 rounded-t-full h-[600px] flex flex-col mt-4 mx-auto">
            <div className="w-full rounded-t-[40px] bg-orange-400 h-16 flex justify-around items-center">
                <button onClick={voltarmes} className="bg-gray-50 rounded-full w-10 ">{'<'}</button>
                <h2 className="text-3xl text-white font-medium">{format(datab,'MMMM yyyy')}</h2>
                <button onClick={avancarmes} className="bg-gray-50 rounded-full w-10 ">{'>'}</button>
            </div> 
            <div className="w-full grid grid-cols-7 h-16  bg-slate-400">  
                {["dom","seg","ter","qua","qui","sex","sab"].map((index) => 
                    <p key={index.toString()} className="flex justify-center items-center border border-black">{index}</p>
                )}     
                </div>
        
            <div className="bg-slate-100 grid grid-cols-7 grid-rows-5  h-full ">
                
                {daylist(datab).map( (index) => 
                    
                    <Dia id={format(index,'d')}  key={format(index,'d')} dia={format(index,'d')}/>
                )}
            </div>
        </div>
    );
}