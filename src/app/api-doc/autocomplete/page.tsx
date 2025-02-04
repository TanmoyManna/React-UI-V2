"use client"
import { DashboardWrapper } from '@/components/Layout/Wrapper'
import Table from '@/components/TableComponent/TableComponent'
import { CommonSectionWrapper } from '@/styles/StyleComponents/CommonStyle'
import React from 'react'

function page() {

    const headers = ["Name", "Type", "Default", "Description"];
    const data = [
      { Name: "label", Type: "string", Default: "-", Description: "The label of the Autocomplete." },
      { Name: "options", Type: "Array", Default: "-", Description: "A list of options that will be shown in the Autocomplete." },
      { Name: "placeholder", Type: "string", Default: "solid", Description:"The placeholder of the Autocomplete."  },
      { Name: "valueChange", Type: "function", Default: "-", Description:"The function that will be called when the value of the Autocomplete changes."  },
      { Name: "dropdownState", Type: "function", Default: "-", Description:"The function that will be called when the dropdown state of the Autocomplete changes."  },
      { Name: "containerClassName", Type: "Tailwind Classes", Default: "-", Description:"Override or extend the styles applied to the component container."  },
      { Name: "inputClassName", Type: "Tailwind Classes", Default: "-", Description:"Override or extend the styles applied to the component input."  },
      { Name: "labelStyleClass", Type: "Tailwind Classes", Default: "-", Description:"Override or extend the styles applied to the component label."  },
      { Name: "optionsClassName", Type: "Tailwind Classes", Default: "-", Description:"Override or extend the styles applied to the component options."  },
      { Name: "dropDownIcon", Type: "React.ReactNode", Default: "-", Description:"Override component dropdown icon."  },
      { Name: "multiple", Type: "boolean", Default: "false", Description:"If true, component will support multiple selections."  },
    ];

  return (

      <DashboardWrapper>
        <CommonSectionWrapper className='mb-10'>
         
           <h2 className="text-3xl font-extrabold leading-[1.4] text-black mb-2">
           Autocomplete API
            </h2>
            <p className='font-normal text-base leading-snug'>API reference docs for the Autocomplete component</p>
           
        </CommonSectionWrapper>

        <div>
        <Table headers={headers} data={data} />
        </div>
     </DashboardWrapper>
 
  )
}

export default page