import React, { FC } from 'react'
import DjamoAppInPhone from '../assets/images/djamo_app_in_phone.svg'
import DjamoCardSmall from '../assets/images/djamo_card_small.webp'
import Image from 'next/image'
import { BoltIcon, CreditCardIcon, PhoneIcon } from '@heroicons/react/16/solid'


const Header:FC = () => {

    const contents = [
        {
            icon:<BoltIcon color='white' height={24}/>,
            title:"Ouvrez un compte en 1min",
            text:"Créez votre compte et recevez immédiatement une carte virtuelle VISA gratuite."
        },
        {
            icon:<CreditCardIcon color='white' height={24}/>,
            title:"Commandez votre carte physique",
            text:"Recevez votre carte en 48h, retirez de l'argent et payez sans frais partout dans le monde."
        },
        {
            icon:<PhoneIcon color='white' height={24}/>,
            title:"Accédez aux services via l'appli",
            text:"Epargnez, transférez, recevez votre salaire, gérez vos dépenses via l'application mobile."
        }
    ]

  return (
    <header className="w-full">
        <div className="w-full bg-white pt-4 pb-12">
            <div className="container flex mx-auto gap-4">
                <div className="w-full lg:w-1/2 flex lg:mx-8">
                    <div className="mx-auto lg:mr-0 lg:my-auto text-center lg:text-start mt-10">
                        <h1 className="text-6xl lg:text-8xl font-semibold  bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 from-20% to-green-500 to-70%">No Stress,<br />Djamo Rek!</h1>
                        <p className='text-xl my-6'> L&apos; appli pour mieux gérer votre argent. <br />
                                Ouvrez un compte gratuit maintenant en un clic.
                        </p>
                        <form action="#" className="flex flex-col lg:flex-row gap-2">
                            <div className="hidden lg:flex gap-2">
                                <select className="select select-bordered w-max text-lg lg:text-xl">
                                    <option defaultValue={"+221"}>+221</option>
                                </select>
                                <input type="text" placeholder="Votre numero de telephone" className="input input-bordered text-xl" />
                            </div>
                            <button className="btn btn-primary rounded-full text-lg mx-auto lg:m-[initial]">Rejoindre la liste d&apos;attente</button>
                        </form>
                    </div>
                </div>
                <div className="hidden w-1/2 justify-start lg:flex">
                    <Image alt='djamo app in phone' src={DjamoAppInPhone}/>
                    <Image alt='djamo card small' className='h-1/2 mt-auto w-1/4' src={DjamoCardSmall}/>
                </div>
            </div>
        </div>
        <div className="w-full bg-black pt-8 pb-12">
            <div className="container mx-auto">
                <div className="lg:mx-16 px-8 lg:px-14 flex gap-8 flex-col lg:flex-row">
                    {contents.map(({icon, title, text},index) => (
                        <div key={index} className='flex gap-4'>
                            <div>{icon}</div>
                            <div>
                                <h2 className='text-white text-xl'>{title}</h2>
                                <p className='text-gray-500 text-xl'>{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header