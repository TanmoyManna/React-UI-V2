"use client"

import { DashboardWrapper } from '@/components/Layout/Wrapper'
import Table from '@/components/TableComponent/TableComponent'
import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import React from 'react'

function page() {

    const headers = ["Name", "Type", "Default", "Description"];
    const data = [
        { Name: "emphasis", Type: "low", Default: "-", Description: "The emphasis of the text component" },
        { Name: "size", Type: "sm | base | lg | xl | 2xl | 3xl", Default: "base", Description: "The size of the text component." },
        { Name: "weight", Type: "thin | normal | medium | semibold | bold | black", Default: "normal", Description: "The weight of the text component." },
        { Name: "align", Type: "left | center | right", Default: "left", Description: "The alignment of the text component." },
        { Name: "italic", Type: "boolean", Default: "false", Description: "True to make the style of the text component italic." },
        { Name: "underline", Type: "boolean", Default: "false", Description: "True to make the text component underline." },
    ];

    return (

        <DashboardWrapper>
            <CommonSectionWrapper className='mb-10'>

                <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
                    Text API
                </h2>
                <p className='font-normal text-base leading-snug'>API reference docs for the Text component</p>

            </CommonSectionWrapper>

            <div>
                <Table headers={headers} data={data} />
            </div>
        </DashboardWrapper>

    )
}

export default page