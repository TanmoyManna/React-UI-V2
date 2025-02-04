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
        <Link className="w-full inline-block py-2 px-6 hover:bg-gray-200" href='/components/button'>
          Button
        </Link>
        <Link className="w-full inline-block py-2 px-6 hover:bg-gray-200" href='/components/checkbox'>
          CheckBox
        </Link>
        <Link className="w-full inline-block py-2 px-6 hover:bg-gray-200" href='/componentst/radio'>
          Radio
        </Link>
        <Link className="w-full inline-block py-2 px-6 hover:bg-gray-200" href='/components/autocomplete'>
          Autocomplete
        </Link>
        <Link className="w-full inline-block py-2 px-6 hover:bg-gray-200" href='/components/badge'>
          Badge
        </Link>
        <Link className="w-full inline-block py-2 px-6 hover:bg-gray-200" href='/components/list'>
          List
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
      <>
        <Link className="w-full inline-block py-2 px-6 hover:bg-gray-200" href='/api-doc/button'>
          Button
        </Link>
        <Link className="w-full inline-block py-2 px-6 hover:bg-gray-200" href='/api-doc/checkbox'>
          CheckBox
        </Link>
        <Link className="w-full inline-block py-2 px-6 hover:bg-gray-200" href='/api-doc/radio'>
          Radio
        </Link>
        <Link className="w-full inline-block py-2 px-6 hover:bg-gray-200" href='/api-doc/autocomplete'>
          Autocomplete
        </Link>
        <Link className="w-full inline-block py-2 px-6 hover:bg-gray-200" href='/api-doc/badge'>
          Bagde
        </Link>
        <Link className="w-full inline-block py-2 px-6 hover:bg-gray-200" href='/api-doc/list'>
          List
        </Link>
      </>
    ),
  },

];