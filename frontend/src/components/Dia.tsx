

interface propsDia {
    dia:string
    id:string
}


export default function Dia(props:propsDia) {
    return (
        <button id={props.id} className='border flex justify-center items-center flex-col hover:bg-slate-200'>
                <p className="mx-auto">{props.dia}</p>
        </button>
    );
}