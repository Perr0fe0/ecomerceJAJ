/* eslint-disable linebreak-style */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-unused-vars */
import { useCart } from '@/components/hooks/use-cart';
import { useLovedProducts } from '@/components/hooks/use-loved-products';
import { ProductType } from '@/types/product';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductTasteOrigin from '@/components/shared/product-taste-origin';
import ImagePreview from '@/components/shared/image-preview';
import { formatPrice } from '@/lib/formatPrice';


interface LovedItemProductProps {

    product: ProductType
}
const LovedItemProduct = (props: LovedItemProductProps) => {
  const {product} = props;
  const {removeLovedItem} = useLovedProducts();
  const {addItem} = useCart();

  /*Funcion para añadir al carrio y eliminar de la lisa de deseados */
  const addToCheckOut = () =>{

    addItem(product);
    removeLovedItem(product.id);
  };

  return (
    <li className="flex py-6 border-b">
      <ImagePreview
        slug={`/product/${product.attributes.slug}`}
        url={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.attributes.images.data[0].attributes.url}`}
      />
      <div className='flex justify-between flex-1 px-6'>
        <div>
          <h2 className='text-2xl font-bold'>{product.attributes.productName}</h2>
          <p className='font-bold mb-1'>{formatPrice(product.attributes.price)}</p>
          <ProductTasteOrigin 
            taste={product.attributes.taste}
            origin={product.attributes.origin}/>
          <Button onClick={() => addToCheckOut()} className='mt-5 rounded-full'>Añadir al carrito</Button>
          
        </div>
        <div>
          <button className={cn('rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition')}>
            <X size={20} color='black' onClick={() => removeLovedItem(product.id)}/>
          </button>
        </div>

      </div>
    </li>
  );
};

export default LovedItemProduct;
