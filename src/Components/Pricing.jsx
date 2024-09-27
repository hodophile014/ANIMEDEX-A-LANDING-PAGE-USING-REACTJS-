import { plans } from "../constants";
export default function Pricing(){
    return(
        <div>
        <div className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">Pick Your Plan</h2>
        </div>
        <div className="flex flex-wrap">
            {plans.map((item,index)=>(
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <div className="p-10 border border-neutral-700 rounded-xl">
                        <p className="text-4xl mb-8">
                            {item.title}
                            {item.title === "MEGA FAN" && (
                                <span className="bg-gradient-to-r from-cyan-500 to-orange-800 text-transparent bg-clip-text mb-4 ml-2"> (MOST POPULAR) </span>
                            )}
                        </p>
                        <p className="mb-8">
                            <span className="text-5xl mt-6 mr-2">{item.price}</span>
                        </p>
                        <ul>
                            {item.features.map((fe,index)=>(
                                <li key={index} className="mt-8 flex items-center">
                                <span className="ml-2 text-left">{fe}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="inline-flex justify-center items-center text-center py-2 px-3 border w-full h-12 rounded-md mt-20 tracking-tight hover:bg-orange-900">START 7-DAY FREE TRIAL </a>
                       <a href="#" className ="inline-flex justify-center items-center text-center mt-10 bg-gradient-to-r from-cyan-500 to-orange-800 py-2 px-3 rounded-md">SUBSCRIBE</a>
                    </div>
                </div>
            ))}

        </div>
        </div>
    )
}