'use client';

import React, { useState } from 'react';
import styles from './Gallery.module.scss';
import ImageModal from './ImageModal';

type ImageType = {
    src: string;
    alt?: string;
    format?: 'square' | 'vertical' | 'horizontal';
};

type Props = {
    images: ImageType[];
};

const Gallery = ({ images}: Props) => {
    const [activeImage, setActiveImage] = useState<string | null>(null);

    const openModal = (src: string) => setActiveImage(src);
    const closeModal = () => setActiveImage(null);

    return (
        <div className={`${styles.gallery}`}>
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img.src}
                    alt={img.alt || ''}
                    className={styles[img.format || 'square']}
                    onClick={() => openModal(img.src)}
                />
            ))}

            {activeImage && <ImageModal src={activeImage} onClose={closeModal} />}
        </div>
    );
};

export default Gallery;