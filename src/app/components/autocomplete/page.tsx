"use client"
import { DashboardWrapper } from '@/components/Layout/Wrapper'
import PreviewEditor from '@/components/PreviewComponent/PreviewComponent'

import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import { useRouter } from 'next/navigation'

import React from 'react'
import { Autocomplete, Chip, Icon } from 'react-ui'


const autocomplete = `
<div className="w-50">
<Autocomplete
label='Framework'
options={[
    { label: "JavaScript", value: "1" },
    { label: "TypeScript", value: "2" },
    { label: "React", value: "3" },
    { label: "Angular", value: "4" },
    { label: "Vue", value: "5" },
]} 
placeholder='Search framework...'
containerClassName='bg-red-100'
multiple={false}
dropDownIcon={<Icon name="upArrow" size={20} color="blue" key="icon" />}
valueChange={(value) => console.log("value change:", value)}
dropdownState={(state) => console.log("value change:", state)}
/>
</div>
`;

const multAutocomplete = `
<div className="w-50">
<Autocomplete
label='Framework'
options={[
    { label: "JavaScript", value: "1" },
    { label: "TypeScript", value: "2" },
    { label: "React", value: "3" },
    { label: "Angular", value: "4" },
    { label: "Vue", value: "5" },
]} 
placeholder='Search framework...'
containerClassName='bg-red-100'
multiple={true}
dropDownIcon={<Icon name="upArrow" size={20} color="blue" key="icon" />}
valueChange={(value) => console.log("value change:", value)}
dropdownState={(state) => console.log("value change:", state)}
/>
</div>
`;
function page() {
    const router = useRouter()
    return (
        <DashboardWrapper>
            {/* Solid Button */}
            <CommonSectionWrapper className='mb-3'>
                <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
                    Autocomplete
                </h2>
                <p className='font-bold text-base leading-snug'>Autocomplete</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={autocomplete} scope={{ Autocomplete, Icon }} />
            </div>
            {/* Ghost Button */}
            <CommonSectionWrapper className='mb-3'>
                <p className='font-bold text-base leading-snug'>Multi Select Autocomplete</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={multAutocomplete} scope={{ Autocomplete, Icon }} />
            </div>
            <div className='flex justify-end items-center space-x-3 py-10'>
                <Chip
                    onClick={() => (router.push('/api-doc/button'))}
                    iconPosition="start"
                    variant="outline"
                    colorscheme="blue"
                >
                    Autocomplete Api doc
                </Chip>
            </div>
        </DashboardWrapper>
    )
}

export default page