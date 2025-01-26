// components/Accordion.tsx
import React, { useState, ReactNode } from "react";
import DropdownIcon from "../../../public/assets/icon/DropdownIcon";

type AccordionProps = {
  children: ReactNode; // Accepts child `AccordionItem` components
  className?: string;
};

type AccordionItemProps = {
  id: string;
  summary: ReactNode;
  children: ReactNode; // The details content is passed as children
};

const AccordionItem: React.FC<AccordionItemProps> = ({ id, summary, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => setExpanded(!expanded);

  return (
    <div className=" bg-transparent overflow-hidden">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center px-4 py-3 bg-transparent hover:bg-gray-200 text-left"
        aria-expanded={expanded}
        aria-controls={`${id}-details`}
      >
        <span className="font-medium">{summary}</span>
        <span className={`transition-transform ${expanded ? "rotate-180" : ""}`}>
          <DropdownIcon/>
        </span>
      </button>
      <div
        id={`${id}-details`}
        className={`transition-[max-height] duration-300 ease-in-out ${
          expanded ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="p-2 bg-transparent">{children}</div>
      </div>
    </div>
  );
};

const CustomAccordion: React.FC<AccordionProps> & { Item: typeof AccordionItem } = ({
  children,
  className = "",
}) => {
  return <div className={`space-y-1 ${className}`}>{children}</div>;
};

CustomAccordion.Item = AccordionItem;

export default CustomAccordion;
