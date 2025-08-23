import Image from "next/image";
import BannerSection from "./Components/BannerSection";
import CategorySection from "./Components/CategorySection";
import PopularProducts from "./Components/PopularProducts";

export default function Home() {
  return (
   
   <div className="py-3">
     <BannerSection></BannerSection>
     <CategorySection></CategorySection>
     <PopularProducts></PopularProducts>
   </div>
       
  );
}
