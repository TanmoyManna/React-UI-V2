"use client";


import Container from '@/components/Container/Container';
import React, { useState } from 'react'

import reactElementToJSXString from "react-element-to-jsx-string";
import { Button, Input } from 'react-ui';

const InputExample = () => <Input variant="outline" placeholder="Enter You Password" className='w-96' label="" InputOuterClass="" labelStyleClass="" adormentIconStyleProps="" isPassword={true} iconPosition="end"></Input>;

function page() {
  const [preview, setPreview] = useState(true);

  return (
    <div className='w-full'>
      <Container className='max-w-[1440px] px-4 w-full '>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium">Input</h2>
          <div className="flex items-center space-x-2">
            <Button variant="solid" size="md" className="bg-blue-500 hover:bg-blue-600 w-30" onClick={()=>setPreview(true)}>Preview</Button>
            <Button variant="solid" size="md" className="bg-blue-500 hover:bg-blue-600 w-30" onClick={()=>setPreview(false)}>Code</Button>
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
              <InputExample/>
              :
              <pre>{reactElementToJSXString(InputExample(), { displayName: () => "Input" })}</pre>
          }
        </div>
      </Container>
    </div>

  )
}

export default page