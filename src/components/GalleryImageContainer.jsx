/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from 'react';
import ImageCard from './ImageCard';
import { GalleryContext } from '../contexts/GalleryContentProvider';
import { BiImageAdd } from "react-icons/bi";

const GalleryImageContainer = () => {
    const { allImages, setAllImages } = useContext(GalleryContext)

    const dragItem = useRef(null);
    const dragOverItem = useRef(null);

    const handleSort = (id) => {
        const newAllImages = [...allImages];

        const draggedItemContent = newAllImages.splice(dragItem.current, 1)[0];

        newAllImages.splice(dragOverItem.current, 0, draggedItemContent);

        dragItem.current = null;
        dragOverItem.current = null;

        setAllImages(newAllImages)
    };
    return (
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-5 px-[30px] py-[20px]'>
            {allImages.map((item, idx) => <ImageCard item={item} index={idx} key={idx} dragItem={dragItem}
                dragOverItem={dragOverItem} handleSort={handleSort} />)}
            <button className='flex flex-col items-center justify-center bg-[#fafbfb] rounded-[10px] gap-[15px] border-dashed border-2'>
                <BiImageAdd className='text-[32px]' />
                <p className='text-[18px] font-[500]'>Add Images</p>
            </button>
        </div>
    );
};

export default GalleryImageContainer;