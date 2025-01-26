"use client"
import { DashboardWrapper } from '@/components/Layout/Wrapper'
import { CodePreview } from '@/components/PreviewComponent/PreviewComponent'
import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import React from 'react'
import { Button } from 'react-ui'


const buttonCode = `
import { Button } from "./Button";

<Button 
  variant="solid" 
  size="md" 
  colorscheme="primary"
>
  Button
</Button>
`;

function page() {
  return (
   <DashboardWrapper>
    <CommonSectionWrapper>
       <div>
       <h2>
        Button
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, consectetur.</p>
       </div>
    </CommonSectionWrapper>
    <div className='border border-solid border-gray-500'>
    <Button variant="solid" size="md" >
          Button
        </Button>
        <CodePreview code={buttonCode} />
    </div>
   </DashboardWrapper>
  )
}

export default page