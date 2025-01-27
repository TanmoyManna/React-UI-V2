/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { DashboardWrapper } from '@/components/Layout/Wrapper'
import PreviewEditor from '@/components/PreviewComponent/PreviewComponent'

import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import { useRouter } from 'next/navigation'

import React from 'react'
import { Button, Chip } from 'react-ui'


const buttonCode = `
<Button 
  variant="solid" 
  size="md" 
  colorscheme="primary"
  className='w-auto'
>
  Button
</Button>
`;

function page() {
  const router = useRouter()
  return (
   <DashboardWrapper>
    <CommonSectionWrapper className='mb-3'>
     
       <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
        Button
        </h2>
        <p className='font-normal text-base leading-snug'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, consectetur.</p>
       
    </CommonSectionWrapper>
    <div className='border border-solid border-gray-500'>
   
       <PreviewEditor code={buttonCode} scope={{Button}}/>
    </div>
    <div className='flex justify-end items-center space-x-3 py-10'>
    <Chip
    onClick={()=>(router.push('/api-doc/button'))}
  iconPosition="start"
  variant="outline"
    colorscheme="blue"
>
Button Api doc 
</Chip>
    </div>
   </DashboardWrapper>
   
  )
}

export default page