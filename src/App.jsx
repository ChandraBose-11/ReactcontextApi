import React, { createContext, useState } from "react";
import Card from "./Components/Card";
import "./App.css";

export const mycontext = createContext("");
const App = () => {
  let Products = [
    {
      id: 1,
      title: "Apple iPhone 11",
      description:
        "The iPhone 11 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle..",
      price:549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: ["https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-2.jpg"],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "It was the first iPhone to use an OLED screen, branded as a Super Retina HD display. The home button's fingerprint sensor was replaced with a new type of authentication called Face ID, which uses sensors to scan the user's face to unlock the device.",
      price:899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://www.kindpng.com/picc/m/503-5031097_iphone-x-pro-max-hd-png-download.png",
      ],
    },
    {
      id: 3,
      title: "Samsung S24 Ultra",
      description:
        "The Galaxy S24 Ultra not only packs far more powerful hardware—including a better sensor, sharper lens and 100x Space Zoom—but also leverages the state-of-the-art ProVisual engine with AI optimizations that will improve your ability to shoot, edit and share the most beautiful and memorable photos possible",
      price:1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: [
       "https://m.media-amazon.com/images/I/41fCDR6pjpL._SX300_SY300_QL70_FMwebp_.jpg",
      ],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price:280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: ["https://m.media-amazon.com/images/I/71Hy+RrYQOL._SL1500_.jpg"],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price:499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://m.media-amazon.com/images/I/61mweDjNvZL._AC_SL1000_.jpg",
      ],
    },
  ];
  const [Data, SetData] = useState(Products);
  return (
    <div>
      <mycontext.Provider value={[Data, SetData]}>
        <Card />
      </mycontext.Provider>
    </div>
  );
};

export default App;
