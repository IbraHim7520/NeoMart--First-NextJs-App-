import Image from "next/image";
import BannerSection from "./Components/BannerSection";
import CategorySection from "./Components/CategorySection";

export default function Home() {
  return (
   
   <div className="py-3">
     <BannerSection></BannerSection>
     <CategorySection></CategorySection>
   </div>
       
  );
}
