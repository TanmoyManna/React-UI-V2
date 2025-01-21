"use client";

import Container from '@/components/Container/Container'
import React from 'react'

function page() {
  return (
   <div className=' w-full bg-white '>
    <Container className=' max-w-[1310px] w-full my-auto mx-0'>
      <div className='w-full'>
        <div className=' flex items-center'>
          <div className='py-0.5 px-2.5 rounded-2xl'>New feature</div>
        </div>
      </div>
    </Container>
   </div>
  )
}

export default page