"use client"

import { DashboardWrapper } from '@/components/Layout/Wrapper'
import Table from '@/components/TableComponent/TableComponent'
import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import React from 'react'

function page() {

    const headers = ["Name", "Type", "Default", "Description"];
    const data = [
        { Name: "variant", Type: "unordered | ordered", Default: "unordered", Description: "The variant of the list component" },
        { Name: "size", Type: "sm | md | lg", Default: "md", Description: "The size of the list component." },
        { Name: "spacing", Type: "compact | normal | spacious | noSpace", Default: "normal", Description: "The spacing between the list items." },
    ];

    return (

        <DashboardWrapper>
            <CommonSectionWrapper className='mb-10'>

                <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
                    List API
                </h2>
                <p className='font-normal text-base leading-snug'>API reference docs for the List component</p>

            </CommonSectionWrapper>

            <div>
                <Table headers={headers} data={data} />
            </div>
        </DashboardWrapper>

    )
}

export default page