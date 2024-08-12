/* eslint-disable linebreak-style */
interface ProductsTasteOrigin {
    taste: string,
    origin:string
}
const ProductTasteOrigin = (props: ProductsTasteOrigin) => {
  const {taste , origin} = props;
  return (
    <div className='flex items-center justify-between gap-3'>
      <p 
        className='px-2 py-1 text-white bg-black rounded-full dark:text-black dark:bg-white w-fit'
      >
        {taste}
      </p>

      <p 
        className='px-2 py-1 text-white bg-blue-600 rounded-full'
      >
        {origin}
      </p>
    </div>
  );
};

export default ProductTasteOrigin;
