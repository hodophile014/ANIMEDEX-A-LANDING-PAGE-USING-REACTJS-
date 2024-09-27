import {char} from "../constants/CharactersInfo"
export default function Characters(){
    return <div>
        <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">Some Popular Anime Character</h2>
        
        </div>
        <div className="flex flex-wrap">
            {char.map((item,index)=>(
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <div className="p-10 border border-neutral-700 rounded-xl">
                        <p className="text-1xl mb-8">
                            {item.from}
                            <br></br>
                           <span className="bg-gradient-to-r from-cyan-500 to-orange-800 text-transparent bg-clip-text mb-4 ml-2 text-4xl"> {item.name} </span>
                            
                        </p>
                        <p className="mb-8">
                            <img className="inline rounded-md shadow-2xl" src={item.url}/>
                        </p>
                        <ul>
                            <li>GENDER: {item.gender}</li>
                            <li>HAIRCOLOR: {item.hairColor}</li>
                        </ul>
                        
                       
                    </div>
                </div>
            ))}

        </div>




        <div className="hidden lg:flex justify-center space-x-12 items-center">
        <a href="#" className="bg-gradient-to-r from-cyan-500 to-orange-800 py-2 px-3 rounded-md"> EXPLORE MORE</a>
        </div>
        </div>
        }