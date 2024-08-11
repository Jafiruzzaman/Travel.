export const navlinks = [
  {
    name: "home",
    path: "",
  },
  {
    name: "About us",
    path: "",
  },
  {
    name: "destination",
    path: "",
  },
  {
    name: "package",
    path: "",
  },
  {
    name: "contact",
    path: "",
  },
];
export const HeroFormData = [
  {
    title: "destination",
    input: "Maldives",
    type: "text",
  },
  {
    title: "date",
    type: "date",
    input: "select date",
  },
  {
    title: "people",
    type: "text",
    input: "how many peoples",
  },
];
import imageOne from "/public/travel/image-01.jpeg";
import imageTwo from "/public/travel/image-02.jpeg";
import imageThree from "/public/travel/image-03.jpeg";
import imageFour from "/public/travel/image-04.jpeg";

export const DestinationData = [
  {
    image: imageOne,
    title: "Istanbul,Turkey",
    price: "$750",
    rating: "",
  },
  {
    image: imageTwo,
    title: "sent martin,Bangladesh",
    price: "$640",
    rating: "",
  },
  {
    image: imageThree,
    title: "Sydney, Australia",
    price: "$1200",
    rating: "",
  },
  {
    image: imageFour,
    title: "Cox’s Bazar,Bangladesh",
    price: "$470",
    rating: "",
  },
];
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaBuilding } from "react-icons/fa6";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";

export const ServicesData = [
  {
    icon: <BiSolidPlaneAlt />,
    heading: "choose destination",
    paragraph:
      "Work with our travel experts to create a customized itinerary that perfectly matches",
  },
  {
    icon: <FaBuilding />,
    heading: "five star Hotel",
    paragraph:
      "enjoy the ultimate in comfort and elegance at our curated selection of five-star hotels.",
  },
  {
    icon: <HiGlobeAsiaAustralia />,
    heading: "air ticketing",
    paragraph:
      "enjoy the ultimate in comfort and elegance at our curated selection of five-star hotels.",
  },
];
import travelOne from "/public/travelType/image-01.jpg"
import travelTwo from "/public/travelType/image-02.jpg"
import travelThree from "/public/travelType/image-03.jpg"
export const travelData = [
  {
    id: "",
    image: travelOne,
    text: "Exploration",
  },
  {
    id: "",
    image: travelTwo,
    text: "Exploration",
  },
  {
    id: "",
    image: travelThree,
    text: "Exploration",
  },
];
