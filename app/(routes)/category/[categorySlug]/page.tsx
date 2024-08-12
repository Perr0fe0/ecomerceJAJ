/* eslint-disable linebreak-style */
'use client';
import { useGetCategotyProduct } from '@/api/getCategotyProduct';
import { Separator } from '@/components/ui/separator';
import { ResponseType } from '@/types/response';
import { useParams, useRouter } from 'next/navigation';
import FiltersControlsCategorys from './components/filters-controls-category';
import SkeletonSchema from '@/components/skeleton-schema';
import ProductCard from './components/product-card';
import { ProductType } from '@/types/product';
import { useState } from 'react';
import { log } from 'console';


export default function Page() {
  const params = useParams();
  const {categorySlug} = params; 
  const {result, loading}: ResponseType = useGetCategotyProduct(categorySlug);
  const router = useRouter();

  

  const [filterOrigin, setFilterOrigin] = useState('');
  
  const filteredProducts = result !== null && !loading &&(
    filterOrigin === '' ? result : result.filter((product: ProductType) => product.attributes.origin === filterOrigin)
  );

  console.log(filteredProducts)
  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
      {result !== null && !loading && (
        <h1 className='text-3xl font-medium'>Café {result[0].attributes.category.data.attributes.categoryName}</h1>
      )}

      <Separator/>

      <div className='sm:flex sm:justify-between'>
        <FiltersControlsCategorys setFilterOrigin={setFilterOrigin}/>

        <div className='grid gap-5 mt-8 sm:grid-col-2 md:grid-cols-3 md:gap-10'>
          {loading && (
            <SkeletonSchema grid={3} />
          )}

          {filteredProducts !== null && !loading &&(
            filteredProducts.map((product: ProductType) =>(

              <ProductCard key={product.id} product={product}/>
            ))
            
          )}
          
          {/*En caso de no tener productos, mostrar parrafo*/}
          {filteredProducts !== null && !loading && filteredProducts.length === 0 && (
            <p className='text-3xl '>No hay productos Relacionados a este filtro, que mal :c</p>
          )}
        </div>
      </div>
    </div>
  );
}