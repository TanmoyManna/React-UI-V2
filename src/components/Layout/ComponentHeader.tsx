"use client";

import React, { forwardRef } from "react";
import { Badge, Button, Input } from "react-ui";
import NotificationIocn from "../../../public/assets/icon/NotificationIocn";
import SettingIcon from "../../../public/assets/icon/SettingIcon";

interface componentheaderprops extends React.HTMLAttributes<HTMLDivElement> {}

export const ComponentHeader = forwardRef<HTMLDivElement, componentheaderprops>(
  ({ ...props }, ref) => {
    return (
      <div
        className="flex justify-end items-center gap-10 py-4 px-10"
        ref={ref}
      >
        <div className="flex items-center">
          <Input className=" border-slate-900" />
        </div>
        <div className="flex items-center gap-4 ">
          <Badge
            badgeContent={4}
            color="secondary"
            position="topRight"
            size="md"
            badgeStyle="px-[5px] py-[2px]"
          >
            <NotificationIocn />
          </Badge>
          <Button size="md" variant="ghost" className="p-0 hover:bg-transparent hover:opacity-50 min-w-[auto] ">
            <SettingIcon />
          </Button>
        </div>
      </div>
    );
  }
);
ComponentHeader.displayName = "ComponentHeader";
