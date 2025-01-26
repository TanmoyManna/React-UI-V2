"use client";
import { DashboardWrapperStyle } from '@/styles/StyleComponents/DashboardWrapper'
import React, { useEffect, useRef, useState } from 'react'
import { ComponentSidebar } from './ComponentSidebar'
import { ComponentHeader } from './ComponentHeader';

export interface dashboardinterface extends React.HTMLAttributes<HTMLDivElement>{

}

export const DashboardWrapper: React.FC<dashboardinterface> = ({  ...props }) => {

  const headerRef=useRef<HTMLDivElement>(null);
  const [headerHeight,setHeaderHight]=useState(0)
  useEffect(() => {
    if (headerRef.current ) {
      setHeaderHight(
        headerRef.current?.getBoundingClientRect().height || 300
      );
    
      const adjustHeight = () => {
        setHeaderHight(
          headerRef.current?.getBoundingClientRect().height || 300
        );
      
      };
      window.addEventListener("resize", adjustHeight);

      return () => {
        window.removeEventListener("resize", adjustHeight);
      };
    }
  }, [headerRef.current]);
  console.log(headerHeight,"headerHeight")


  return (
    <DashboardWrapperStyle>
      <div className='flex flex-wrap'>
        <ComponentSidebar />
        <div  className='w-full ml-80 h-screen'>
          <ComponentHeader ref={headerRef}/>
          <div style={{maxHeight:`calc(100vh - ${headerHeight}px)`}} className='h-full py-5 px-10 overflow-auto'>
          {props.children}
          </div>
        </div>
      </div>
    </DashboardWrapperStyle>
  )
}
