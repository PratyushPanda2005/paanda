import React from 'react'
import Panda from '../../../../public/images/svgs/Panda.svg'
import Image from 'next/image'
const Hero = () => {
  return (
    <section className='h-[100vh] flex justify-center items-center py-10 bg-black'>
        <div className='max-w-[95%] w-full h-full flex flex-col justify-between'>
            <h1 className='font-lausanne font-[850] text-9xl text-[#6F6F6F] leading-[90%] flex flex-1/3 tracking-[-5.44px]'>design with a human, not any machine.</h1>
            <div className='flex flex-col flex-2/3 justify-between mt-10'>
                <h1 className='text-white text-xl font-lausannelight max-w-md'>Normal&apos;s boring. We all know it. I design for real people, the creative way, to make things actually work.</h1>
                <button className='text-black bg-white font-lausanne w-fit p-4'>CHAT WITH ME</button>
                <p className='text-[#A8A8A8] font-lausannelight max-w-md'>A generalist designer from India, currently pursuing my Master&apos;s in Information Design at NID, Bangalore. My background includes impactful work at Verloop.io, TartanHQ, Questera, and Whatbytes. alongside collaboration on projects for Ferrari, IRLY, Dallas Global Ventures, Only1 and more.</p>
            </div>  
        </div>
        <Image src={Panda} alt='panda image' className='absolute bottom-0 right-0'/>
    </section>
  )
}

export default Hero