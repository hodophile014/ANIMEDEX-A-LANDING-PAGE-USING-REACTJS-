import { navigation } from '../constants';
import { Connect } from '../constants';
import { Animdex } from '../constants';

export  default function Footer(){
return(
    <div>
        <footer className="mt-40 border-t py-10 border-neutral-700">
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                <div>
                    <h3 className='text-md font-semibold mb-4'>Navigation</h3>
                    <ul className='space-y-2'>
                        {navigation.map((link,index)=>(
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className='text-md font-semibold mb-4'>Connect With Us</h3>
                    <ul className='space-y-2'>
                        {Connect.map((link,index)=>(
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-md font-semibold mb-4'>AnimeDex</h3>
                    <ul className='space-y-2'>
                        {Animdex.map((link,index)=>(
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>




            </div>

        </footer>

    </div>
)
}