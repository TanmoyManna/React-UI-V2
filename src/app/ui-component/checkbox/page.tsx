"use client"
import { DashboardWrapper } from '@/components/Layout/Wrapper'
import PreviewEditor from '@/components/PreviewComponent/PreviewComponent'

import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import { useRouter } from 'next/navigation'

import React from 'react'
import { CheckBox, Chip, Icon } from 'react-ui'


const checkbox = `
<CheckBox
>
</CheckBox>
`;
const checkboxEndLable = `
<CheckBox
label='lableText'
>
</CheckBox>
`;
const checkboxStartLable = `
<CheckBox
label='lableText'
labelPosition='start'
>
</CheckBox>
`;
const checkboxWithCustomIcon = `
<CheckBox
label='lableText'
labelPosition='start'
checkedIcon={<Icon name="home" size={25} color="blue-600" key="icon" />}
unCheckedIcon={<Icon name="search" size={25} color="blue-600" key="icon" />}
>
</CheckBox>
`;
function page() {
  const router = useRouter()
  return (
    <DashboardWrapper>
      {/* CheckBox */}
      <CommonSectionWrapper className='mb-3'>
        <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
        CheckBox
        </h2>
        <p className='font-bold text-base leading-snug'>CheckBox</p>
      </CommonSectionWrapper>
      <div className='border border-solid border-gray-500 mb-3'>
        <PreviewEditor code={checkbox} scope={{ CheckBox }} />
      </div>
      {/* CheckBox With End Lable */}
      <CommonSectionWrapper className='mb-3'>
        <p className='font-bold text-base leading-snug'>CheckBox With End Lable</p>
      </CommonSectionWrapper>
      <div className='border border-solid border-gray-500 mb-3'>
        <PreviewEditor code={checkboxEndLable} scope={{ CheckBox }} />
      </div>
      {/* CheckBox With Start Lable */}
      <CommonSectionWrapper className='mb-3'>
        <p className='font-bold text-base leading-snug'>CheckBox With Start Lable</p>
      </CommonSectionWrapper>
      <div className='border border-solid border-gray-500 mb-3'>
        <PreviewEditor code={checkboxStartLable} scope={{ CheckBox }} />
      </div>
      {/* Checkbox With Custom Icon */}
      <CommonSectionWrapper className='mb-3'>
        <p className='font-bold text-base leading-snug'>Checkbox With Custom Icon</p>
      </CommonSectionWrapper>
      <div className='border border-solid border-gray-500 mb-3'>
        <PreviewEditor code={checkboxWithCustomIcon} scope={{ CheckBox,Icon }} />
      </div>

      <div className='flex justify-end items-center space-x-3 py-10'>
        <Chip
          onClick={() => (router.push('/api-doc/checkbox'))}
          iconPosition="start"
          variant="outline"
          colorscheme="blue"
        >
          Checkbox Api doc
        </Chip>
      </div>
    </DashboardWrapper>
  )
}

export default page