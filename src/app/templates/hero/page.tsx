"use client"
import { DashboardWrapper } from '@/components/Layout/Wrapper'
import PreviewEditor from '@/components/PreviewComponent/PreviewComponent'

import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import { useRouter } from 'next/navigation'

import React from 'react'


import Container from '@/components/Container/Container'
import RightArrowIcon from '../../../../public/assets/icon/RightArrowIocn';
import PlayIcon from '../../../../public/assets/icon/PlayIcon';
import Image from 'next/image';
import bannerImage from '../../../../public/assets/images/bannerimage.png';

const HeroSection1 = `
<div className=' w-full bg-white '>
    <Container className=' max-w-[1312px] px-4 w-full mx-auto my-0'>
      <div className='w-full py-24 '>
        <div className=' flex items-center justify-center gap-3 rounded-2xl bg-violet-50 px-4 py-1.5 w-auto max-w-max mx-auto'>
          <div className='py-0.5 px-2.5 rounded-2xl font-medium border border-solid text-lg border-slate-400 text-purple-950 '>New feature</div>
          <button className=' flex items-center gap-1 font-medium text-purple-950 text-lg hover:opacity-50'>Check out the team dashboard <RightArrowIcon/></button>
        </div>

        <div className='pt-4 pb-16'>
          <h1 className='font-inter text-5xl font-semibold leading-normal tracking-[-0.02em] text-center text-slate-950'>Beautiful analytics to grow smarter</h1>
          <p className='font-inter text-base font-normal leading-7 text-slate-400 text-center max-w-3xl mx-auto pt-6 pb-12'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
          <div className='flex items-center justify-center gap-3'>
            <button className='border-slate-400 border border-solid hover:opacity-50 rounded-md gap-2 text-slate-950 py-4 px-7 flex items-center justify-center'><PlayIcon/> Demo</button>
            <button className='border-purple-700 bg-purple-700 border border-solid rounded-md gap-2 text-white py-4 px-7 flex items-center justify-center hover:text-slate-950 hover:bg-transparent'> Sign up</button>
          </div>
        </div>
        <figure className=' leading-[0] max-w-[984px] mx-auto'>
          <Image width={984} height={614} alt='banner-img' src={bannerImage}/>
        </figure>
      </div>
    </Container>
   </div>
`;

function page() {
    const router = useRouter()
    return (
        <DashboardWrapper>
            {/* Basic Text */}
            <CommonSectionWrapper className='mb-3'>
                <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
                    Hero Section
                </h2>
                <p className='font-bold text-base leading-snug'>Hero Example 1</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={HeroSection1} scope={{ Container,RightArrowIcon,PlayIcon,Image,bannerImage }} />
            </div>
        </DashboardWrapper>
    )
}

export default page