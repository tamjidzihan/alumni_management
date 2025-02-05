import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useGallery } from "../hooks/useGallery";



const PhotoGallery: React.FC = () => {
    const [photoIndex, setPhotoIndex] = useState<number | null>(null);
    const { allImage } = useGallery()

    return (
        <div className="container mx-auto my-15 p-4" id="gallery">
            <h2 className="text-3xl font-bold text-center mb-12">Photo Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-7">
                {allImage.map((image, idx) => (
                    <img
                        key={image.id}
                        src={image.url}
                        alt={`Gallery ${image.imageContext}`}
                        className="w-full h-full object-cover cursor-pointer rounded-lg shadow-md hover:opacity-75 transition"
                        onClick={() => setPhotoIndex(idx)}
                    />
                ))}
            </div>

            {photoIndex !== null && (
                <Lightbox
                    slides={allImage.map((image) => ({ src: image.url }))}
                    open={photoIndex !== null}
                    index={photoIndex}
                    close={() => setPhotoIndex(null)}
                />
            )}
        </div>
    );
};

export default PhotoGallery;