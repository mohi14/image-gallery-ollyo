/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import ImageCard from './ImageCard';
import { GalleryContext } from '../contexts/GalleryContentProvider';

const GalleryImageContainer = () => {
    const { allImages } = useContext(GalleryContext)
    return (
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-5 px-[30px] py-[20px]'>
            {allImages.map((item, idx) => <ImageCard item={item} index={idx} key={idx} />)}
        </div>
    );
};

export default GalleryImageContainer;