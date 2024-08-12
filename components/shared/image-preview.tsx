/* eslint-disable linebreak-style */
/* eslint-disable @next/next/no-img-element */

import { useRouter } from 'next/navigation';

/* eslint-disable linebreak-style */
interface ImgPreview {
    url: string,
    slug: string
}


const ImagePreview = (props: ImgPreview) => {
  const{url, slug} = props;
  const router = useRouter();
  return (
    <div onClick={() => router.push(slug)} className='cursor-pointer'>
      <img 
        src={url} 
        alt="img Item carrito"
        className='w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32' />
    </div>
  );
};

export default ImagePreview;
