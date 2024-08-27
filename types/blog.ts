export type BlogType = {
  _id: string;
  title: string;
  question: string;
  description: string;
  image: string;
  role: string;
  date: string;
  testimonial: {
    image: string | undefined;
    role: string;
  };
};

export type FeatureType = {
  _id: string;
  icon: string;
  title: string;
  description: String;
};

export type TeamType = {
  _id: string;
  name: string;
  role: string;
  image: string;
};

export type TestimonialType = {
  image:string,
  description:string,
  name:string,
  role:string
} 
