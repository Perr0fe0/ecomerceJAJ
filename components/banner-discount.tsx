import Link from "next/link";
import { buttonVariants } from "./ui/button";

/* eslint-disable linebreak-style */
const BannerDiscount = () => {
  return (
    <div className="p-5 sm:p-20 text-center">
      <h2 className="uppercase font-bold text-4xl">cashback del 15%</h2>
      <h3 className="text-2xl">En tus compras realizadas los <span className="font-bold text-3xl">Lunes</span> o <span className="font-bold text-3xl">Viernes</span></h3>

      <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
        <Link href='#' className={buttonVariants()}>Comprar</Link>
        <Link href='#' className={buttonVariants({variant: "outline" })}>Más información</Link>
      </div>
    </div>
  );
};

export default BannerDiscount;
