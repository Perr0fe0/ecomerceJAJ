/* eslint-disable linebreak-style */
'use client';

import { BaggageClaim, Heart, ShoppingCartIcon, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import MenuList from './MenuList';
import ItemsMenuMobile from './ItemsMenuMobile';
import ToggleTheme from './toggle-theme';
import { useCart } from './hooks/use-cart';
import { useLovedProducts } from './hooks/use-loved-products';

const NavBar = () => {
  const cart = useCart();
  const router = useRouter();
  const {lovedItems} = useLovedProducts();

  return (
    <div className='flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl'>
      <h1 className='text-4xl' onClick={() => router.push('/')}>
                Ugly Coffee <span className='text-xl font-extralight'>Shop</span>
      </h1>

      <div className="items-center justify-between hidden sm:flex">
        <MenuList/>
      </div>
      <div className="flex sm:hidden">
        <ItemsMenuMobile/>
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        {cart.items.length === 0 ?
          <ShoppingCartIcon 
            strokeWidth={1} 
            className="cursor-pointer" 
            onClick={() => router.push('/cart')} />
          : (
            <div className='flex gap-1' onClick={() => router.push('/cart')}>
              <BaggageClaim strokeWidth={1} className='cursor-pointer'/>
              <span>{cart.items.length}</span>
            </div>
          )}
       

        <Heart
          strokeWidth={1} 
          className={`cursor-pointer ${lovedItems.length > 0 && 'fill-black dark:fill-white'}`} 
          onClick={() => router.push('/loved-products')} />

        <User
          strokeWidth={1} 
          className="cursor-pointer" 
          onClick={() => router.push('/user')} />

        <ToggleTheme/>
      </div>

    </div>
  );
};

export default NavBar;
