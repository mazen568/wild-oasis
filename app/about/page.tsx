import about_1 from "@/public/about-1.jpg";
import about_2 from "@/public/about-2.jpg";
import AboutSection from "../_components/AboutSection";
import { getCabins } from "../_lib/data-service";
import {Cabin} from "@/app/types/cabins";


export const revalidate = 86400; // Revalidate every hour

export const metadata={
  title:"about us"
} 
export default async function page() {

  const cabins:Cabin[]= await getCabins();
  
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <AboutSection
        title="Welcome to The Wild Oasis"
        paragraphs={[
          "Where nature's beauty and comfortable living blend seamlessly. Hidden away in the heart of the Italian Dolomites, this is your paradise away from home. But it's not just about the luxury cabins. It's about the experience of reconnecting with nature and enjoying simple pleasures with family.",
          `Our ${cabins.length} luxury cabins provide a cozy base, but the real freedom and peace you'll find in the surrounding mountains. Wander through lush forests, breathe in the fresh air, and watch the stars twinkle above from the warmth of a campfire or your hot tub.`,
          "This is where memorable moments are made, surrounded by nature's splendor. It's a place to slow down, relax, and feel the joy of being together in a beautiful setting."
        ]}
        imgSrc={about_1}
        imgDirection="right"
      />

      <AboutSection
        title="Managed by our family since 1962"
        paragraphs={[
          "Since 1962, The Wild Oasis has been a cherished family-run retreat. Started by our grandparents, this haven has been nurtured with love and care, passing down through our family as a testament to our dedication to creating a warm, welcoming environment.",
          "Over the years, we've maintained the essence of The Wild Oasis, blending the timeless beauty of the mountains with the personal touch only a family business can offer. Here, you're not just a guest; you're part of our extended family. So join us at The Wild Oasis soon, where tradition meets tranquility, and every visit is like coming home."
        ]}
        imgSrc={about_2}
        imgDirection="left"
      />
    </div>
  )
}
