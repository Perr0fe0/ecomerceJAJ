/* eslint-disable linebreak-style */
'use client';
import { useLovedProducts } from '@/components/hooks/use-loved-products';
import LovedItemProduct from './components/loved-item-product';
export default function Page() {
  const {lovedItems} = useLovedProducts();
  return(
    <div className="max-w-4xl px-4 mx-auto sm:py-32 sm:px-24">
      <h1 className="mb-5 text-3xl font-bold">
            Productos Favoritos
      </h1>

      <div>
        <div>
          {lovedItems.length === 0 &&(
            <p className='mt-8 text-3xl'>No tienes ningun producto agregado a tu lista de deseados</p>
          )}

          <ul>
            {lovedItems.map((item) =>(
              <LovedItemProduct key={item.id} product={item}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 