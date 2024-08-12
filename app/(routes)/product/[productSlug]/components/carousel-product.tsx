/* eslint-disable @next/next/no-img-element */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import React from 'react'
interface CarouselProductProps{
    images:{
        data:{
            id:number;
            attributes:{
                url:string;

            }
        }[]
    }
}
const CarouselProduct = (props: CarouselProductProps) => {
  {/* Destructuracion de Images (props) */}
  const{ images } = props
  console.log(images)
  return (
    <div className='sm:px-16'>
      <Carousel>
        <CarouselContent>
          {images.data.map((image) => (
            <CarouselItem key={image.id}>
              <img 
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`} 
                alt="image product" 
                className='rounded-lg' /> 
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default CarouselProduct
