"use client"

import { DashboardWrapper } from '@/components/Layout/Wrapper'
import Table from '@/components/TableComponent/TableComponent'
import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import React from 'react'

function page() {

    const headers = ["Name", "Type", "Default", "Description"];
    const data = [
      { Name: "children", Type: "node", Default: "-", Description: "The content of the component." },
      { Name: "variant", Type: "solid | outline | ghost", Default: "solid", Description:"The variant to use."  },
      { Name: "size", Type: "sm | md | lg", Default: "md", Description:"The size of the component."  },
      { Name: "icon", Type: "React.ReactNode", Default: "-", Description: "Icon Element placed with the children." },
      { Name: "iconPosition", Type: "start | end", Default: "-", Description:"The Icon positioned on the start or the end of the button."  },
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