import React from 'react'

import { footerList1, footerList2, footerList3 } from '../assets/constants';

const List = ({items}) => (
<div className='flex flex-wrap gap-2 mt-5'>
            {items.map((item) =>(
                <p key={item} className='text-gray-400 text-sm  hover:underline cursor-pointer'>
                    {item}
                </p>
            ))}
        </div>
)
const Footer = () => {
  return (
    <div className='mt-6 hidden xl:block'>
        <List items={footerList1} />
        <List items={footerList2} />
        <List items={footerList3} />
        <p className='text-gray-400 text-sm mt-5'>EjArjay Tiktik App</p>
    </div>
  )
}

export default Footer