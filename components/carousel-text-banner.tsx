'use client';
/* eslint-disable linebreak-style */
import { useRouter } from 'next/navigation';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import AutoPlay from 'embla-carousel-autoplay';
import { Card, CardContent } from './ui/card';

export const dataCarouselTop = [
  {
    id: 1,
    title: 'Envios el mismo dia antes de las 14:00!',
    description: 'Solamente en Region Metropolitana. (Regiones en 24/48 hrs laborales)',
    link: '#'
  },
  {
    id: 2,
    title: 'Obten un 10% de descuento en tu compra!',
    description: 'A partir de compras mayores a $50.000',
    link: '#'
  },
  {
    id: 3,
    title: 'Conviertete en un Ugly Client Plus',
    description: 'Recibe descuentos de hasta un 50% y muchos otros beneficios!',
    link: '#'
  }
];

const CarouselBanner = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-200 dark:bg-slate-700">
      <Carousel plugins={[
        AutoPlay({
          delay:5000, 
        })]} className='w-full max-w-4xl mx-auto dark:bg-slate-700'>
        <CarouselContent>
          {dataCarouselTop.map(({id, title, link, description}) =>(
            <CarouselItem key={id} onClick={() => router.push(link)}>
              <Card className='shadow-none border-none bg-transparent'>
                <CardContent className='flex flex-col justify-center p-2 items-center text-center'>
                  <p className='font-bold text-4xl'>{title}</p>
                  <p>{description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
