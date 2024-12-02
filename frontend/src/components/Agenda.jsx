import { add, format,getDaysInMonth, sub } from "date-fns";
import Dia from './Dia'
import { useEffect, useState } from "react";
export default function Agenda() {
   const [datab = new Date,setDatab] = useState()

    function numberlist(limite){
        let list = []
        let inicio=1
        while (inicio != limite+1) {
            list.push(inicio)
            inicio++
        }

        return(list)
    }

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
        <div className="w-8/12 bg-orange-300 h-[500px] flex flex-col mt-4 mx-auto">
            <div className="w-full bg-orange-400 h-16 flex justify-around items-center">
                <button onClick={voltarmes} className="bg-gray-50 rounded-full w-10 ">{'<'}</button>
                <h2 className="text-3xl text-white font-medium">{format(datab,'MMMM yyyy')}</h2>
                <button onClick={avancarmes} className="bg-gray-50 rounded-full w-10 ">{'>'}</button>
            </div> 
            <div className="bg-slate-100 grid grid-cols-7 grid-rows-6  h-full ">
                <div className="w-full grid grid-cols-7  bg-slate-400  col-span-7">  
                {["dom","seg","ter","qua","qui","sex","sab"].map((index) => 
                    <p className="flex justify-center items-center border border-black">{index}</p>
                )}     
                </div>
                {numberlist(getDaysInMonth(datab)).map( (index) => 
                
                    <Dia key={index} dia={index}/>
                )}
            </div>
        </div>
    );
}