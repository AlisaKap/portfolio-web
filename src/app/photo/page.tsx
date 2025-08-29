'use client';
import React from "react";
import './SlideShowPage.scss';

export default function SlideShowPage() {
    const images = [
        '/images/photo/1.png',
        '/images/photo/2.png',
        '/images/photo/3.png',
        '/images/photo/4.png',
        '/images/photo/5.png',
        '/images/photo/6.png',
        '/images/photo/7.png'
    ];

    return (
        <div className="slideshow-page">
            {images.map((src, index) => (
                <img key={index} src={src} alt={`Slide ${index}`} className="slide-image" />
            ))}
        </div>
    );
}
