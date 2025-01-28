"use client"

import { DashboardWrapper } from '@/components/Layout/Wrapper'
import Table from '@/components/TableComponent/TableComponent'
import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import React from 'react'

function page() {

    const headers = ["Name", "Type", "Default", "Description"];
    const data = [
      { Name: "label", Type: "string", Default: "-", Description: "The label of the Radio." },
      { Name: "containerClassName", Type: "Tailwind Classes", Default: "-", Description:"Override or extend the styles applied to the component container."  },
      { Name: "labelClass", Type: "Tailwind Classes", Default: "-", Description:"Override or extend the styles applied to the component label."  },
      { Name: "labelPosition", Type: "end | start", Default: "end", Description: "Label Element positioned on the start or the end." },
      { Name: "checkedIcon", Type: "React.ReactNode", Default: "-", Description:"The icon to display when the component is active."  },
      { Name: "unCheckedIcon", Type: "React.ReactNode", Default: "-", Description:"The icon to display when the component is inactive."  },
      { Name: "iconStyleClass", Type: "Tailwind Classes", Default: "-", Description:"Override or extend the styles applied to the component icon."  },

    ];

  return (

      <DashboardWrapper>
        <CommonSectionWrapper className='mb-10'>
         
           <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
           Radio API
            </h2>
            <p className='font-normal text-base leading-snug'>API reference docs for the Radio component</p>
           
        </CommonSectionWrapper>

        <div>
        <Table headers={headers} data={data} />
        </div>
     </DashboardWrapper>
 
  )
}

export default page