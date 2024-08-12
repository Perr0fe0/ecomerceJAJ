import BannerDiscount from '@/components/banner-discount';
import BannerProduct from '@/components/banner-product';
import CarouselBanner from '@/components/carousel-text-banner';
import ChooseCategory from '@/components/choose-category';
import FeaturedProducts from '@/components/featured-products';


export default function Home() {
  return (
    <main>
      <CarouselBanner/>
      <FeaturedProducts/>
      <BannerDiscount/>
      <ChooseCategory/>
      <BannerProduct/>
    </main>
  );
}
