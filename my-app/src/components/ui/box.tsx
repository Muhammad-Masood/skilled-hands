import {FC} from "react"
interface Iprops{
    header:string;
    id:string;
    ratings:number;
    haveBorder?: boolean
}


const QuarterBox:FC<Iprops> = ({header, id, ratings, haveBorder = true}) => {
 
    return (
        <div className={`my-20 gap-x-8 gap-y-6 hover:scale-y-110 duration-300 rounded-md flex flex-col flex-1 justify-center relative px-8 py-12  ${haveBorder &&  " border-4 border-indigo-200 border-y-indigo-500"}`} >
            <h4 className="font-bold text-lg text-black">{header}</h4>
            <p className="mt-2 text-slate-600">{id}</p>
            <span className="absolute text-gray-200 -top-8 right-10 text-[170px] font-bold -z-10">
                {ratings}</span>
        </div>  
    )
}

export default QuarterBox

