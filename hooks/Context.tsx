import  { createContext, useEffect, useState } from "react";
import { BlogType , FeatureType , TeamType , TestimonialType} from "./../types/blog";
interface ItemsType {
  BlogItems: BlogType[];
  featuresItems:FeatureType[];
  TeamItems:TeamType[];
  TestimonialItems:TestimonialType[]
}
// create items context
const ContextItem = createContext<ItemsType>({
  BlogItems: [],
  featuresItems:[],
  TeamItems:[],
  TestimonialItems:[]
});

// create provider

function BlogItemProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [BlogItems, setBlogItems] = useState<BlogType[]>([]);
  const [featuresItems, setFeaturesItems] = useState<FeatureType[]>([]);
  const [TeamItems, setTeamItems] = useState<TeamType[]>([]);
  const [TestimonialItems, setTestimonialItems] = useState<TestimonialType[]>([]);
  useEffect(() => {
    const getBlog = async () => {
      const res = await fetch("/data/db.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        const data = await res.json();
        setBlogItems(data.blogs);
        setFeaturesItems(data.Feature)
        setTeamItems(data.teams)
        setTestimonialItems(data.testimonial)
      }
    };
    getBlog();
  }, []);

  return (
    <ContextItem.Provider value={{ BlogItems , featuresItems , TeamItems , TestimonialItems }}>
      {children}
    </ContextItem.Provider>
  );
}


export {ContextItem}
export default BlogItemProvider