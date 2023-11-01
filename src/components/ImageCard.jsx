/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { GalleryContext } from '../contexts/GalleryContentProvider';


const ImageCard = ({ item }) => {
    const { selectedImages, setSelectedImages } = useContext(GalleryContext)
    const [hoverItem, setHoveredItem] = useState(null)

    const handleClick = (id) => {
        if (selectedImages.includes(id)) {
            const updatedSelectedImages = selectedImages.filter(i => i !== id)
            setSelectedImages(updatedSelectedImages)
        }
        else {
            setSelectedImages(current => [...current, id])
        }
    }

    console.log(selectedImages)

    return (
        <div onMouseOver={() => setHoveredItem(item?.id)} onMouseOut={() => setHoveredItem(null)} className={`${item?.id === 1 && "col-span-2 row-span-2"} border rounded-[10px] w-full h-full relative cursor-pointer`}>


            <img src={item?.image} alt="" className={`w-full h-full rounded-[10px] object-cover  `} />


            <input onClick={() => handleClick(item?.id)} type='checkbox' className={`checkbox h-[15px]  w-[15px] absolute top-3 left-3 cursor-pointer z-10 ${selectedImages.includes(item?.id) ? "opacity-100" : "opacity-0"} ease-in duration-500 ${hoverItem === item?.id && "opacity-100 "}`} />

            <div className={`absolute ${selectedImages?.includes(item?.id) ? "opacity-60" : "opacity-0"}  top-0 left-0 w-full h-full ${selectedImages.includes(item?.id) ? "bg-white" : "bg-black"} rounded-[10px] ${hoverItem === item?.id && !selectedImages.includes(item?.id) && "opacity-50 ease-in duration-500"}`}></div>

        </div >
    );
};

export default ImageCard;