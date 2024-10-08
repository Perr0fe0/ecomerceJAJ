/* eslint-disable linebreak-style */
'use client';
import { ResponseType } from '@/types/response';
import { useGetProductBySlug } from '@/api/getProductBySlug';
import { useParams } from 'next/navigation';
import SkeletonProduct from './components/skeleton-products';
import CarouselProduct from './components/carousel-product';
import InfoProduct from './components/info-product';

export default function Page() {
  const params = useParams();
  const {productSlug} = params;
  
  const {result}:ResponseType= useGetProductBySlug(productSlug);
  

  {/*Mostrar Esqueleto al cargar datos*/}
  if (result === null){
    return <SkeletonProduct/>;
  }

  {/* Espacio del Producto */}
  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-32 sm:px-24'>
      <div className=' grid sm:grid-cols-2'>

        {/* Carousel imagenes producto */}
        <div>
          <CarouselProduct images={result[0].attributes.images}/>
        </div>

        {/* Informacion del producto */}
        <div className='sm:px-12'>
          <InfoProduct product={result[0]} />
        </div>
      </div>
    </div>
  );
}