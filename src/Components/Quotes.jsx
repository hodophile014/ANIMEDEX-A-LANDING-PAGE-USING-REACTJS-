import { Quote } from "../constants"
import { MessageSquareQuote } from 'lucide-react';
export default function Quotes(){
    return(
        <div>
            <div className="realtive mt-20 borbder-b border-neutral-800 min-h-[800px]">
                <div className="text-center">
                    <span className="bg-neutral-900 text-cyan-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                        Quotes
                    </span>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">Some Most <span className="bg-gradient-to-r from-cyan-500 to-orange-800 text-transparent bg-clip-text">popular Quotes</span></h2>
                </div>
                <div className="flex flex-wrap mt-10 lg:mt-20">
                    {
                            Quote.map((item,index)=>(
                                <div key={index} className="w-full sm:1/2 lg:w-1/3">
                                    <div className="flex">
                                    <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-cyan-700 justify-center items-center rounded-full">
                                    <MessageSquareQuote />

                                    </div>
                                    <div>
                                        <h5 className="mt-1 mb-6 text-xl">{item.by}</h5>
                                        <p className="text-md p-2 mb-20 text-neutral-500">{item.quote}</p>

                                        </div>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    )

}