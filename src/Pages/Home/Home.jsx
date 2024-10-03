import FeaturedCategories from '../../component/HomePage/FeaturedCategories';
import FlashSale from '../../component/HomePage/FlashSale';
import HotDeal from '../../component/HomePage/HotDeal';
import ShopByBrands from '../../component/HomePage/ShopByBrand';
import TrandingProduct from '../../component/HomePage/TrandingProduct';
import ImageCarousel from '../../component/ImageCarousel';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <div className='my-5'>
            <ImageCarousel/>     
            </div>
            <FeaturedCategories/>
            <FlashSale/>
            <HotDeal/>
            <TrandingProduct/>
            <ShopByBrands/>
        </div>
    );
};

export default Home;