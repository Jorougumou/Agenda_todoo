

interface propsDia {
    dia:string
}


export default function Dia(props:propsDia) {
    return (
        <button className='border flex justify-center items-center flex-col hover:bg-slate-200'>
                <p className="mx-auto">{props.dia}</p>
        </button>
    );
}