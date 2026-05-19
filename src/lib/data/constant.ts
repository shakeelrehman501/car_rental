import { IconType } from "react-icons";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { CheckCircle2, Shield, Headphones, DollarSign, Award, Clock } from 'lucide-react';

export const navItems = [
  { id: "/", label: "Services" },
  { id: "contact", label: "Contact Us" },
  { id: "about", label: "About Us" },
];

export interface BrandType {
  name:string,
  image:string
}

export const brands:BrandType[] = [
  {
    name: "Acura",
    image:
      "/others/parado.png",
  },
  {
    name: "Ford",
    image:
      "/others/parado.png",
  },
  {
    name: "Bentley",
    image:
      "/others/parado.png",
  },
  {
    name: "Chevrolet",
    image:
      "/others/parado.png",
  },
  {
    name: "Ferrari",
    image:
      "/others/parado.png",
  },
  {
    name: "Mercedes",
    image:
      "/others/parado.png",
  },
  {
    name: "Ferrari_1",
    image:
      "/others/parado.png",
  },
  {
    name: "Mercedes_1",
    image:
      "/others/parado.png",
  },
  {
    name: "Ferrari_2",
    image:
      "/others/parado.png",
  },
  {
    name: "Mercedes_2",
    image:
      "/others/parado.png",
  },
];

export interface projectsCardType {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
}
export const projectsCardData:projectsCardType[] = [
  {
    id: 1,
    name: "Jeeb Wagner",
    price: 90,
    image: "/cardImages/card_imag_1.jpg",
    type: "SUV",
  },
  {
    id: 2,
    name: "Honda Accord",
    price: 85,
    image: "/cardImages/card_imag_2.jpg",
    type: "Sedan",
  },
  {
    id: 3,
    name: "Ferrari 458",
    price: 500,
    image: "/cardImages/card_imag_3.jpg",
    type: "Sport",
  },
  {
    id: 4,
    name: "Toyota Fortuner",
    price: 95,
    image: "/cardImages/card_imag_4.jpg",
    type: "SUV",
  },
  {
    id: 5,
    name: "BMW X5",
    price: 120,
    image: "/cardImages/card_imag_5.jpg",
    type: "SUV",
  },
  {
    id: 6,
    name: "Mercedes C-Class",
    price: 110,
    image: "/cardImages/card_imag_6.jpg",
    type: "Sedan",
  },   
];  


export const whyChooseUsFeatures = [
  {
    icon: Shield,
    title: 'Best Price Guarantee',
    description: 'We offer the most competitive prices with unbeatable value for money.',
  },
  {
    icon: Award,
    title: '24/7 Customer Service',
    description: 'Premium customer service that exceeds your expectations.',
  },
  {
    icon: DollarSign,
    title: 'Free Cancellation',
    description: 'Cancel anytime without any hidden fees or charges.',
  },
  {
    icon: CheckCircle2,
    title: 'Unlimited Miles',
    description: 'Drive as much as you want with no mileage restrictions.',
  },
];

export const feedbackCardItems = [
  {
    id: 1,
    firstCharacter: "M",
    name: "Mark Kole",
    review:
      "I have used this company for several of my project some very, very small and others, medium size and one larger project. The team was super responsive and prove to be extremely dependable...",
  },
  {
    id: 2,
    firstCharacter: "S",
    name: "Saeed Younas",
    review:
      "I recently used Jamil to make a few designs for my Hajj Umra and tour company, he listened and understood the project with minor adjustments he exceeded my expectation. I would highly recommend and I for sure will be using him again for other projects in the pipeline.",
  },
  {
    id: 3,
    firstCharacter: "J",
    name: "Jim Lewis",
    review:
      "Jamel was diligent and responded quickly and professionally to all our design requests.",
  },
  {
    id: 4,
    firstCharacter: "M",
    name: "Mark Kole",
    review:
      "I have used this company for several of my project some very, very small and others, medium size and one larger project. The team was super responsive and prove to be extremely dependable...",
  },
  {
    id: 5,
    firstCharacter: "S",
    name: "Saeed Younas",
    review:
      "I recently used Jamil to make a few designs for my Hajj Umra and tour company, he listened and understood the project with minor adjustments he exceeded my expectation. I would highly recommend and I for sure will be using him again for other projects in the pipeline.",
  },
  {
    id: 6,
    firstCharacter: "J",
    name: "Jim Lewis",
    review:
      "Jamel was diligent and responded quickly and professionally to all our design requests.",
  },
];

export interface ContactCardType {
  icon:IconType,
  title:string,
  data:string
}

export const contactCardData:ContactCardType[] = [
  {
    icon:HiOutlineMail, 
    title:"Email",
    data:"shakeelrehman501@gmail.com"
  },
  {
    icon:FiPhoneCall, 
    title:"Phone",
    data:"0300-0787595"
  },
  {
    icon:GrLocation, 
    title:"Location",
    data:"Barkat Market, Lahore"
  },
]