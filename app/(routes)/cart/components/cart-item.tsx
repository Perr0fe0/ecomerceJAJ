/* eslint-disable linebreak-style */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import { useCart } from '@/components/hooks/use-cart';
import ImagePreview from '@/components/shared/image-preview';
import ProductTasteOrigin from '@/components/shared/product-taste-origin';
import { formatPrice } from '@/lib/formatPrice';
import { cn } from '@/lib/utils';
import { ProductType } from '@/types/product';
import { X } from 'lucide-react';


/* eslint-disable linebreak-style */
interface CartItemProps {
    product: ProductType;
}
const CartItem = (props: CartItemProps) => {

  const {product} = props;
  const {removeItem} = useCart();

  return (
    <li className='flex py-6 border-b'>
      <ImagePreview
        slug={`/product/${product.attributes.slug}`}
        url={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.attributes.images.data[0].attributes.url}`}
      />
        
      
      <div className='flex justify-between flex-1 px-6'>
        <div>
          <h2 className='text-lg font-bold'>{product.attributes.productName}</h2>
          <p className='text-2xl font-bold'>{formatPrice(product.attributes.price)}</p>
          <ProductTasteOrigin 
            taste={product.attributes.taste}
            origin={product.attributes.origin}/>
        </div>
        <div>
          <button className={cn('rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition')}>
            <X size={20} color='black' onClick={() => removeItem(product.id)}/>
          </button>
        </div>
        
      </div>
    </li>
  );
};

export default CartItem;
