/* eslint-disable linebreak-style */
'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const PageSuccess = () => {
  const router = useRouter();
  
  return (
    <div className="max-w-7xl p-4 mx-auto sm:py-16 sm:px-24">
      <div className="flex flex-col-reverse gap-2 sm:flex-row">
        <div className="flex justify-center md:min-w[400px]">
          <Image src='/success.jfif' alt="Success img" width={250} height={500} className="rounded-lg"/>
        </div>
        <div>
          <h1 className='text-5xl '>Gracias por tu compra</h1>
          <p className='my-3 text-2xl'>En breves, nuestros empleados(que no estan sobre explotados) se encargaran de tomar tu orden y prepararla con el máximo de dedicación posible, para ofrecerle la mas alta garantia y satisfaccion que podremos brindarle</p>
          <p className='my-3 text-2xl'>Sientete libre de seguir mirando nuestros productos!</p>
          <Button className='w-full md:w-1/2 ' onClick={() => router.push('/')}>Volver a la tienda</Button>
        </div>
      </div>
    </div>
  );
};

export default PageSuccess;
