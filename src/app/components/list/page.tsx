"use client"
import { DashboardWrapper } from '@/components/Layout/Wrapper'
import PreviewEditor from '@/components/PreviewComponent/PreviewComponent'

import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import { useRouter } from 'next/navigation'

import React from 'react'
import { ListItem, List, Chip } from 'react-ui'


const UnorderedList = `
<List
variant="unordered"
size="md"
spacing="normal">
<>
    <ListItem disabledPadding={true}  className='text-white'>done</ListItem>
    <ListItem disabledPadding={true}  className='text-white'>not Done</ListItem>
    <ListItem disabledPadding={true}  className='text-white'>Should be</ListItem>
</>
</List>
`;

const OrderedList = `
<List
variant="ordered"
size="lg"
spacing="noSpace">
<>
    <ListItem disabledPadding={true}  className='text-white'>done</ListItem>
    <ListItem disabledPadding={true}  className='text-white'>not Done</ListItem>
    <ListItem disabledPadding={true}  className='text-white'>Should be</ListItem>
</>
</List>
`;
function page() {
    const router = useRouter()
    return (
        <DashboardWrapper>
            {/* Unordered List */}
            <CommonSectionWrapper className='mb-3'>
                <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
                    List
                </h2>
                <p className='font-bold text-base leading-snug'>Unordered List</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={UnorderedList} scope={{ List, ListItem }} />
            </div>
            {/* Ordered List */}
            <CommonSectionWrapper className='mb-3'>
                <p className='font-bold text-base leading-snug'>Ordered List</p>
            </CommonSectionWrapper>
            <div className='border border-solid border-gray-500 mb-3'>
                <PreviewEditor code={OrderedList} scope={{ List, ListItem }} />
            </div>
            <div className='flex justify-end items-center space-x-3 py-10'>
                <Chip
                    onClick={() => (router.push('/api-doc/list'))}
                    iconPosition="start"
                    variant="outline"
                    colorscheme="blue"
                >
                    List Api doc
                </Chip>
            </div>
        </DashboardWrapper>
    )
}

export default page