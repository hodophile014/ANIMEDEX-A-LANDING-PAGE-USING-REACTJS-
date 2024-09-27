import { CircleCheck } from 'lucide-react';
import  image1  from "../assets/image1.jpg"
import image2  from "../assets/image2.jpg"
import image4  from "../assets/image4.jpg"
import {offers} from "../constants"
export default function MemberShip(){
    return(
        <div>
         <div className="mt-20">
            <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6'>Upgrade Your Anime <span className='bg-gradient-to-r from-cyan-500 to-orange-800 text-transparent bg-clip-text'>Experience with Premium</span></h2>
            <div className='flex flex-wrap justify-center'>
                <div className="p-2 w-full lg:w-1/2">
                <img src={image4} alt="" className='h-96 rounded-md w-70'/>
                </div>
                <div className="pt-12 w-full lg:w-1/2">
                {offers.map((item,index)=>(
                    <div key={index} className="flex mb-12">
                        <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>
                        <CircleCheck />
                        </div>
                        <div>
                          <h5 className='mt-1 mb-2 text-xl text-left'>{item.offer}</h5>  
                          <p className='text-md text-neutral-500 text-left'>{item.details}</p>
                        </div>
                    </div>
                ))}
                </div>

            </div>
         </div>
        </div>
    )
}