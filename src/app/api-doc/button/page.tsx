"use client"

import { DashboardWrapper } from '@/components/Layout/Wrapper'
import Table from '@/components/TableComponent/TableComponent'
import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import React from 'react'

function page() {

    const headers = ["Name", "Description", "Default", "Control"];
    const data = [
      { Name: "variant", Description: "string", Default: "-", Control: "solid" },
      { Name: "size", Description: "string", Default: "-", Control: "md" },
      { Name: "children", Description: "string", Default: "-", Control: "Button" },
      { Name: "icon", Description: "React.ReactNode", Default: "-", Control: "Set object" },
      { Name: "iconPosition", Description: "union", Default: "-", Control: "start | end" },
    ];

  return (

      <DashboardWrapper>
        <CommonSectionWrapper className='mb-10'>
         
           <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
           Button API
            </h2>
            <p className='font-normal text-base leading-snug'>API reference docs for the Button component</p>
           
        </CommonSectionWrapper>

        <div>
        <Table headers={headers} data={data} />
        </div>
     </DashboardWrapper>
 
  )
}

export default page