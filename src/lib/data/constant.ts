import { IconType } from "react-icons";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { CheckCircle2, Shield, Headphones, DollarSign, Award, Clock, Car } from 'lucide-react';

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
    icon: Car,
    title: 'Professional Drivers',
    description: 'Travel with highly experienced and professional drivers for a safe and comfortable journey.',
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
    firstCharacter: "J",
    name: "James Wilson",
    review:
      "Excellent service from start to finish. The car was spotless, well-maintained, and exactly as described. The booking process was smooth, and the staff was extremely professional.",
  },
  {
    id: 2,
    firstCharacter: "S",
    name: "Sarah Johnson",
    review:
      "Outstanding experience. Their professional drivers and premium vehicles made our journey comfortable and stress-free. I’ll definitely use their service again.",
  },
  {
    id: 3,
    firstCharacter: "Z",
    name: "Zainab Malik",
    review:
      "Booking was super smooth via WhatsApp, and the car was clean, comfortable, and exactly what I needed.",
  },
  {
    id: 4,
    firstCharacter: "M",
    name: "Mark Kole",
    review:
      "Best luxury car rental service in Lahore, hands down. Their rates are very competitive compared to market standards, and their 24/7 customer support team is incredibly responsive and helpful.",
  },
  {
    id: 5,
    firstCharacter: "E",
    name: "Emily Davis",
    review:
      "Highly recommended. Great prices and very reliable service.",
  },
  {
    id: 6,
    firstCharacter: "J",
    name: "Jim Lewis",
    review:
      "Fantastic experience from booking to return. The car was in excellent condition, drove perfectly, and the entire process was quick and seamless.",
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
    data:"soukatali5@gmail.com"
  },
  {
    icon:FiPhoneCall, 
    title:"Phone",
    data:"0335-4611570"
  },
  {
    icon:GrLocation, 
    title:"Location",
    data:"153-H, Commercial Zone, Phase 1, DHA Lahore Cantt, Lahore, Pakistan"
  },
]