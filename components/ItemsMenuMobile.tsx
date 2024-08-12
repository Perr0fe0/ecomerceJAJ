import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Menu } from 'lucide-react'
import Link from 'next/link'


const ItemsMenuMobile = () => {
  return (
    <Popover>
        <PopoverTrigger>
            <Menu/>
        </PopoverTrigger>
        <PopoverContent>
            <Link className='block py-2 text-2xl' href='/categories/cafe-grano'>Cafe en Grano</Link>
            <Link className='block py-2 text-2xl' href='/categories/cafe-molido'>Cafe Molido</Link>
            <Link className='block py-2 text-2xl' href='/categories/cafe-capsula'>Cafe en Capsula</Link>
        </PopoverContent>
    </Popover>
  )
}

export default ItemsMenuMobile
