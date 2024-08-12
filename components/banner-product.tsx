/* eslint-disable indent */
/* eslint-disable linebreak-style */
import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './ui/button';

const BannerProduct = () => {
    return (
        <>
            <div className='mt-4 text-center'>
                <p className='text-lg'>Sumergete en un mar de variedades</p>
                <h4 className='mt-2 text-5xl font-extrabold uppercase'>#CafÉxotico</h4>
                <p className='text-xl'>Solo para personas Exoticas</p>
                <Link href={'#'} className={buttonVariants()}>Comprar</Link>
            </div>
            <div className='h-[900px] lg:h-[350px] bg-cover bg-center bg-[url("/cafeop.jfif")] mt-5'/>
        </>

    );
};

export default BannerProduct;
