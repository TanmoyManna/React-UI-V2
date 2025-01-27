"use client"
import { DashboardWrapper } from '@/components/Layout/Wrapper'
import PreviewEditor from '@/components/PreviewComponent/PreviewComponent'

import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import React from 'react'
import { Button } from 'react-ui'


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
   </DashboardWrapper>
  )
}

export default page