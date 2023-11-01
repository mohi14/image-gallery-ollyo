/* eslint-disable no-unused-vars */
import React from 'react';
import ImageCard from './ImageCard';
import { images } from '../utils/utils';

const GalleryImageContainer = () => {
    return (
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-5 px-[30px] py-[20px]'>
            {images.map((item, idx) => <ImageCard item={item} key={idx} />)}
        </div>
    );
};

export default GalleryImageContainer;