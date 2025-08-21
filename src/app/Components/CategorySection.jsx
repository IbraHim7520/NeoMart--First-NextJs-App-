import React from 'react';
import vegCat from "../../../images/cat-1.png"
import fastfoodCat from "../../../images/cat-13.png"
import fruitCat from "../../../images/cat-2.png"
import snacksCat from "../../../images/cat-3.png"
import coffeeCat from "../../../images/cat-14.png"
import Image from 'next/image';
const CategorySection = () => {
    const Categories = [
        {
            id: 1,
            Image: vegCat,
            Title: "Vegitables",
            bg: "#F2FCE4"
        },
        {
            id: 2,
            Image: fastfoodCat,
            Title: "Foods",
            bg: "#FFF3FF"
        },
        {
            id: 3,
            Image: fruitCat,
            Title: "Fruits",
            bg: "#FEEFEA"
        },
        {
            id: 4,
            Image: snacksCat,
            Title: "Snacks",
            bg: "#F2FCE4"
        },
        {
            id: 5,
            Title: "Coffee",
            Image: coffeeCat,
            bg: "#FFF3FF"
        },
    ]
    return (
        <div className='mx-auto mt-8 md:mt-12  px-3 md:px-6 lg:px-12 xl:px-16'>
            <div className='flex justify-between items-center'>
                <h1 className='text-gray-700 text-xl lg:text-2xl xl:text-3xl font-semibold'>Featured Categories</h1>
            </div>

            <div className='flex mt-5 justify-between
             items-center gap-4 '>
                 {Categories.map((category) => (
          <div
            key={category.id} // always add a key when mapping
            className="p-2 flex flex-col w-36 justify-center items-center space-y-2"
            style={{ backgroundColor: category.bg, borderRadius: "12px" }}
          >
            <Image
              src={category.Image}
              alt={category.Title}
              width={80}      // adjust size as needed
              height={80}
            />
            <p className="text-gray-700 font-medium">{category.Title}</p>
          </div>
        ))}
            </div>
        </div>
    );
};

export default CategorySection;