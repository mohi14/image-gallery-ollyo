/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';


const ImageCard = ({ item }) => {
    const [hoverItem, setHoveredItem] = useState(null)

    return (
        <div onMouseOver={() => setHoveredItem(item?.id)} onMouseOut={() => setHoveredItem(null)} className={`${item?.id === 1 && "col-span-2 row-span-2"} border rounded-[10px] w-full h-full relative cursor-pointer`}>
            <img src={item?.image} alt="" className={`w-full h-full rounded-[10px] object-cover  `} />
            <input type='checkbox' className='checkbox h-[15px]  w-[15px] absolute top-3 left-3 cursor-pointer z-10' />
            <div className={`absolute opacity-0 ease-in duration-500 top-0 left-0 w-full h-full bg-black rounded-[10px] ${hoverItem === item?.id && "opacity-50 "}`}></div>
        </div >
    );
};

export default ImageCard;