import Link from 'next/link';
import { Separator } from './ui/separator';

/* eslint-disable linebreak-style */
const Footer = () => {
  const dataFooter = [
    {
      id: 1,
      name:'sobre nosotros',
      link: '#'
    },
    {
      id: 2,
      name:'Productos',
      link: '#'
    },
    {
      id: 3,
      name:'Mi cuenta',
      link: '#'
    },
    {
      id: 4,
      name:'Politica de privacidad',
      link: '#'
    }

  ];
  return (
    <footer className="mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="font-bold text-2xl">
                    Ugly Coffee<span className="font-light text-[1rem]"> Shop</span>
          </p>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {
              dataFooter.map((data) => (
                <li key={data.id}>
                  <Link className='hover:underline me-4 md:me-6' href={data.link}>{data.name}</Link>
                </li>
              )

              )
            }
          </ul>
        </div>
        <Separator className='my-6 border-gray-200 sm:mx-auto dark:border-gray-800 lg:my-8'/>
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            &copy; 2024
            <Link href={'#'}> PerroFeo. </Link> Todos los derechos reservados.
        </span>
      </div>
      
    </footer>
  );
};

export default Footer;
