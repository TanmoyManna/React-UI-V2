import Link from "next/link";

export const accordionItems = [
    {
      id: "panel1",
      summary: (
        <>
          <span className="w-1/3 flex-shrink-0">Getting Started</span>
        </>
      ),
      details: (
       <Link className="w-full inline-block py-2 px-6 hover:bg-gray-200" href="">
        Home
       </Link>
      ),
    },
    {
      id: "panel2",
      summary: (
        <>
          <span className="w-1/3 flex-shrink-0">Components</span>
        </>
      ),
      details: (
       <>
       <Link className="w-full inline-block py-2 px-6 hover:bg-gray-200" href='/ui-component/button'>
        Button
       </Link>
       <Link className="w-full inline-block py-2 px-6 hover:bg-gray-200" href='/ui-component/sdfs
       '>
        CheckBox
       </Link>
       </>
      ),
    },
    {
      id: "panel3",
      summary: (
        <>
          <span className="w-1/3 flex-shrink-0">Component API</span>
         
        </>
      ),
      details: (
        <p>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, animi!
        </p>
      ),
    },

  ];