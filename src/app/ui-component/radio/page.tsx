"use client"
import { DashboardWrapper } from '@/components/Layout/Wrapper'
import PreviewEditor from '@/components/PreviewComponent/PreviewComponent'

import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import { useRouter } from 'next/navigation'

import React from 'react'
import { Radio, Chip, Icon } from 'react-ui'


const radio = `
<Radio
>
</Radio>
`;
const radioEndLable = `
<Radio
label='lableText'
labelClass='text-white'
>
</Radio>
`;
const radioStartLable = `
<Radio
label='lableText'
labelPosition='start'
labelClass='text-white'
>
</Radio>
`;
const radioWithCustomIcon = `
<Radio
label='lableText'
labelPosition='start'
labelClass='text-white'
checkedIcon={<Icon name="home" size={25} color="blue-600" key="icon" />}
unCheckedIcon={<Icon name="search" size={25} color="blue-600" key="icon" />}
>
</Radio>
`;
function page() {
  const router = useRouter()
  return (
    <DashboardWrapper>
      {/* Radio */}
      <CommonSectionWrapper className='mb-3'>
        <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
        Radio
        </h2>
        <p className='font-bold text-base leading-snug'>Radio</p>
      </CommonSectionWrapper>
      <div className='border border-solid border-gray-500 mb-3'>
        <PreviewEditor code={radio} scope={{ Radio }} />
      </div>
      {/* Radio With End Lable */}
      <CommonSectionWrapper className='mb-3'>
        <p className='font-bold text-base leading-snug'>Radio With End Lable</p>
      </CommonSectionWrapper>
      <div className='border border-solid border-gray-500 mb-3'>
        <PreviewEditor code={radioEndLable} scope={{ Radio }} />
      </div>
      {/* Radio With Start Lable */}
      <CommonSectionWrapper className='mb-3'>
        <p className='font-bold text-base leading-snug'>Radio With Start Lable</p>
      </CommonSectionWrapper>
      <div className='border border-solid border-gray-500 mb-3'>
        <PreviewEditor code={radioEndLable} scope={{ Radio }} />
      </div>
      {/* Radio With Custom Icon */}
      <CommonSectionWrapper className='mb-3'>
        <p className='font-bold text-base leading-snug'>Radio With Custom Icon</p>
      </CommonSectionWrapper>
      <div className='border border-solid border-gray-500 mb-3'>
        <PreviewEditor code={radioWithCustomIcon} scope={{ Radio,Icon }} />
      </div>

      <div className='flex justify-end items-center space-x-3 py-10'>
        <Chip
          onClick={() => (router.push('/api-doc/radio'))}
          iconPosition="start"
          variant="outline"
          colorscheme="blue"
        >
          Radio Api doc
        </Chip>
      </div>
    </DashboardWrapper>
  )
}

export default page