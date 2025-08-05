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
    { src: '/images/illustrate/1.png', format: 'vertical' },
    { src: '/images/illustrate/5.png', format: 'vertical' },
    { src: '/images/illustrate/6.png', format: 'vertical' },
    { src: '/images/illustrate/2.jpg', format: 'vertical' },
    { src: '/images/illustrate/7.png', format: 'vertical' },
    { src: '/images/illustrate/8.png', format: 'vertical' },
    { src: '/images/illustrate/9.jpg', format: 'vertical' },
    { src: '/images/illustrate/3.jpg', format: 'vertical' },
    { src: '/images/illustrate/4.png', format: 'vertical' },
    { src: '/images/illustrate/10.png', format: 'horizontal' },
    { src: '/images/illustrate/13.png', format: 'horizontal' },
    { src: '/images/illustrate/11.png', format: 'horizontal' },
    { src: '/images/illustrate/12.png', format: 'horizontal' },
];

export default function Page() {

    return (
        <main>
        <Gallery images={images} />
        </main>
    );
}