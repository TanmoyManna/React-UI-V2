"use client"
import { DashboardWrapper } from '@/components/Layout/Wrapper'
import PreviewEditor from '@/components/PreviewComponent/PreviewComponent'

import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import { useRouter } from 'next/navigation'

import React from 'react'
import { Button, Chip, Icon } from 'react-ui'


const solidButton = `
<Button 
  variant="solid" 
  size="md" 
  colorscheme="primary"
  className='w-auto'
>
  Button
</Button>
`;
const outlineButton = `
<Button 
  variant="outline" 
  size="md" 
  colorscheme="primary"
  className='w-auto'
>
  Button
</Button>
`;
const ghostButton = `
<Button 
  variant="ghost" 
  size="md" 
  colorscheme="primary"
  className='w-auto'
>
  Button
</Button>
`;
const startIconButton = `
<Button 
  variant="outline" 
  size="md" 
  colorscheme="primary"
  className='w-auto'
  iconPosition='start'
  icon={<Icon name='search' size={20} color="blue-600" key="icon"/>}
>
  Search
</Button>
`;
const endIconButton = `
<Button 
  variant="outline" 
  size="md" 
  colorscheme="primary"
  className='w-auto'
  iconPosition='end'
  icon={<Icon name='search' size={20} color="blue-600" key="icon"/>}
>
  Search
</Button>
`;
const iconButton = `
<Button 
  variant="outline" 
  size="md" 
  colorscheme="primary"
  className='w-auto'
>
  <Icon name='search' size={20} color="blue-600" key="icon"/>
</Button>
`;
function page() {
  const router = useRouter()
  return (
    <DashboardWrapper>
      {/* Solid Button */}
      <CommonSectionWrapper className='mb-3'>
        <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
          Button
        </h2>
        <p className='font-bold text-base leading-snug'>Solid Button</p>
      </CommonSectionWrapper>
      <div className='border border-solid border-gray-500 mb-3'>
        <PreviewEditor code={solidButton} scope={{ Button }} />
      </div>
      {/* Outline Button */}
      <CommonSectionWrapper className='mb-3'>
        <p className='font-bold text-base leading-snug'>Outline Button</p>
      </CommonSectionWrapper>
      <div className='border border-solid border-gray-500 mb-3'>
        <PreviewEditor code={outlineButton} scope={{ Button }} />
      </div>
      {/* Ghost Button */}
      <CommonSectionWrapper className='mb-3'>
        <p className='font-bold text-base leading-snug'>Ghost Button</p>
      </CommonSectionWrapper>
      <div className='border border-solid border-gray-500 mb-3'>
        <PreviewEditor code={ghostButton} scope={{ Button }} />
      </div>
      {/* Start Icon Button */}
      <CommonSectionWrapper className='mb-3'>
        <p className='font-bold text-base leading-snug'>Start Icon Button</p>
      </CommonSectionWrapper>
      <div className='border border-solid border-gray-500 mb-3'>
        <PreviewEditor code={startIconButton} scope={{ Button,Icon }} />
      </div>
      {/* End Icon Button */}
      <CommonSectionWrapper className='mb-3'>
        <p className='font-bold text-base leading-snug'>End Icon Button</p>
      </CommonSectionWrapper>
      <div className='border border-solid border-gray-500 mb-3'>
        <PreviewEditor code={endIconButton} scope={{ Button,Icon }} />
      </div>
      {/* Icon Button */}
      <CommonSectionWrapper className='mb-3'>
        <p className='font-bold text-base leading-snug'>Icon Button</p>
      </CommonSectionWrapper>
      <div className='border border-solid border-gray-500 mb-3'>
        <PreviewEditor code={iconButton} scope={{ Button,Icon }} />
      </div>

      <div className='flex justify-end items-center space-x-3 py-10'>
        <Chip
          onClick={() => (router.push('/api-doc/button'))}
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