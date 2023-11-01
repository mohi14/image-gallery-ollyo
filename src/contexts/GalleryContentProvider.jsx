/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GalleryContext = createContext()

const GalleryContentProvider = ({ children }) => {
    const [selectedImages, setSelectedImages] = useState([])
    const info = {
        selectedImages,
        setSelectedImages
    }
    return <GalleryContext.Provider value={info}>{children}</GalleryContext.Provider>
}

export default GalleryContentProvider