"use client";
import React, { ComponentProps, forwardRef } from 'react'
import assets from '../../../json/assets'
import { ComponentSidebarWrapper } from '@/styles/StyleComponents/DashboardWrapper';
import Image from 'next/image';
import { Button, List, ListItem } from 'react-ui';
import Link from 'next/link';
import CustomAccordion from '../Accordian/Accordian';
import { accordionItems } from '@/mock/demo.mock';
// export const individualRoute = [
//   {
//     pathname: "Button",
//     path: "/ui-components/button",
//   },
//   {
//     pathname: "Input",
//     path: "/ui-components/input",
//   },
//   {
//     pathname: "Radio",
//     path: "/ui-components/radio",
//   },
// ];


interface ComponentSidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export const ComponentSidebar = forwardRef<HTMLDivElement, ComponentSidebarProps>(
  ({ ...props }, ref) => {
    // const individualRoute = [
    //   // Sample route data, replace with your actual data
    //   { path: '/home', pathname: 'Home' },
    //   { path: '/about', pathname: 'About' },
    //   { path: '/contact', pathname: 'Contact' },
    // ];

    return (
      <ComponentSidebarWrapper ref={ref} {...props} className='fixed w-80'>
        <div className="w-full p-4 h-screen">
          {/* Header Section */}
          <div className="flex justify-between items-center ">
            <figure className="leading-none w-40 h-auto">
              <Image
                width={200}
                height={100}
                alt="Brand Logo"
                src={assets.logoimage}
                className='w-full h-full object-contain'
              />
            </figure>

          </div>

          {/* Navigation List */}
          <div className='mt-5'>
            <CustomAccordion>
              {accordionItems.map((data, index: number) => (
                <CustomAccordion.Item id={data.id} summary={data.summary} key={index}>
                  {data.details}
                </CustomAccordion.Item>
              ))}

            </CustomAccordion>
          </div>
        </div>
      </ComponentSidebarWrapper>
    );
  }
);
ComponentSidebar.displayName = 'ComponentSidebar';
