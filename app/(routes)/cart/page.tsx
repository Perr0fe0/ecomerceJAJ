/* eslint-disable linebreak-style */
'use client';
import { useCart } from '@/components/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { formatPrice } from '@/lib/formatPrice';
import CartItem from './components/cart-item';
import {loadStripe} from '@stripe/stripe-js';
import { makePaymentRequest } from '@/api/payment';

/* eslint-disable linebreak-style */
export default function Page() {
  const {items, removeAll } = useCart();
  const prices = items.map((product => product.attributes.price));
  const totalPrice = prices.reduce((total, price) => total + price, 0 );

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');
  console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  const buyStripe = async () =>{
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post('/api/orders', {
        products: items
      });
      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id
      });
      removeAll();

    } catch (error) {
      console.log(error);
    }
  };
  return (
    
    <div className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <h1 className="mb-5 text-3xl font-bold">Shopping Cart</h1>
      <div className="grid sm:grid-cols-2 sm:gap-5">

        {items.length === 0 &&(
          <div className="text-3xl">
            <p>No tienes Articulos en tu carrito.</p>
            <p className="font-bold">VE A COMPRAR BABOSO!</p>
          </div>
        )}

        <ul>
          {items.map((item) => (
            <CartItem key={item.id} product={item}/>
          ))}
        </ul>

        <div className={`max-w-xl visible ${items.length === 0 ? 'invisible': ''}`}>
          <div className="p-6 rounded-lg bg-slate-100 dark:bg-blue-950">
            <p className='mb-3 text-2xl font-semibold'>Shopping summary</p>
            <Separator className='bg-black dark:bg-white'/>
            <div className='flex justify-between gap-5 my-4'>
              <p className='text-2xl'>Total a pagar</p>
              <p className='text-3xl font-bold'>{formatPrice(totalPrice)}</p>
            </div>
            <div className='flex items-center justify-center w-full mt-3'>
              <Button className='w-full font-bold text-2xl' onClick={buyStripe}>
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}