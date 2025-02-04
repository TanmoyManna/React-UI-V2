"use client"

import { DashboardWrapper } from '@/components/Layout/Wrapper'
import Table from '@/components/TableComponent/TableComponent'
import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import React from 'react'

function page() {

    const headers = ["Name", "Type", "Default", "Description"];
    const data = [
        { Name: "position", Type: "top | left | bottom | right | topLeft | topRight | bottomLeft | bottomRight", Default: "topRight", Description: "The position of the badge." },
        { Name: "color", Type: "primary | secondary | error | success", Default: "primary", Description: "The color of the badge." },
        { Name: "size", Type: "sm | md | lg | xl", Default: "md", Description: "The size of the badge." }
    ];

    return (

        <DashboardWrapper>
            <CommonSectionWrapper className='mb-10'>

                <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
                    Badge API
                </h2>
                <p className='font-normal text-base leading-snug'>API reference docs for the Badge component</p>

            </CommonSectionWrapper>

            <div>
                <Table headers={headers} data={data} />
            </div>
        </DashboardWrapper>

    )
}

export default page