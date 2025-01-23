import Container from '@/components/Container/Container'
import React from 'react'
import assets from '../../json/assets'
import bannerimage from '../../public/assets/images/landingbannerImage.png'
import gradientColorBG from '../../public/assets/images/bannerligt.jpg'
import Header from '@/components/Layout/Header'
import Image from 'next/image'

function page() {
  return (
   <div className=' relative'>
     <Container className=' max-w-[1440px] px-4 w-full '>   <Header/></Container>
 
    <Image width={10000} height={1000} alt='banner-img' src={gradientColorBG} className='w-full h-screen z-10 object-cover absolute top-0 left-0 '/>

   {/* hearo section */}
   <div className='w-full bg-white pt-28' >
   
 
      
     
      <Container className=' max-w-[1440px] px-4 w-full '>
      <div className='  relative'>
      <figure className=' leading-[0] absolute top-0 left-0 w-full h-full z-20'>
      <Image width={10000} height={1000} alt='banner-img' src={bannerimage} className='w-full h-full object-cover'/>
    </figure>
        <div className='mx-[50%] w-full mr-auto ml-0 relative z-30  pt-20 pb-72'>
      <p className=' text-base/7 font-semibold text-sky-500'>By the makers of Tailwind CSS</p>
      <h1 className=' mt-4 max-w-[36rem] text-[72px] leading-tight font-black tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]'>
      Build your next idea even faster.
      </h1>
      <p className='col-start-1 row-start-3 mt-4 max-w-lg text-lg text-slate-700'>Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.</p>
      <div className='col-start-1 row-start-4 mt-10 flex  space-x-4 flex-row sm:space-y-0 sm:space-x-4'>
        <button className='inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700'>Browse components</button>
        <button className='inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 '>Browse components</button>

      </div>
        </div>
      </div>

      </Container>
   
   </div>
   </div>
  )
}

export default page