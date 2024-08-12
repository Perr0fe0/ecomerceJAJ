/* eslint-disable linebreak-style */
import { useCart } from '@/components/hooks/use-cart';
import { useLovedProducts } from '@/components/hooks/use-loved-products';
import ProductTasteOrigin from '@/components/shared/product-taste-origin';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { formatPrice } from '@/lib/formatPrice';
import { ProductType } from '@/types/product';
import { Heart } from 'lucide-react';
import React from 'react';
export type InfoProductProps = {
    product: ProductType
}
const InfoProduct = (props: InfoProductProps) => {

  {/* Destructuracion de producto (props)*/}
  const { product } = props;
  const {addItem} = useCart();
  const {addLovedItem} = useLovedProducts();
  return (
    <div className='p-6'>
      <div className='justify-between mb-3 sm:flex '>
        <h1 className='text-3xl'>{product.attributes.productName}</h1>
        <ProductTasteOrigin
          taste={product.attributes.taste}
          origin={product.attributes.origin}/>
      </div>
      <Separator className='my-4'/>
      <p className='text-3xl'>
        {product.attributes.description}
      </p>
      <Separator className='my-4'/>
      <p className='my-4 text-2xl '>
        {formatPrice(product.attributes.price)}
      </p>

      <div className='flex items-center gap-5'>
        <Button className=' w-full text-2xl' onClick={() => addItem(product)}>
            Comprar
        </Button>
        <Heart width={30}  strokeWidth={1} className='transition duration-300 cursor-pointer hover:fill-red-600' onClick={() => addLovedItem(product)} />
      </div>
      
    </div>
  );
};

export default InfoProduct;
