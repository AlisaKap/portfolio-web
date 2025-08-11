import React from "react";
import Sidebar from '@/components/Universal/Sidebar/Sidebar';
import Text from '@/components/Universal/Text/Text';
import '@fontsource/ubuntu';
import '@/app/illustrate/illustrate-page.scss';
import Gallery from "@/components/Universal/Gallery/Gallery";

type ImageType = {
    src: string;
    alt?: string;
    format?: 'square' | 'vertical' | 'horizontal';
};

const images: ImageType[] = [
    { src: '/images/Illustrate/1.png', format: 'vertical' },
    { src: '/images/Illustrate/5.png', format: 'vertical' },
    { src: '/images/Illustrate/6.png', format: 'vertical' },
    { src: '/images/Illustrate/2.jpg', format: 'vertical' },
    { src: '/images/Illustrate/7.png', format: 'vertical' },
    { src: '/images/Illustrate/8.png', format: 'vertical' },
    { src: '/images/Illustrate/9.jpg', format: 'vertical' },
    { src: '/images/Illustrate/3.jpg', format: 'vertical' },
    { src: '/images/Illustrate/4.png', format: 'vertical' },
    { src: '/images/Illustrate/10.png', format: 'horizontal' },
    { src: '/images/Illustrate/13.png', format: 'horizontal' },
    { src: '/images/Illustrate/11.png', format: 'horizontal' },
    { src: '/images/Illustrate/12.png', format: 'horizontal' },
];

export default function Page() {

    return (
        <main>
            <div className="illustrate-page">
                <img src='/gifs/platypus.gif' alt="Platypus" />
            </div>
            <Gallery images={images} />
        </main>
    );
}