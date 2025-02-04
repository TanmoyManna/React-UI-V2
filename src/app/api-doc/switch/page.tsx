"use client"

import { DashboardWrapper } from '@/components/Layout/Wrapper'
import Table from '@/components/TableComponent/TableComponent'
import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import React from 'react'

function page() {

    const headers = ["Name", "Type", "Default", "Description"];
    const data = [
        { Name: "variant", Type: "default | secondary", Default: "default", Description: "The variant of the Switch component." },
        { Name: "colorscheme", Type: "primary | secondary", Default: "primary", Description: "The colorscheme of the Switch component." },
        { Name: "label", Type: "string", Default: "-", Description: "The label of the Switch component."  },
        { Name: "labelTextClass", Type: "Tailwind Classes", Default: "-", Description: "Override or extend the styles applied to the component label." },
        { Name: "labelPosition", Type: "end | start", Default: "end", Description: "Label Element positioned on the start or the end." },
        { Name: "activelabel", Type: "string", Default: "-", Description: "The Inner label of the Switch component is active."  },
        { Name: "inactivelable", Type: "string", Default: "-", Description: "The Inner label of the Switch component is inactive."  },
        { Name: "innerlabelStyle", Type: "Tailwind Classes", Default: "-", Description: "Override or extend the styles applied to the inner labels." }
    ];

    return (

        <DashboardWrapper>
            <CommonSectionWrapper className='mb-10'>

                <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
                    Switch API
                </h2>
                <p className='font-normal text-base leading-snug'>API reference docs for the Switch component</p>

            </CommonSectionWrapper>

            <div>
                <Table headers={headers} data={data} />
            </div>
        </DashboardWrapper>

    )
}

export default page