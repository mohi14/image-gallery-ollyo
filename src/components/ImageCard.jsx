/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import image from "../assets/images/image-1.webp"

const ImageCard = ({ item }) => {
    return (
        <div className={`${item === 1 && "col-span-2 row-span-2"} border rounded-[10px]`}>
            <img src={image} alt="" className='object-contain rounded-[10px]' />
        </div>
    );
};

export default ImageCard;