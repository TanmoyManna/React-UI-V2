"use client";


import Container from '@/components/Container/Container';
import React, { useState } from 'react'

import reactElementToJSXString from "react-element-to-jsx-string";
import { Button, Select } from 'react-ui';

const ButtonExample1 = () => <Button variant="solid" size="md" className="bg-blue-500 hover:bg-blue-600 w-30">Click Me</Button>;

function page() {
  const [preview, setPreview] = useState(true);

  return (
    <div className='w-full'>
      <Container className='max-w-[1440px] px-4 w-full '>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium">Button</h2>
          <div className="flex items-center space-x-2">
            <Button variant="solid" size="md" className="bg-blue-500 hover:bg-blue-600 w-30" onClick={()=>setPreview(true)}>Preview</Button>
            <Button variant="solid" size="md" className="bg-blue-500 hover:bg-blue-600 w-30" onClick={()=>setPreview(false)}>Code</Button>
            {/* <Select options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
            ]}></Select> */}
            <div className="relative">
              <select className="border rounded-lg px-3 py-2 text-sm bg-white shadow-sm">
                <option>React</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-4">
          {
            preview ?
              <ButtonExample1 />
              :
              <pre>{reactElementToJSXString(ButtonExample1(), { displayName: () => "Button" })}</pre>
          }
        </div>
      </Container>
    </div>

  )
}

export default page