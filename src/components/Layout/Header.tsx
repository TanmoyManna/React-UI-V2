import React from 'react'
import SearchIcon from '../../../public/assets/icon/SearchIcon'
import RightArrowIcon from '../../../public/assets/icon/RightArrowIocn'

function Header() {

  const navigation = [
    { name: 'Components', href: '#' },
    { name: 'Templates', href: '#' },
    { name: 'UI Kit', href: '#' },
    { name: 'Docs', href: '#' },
  ]

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="font-semibold text-gray-900">
              {item.name}
            </a>
          ))}
          <button className='flex items-center gap-1 font-medium text-gray-900 hover:opacity-50'><SearchIcon /></button>
          <a href='#' className="font-semibold text-gray-900">
            Sign in
          </a>
          <button className='flex items-center justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8'>Get All Access <RightArrowIcon/></button>
        </div>
      </nav>
    </header>
  )
}

export default Header