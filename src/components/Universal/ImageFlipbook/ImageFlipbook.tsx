"use client";

import React from "react";
import HTMLFlipBook from "react-pageflip";
import '@/components/Universal/ImageFlipbook/ImageFlipbook.scss'

type ImageFlipbookProps = {
    images: string[];
    width?: number;
    height?: number;
};

export default function ImageFlipbook({
                                          images,
                                          width = 600,
                                          height = 800,
                                      }: ImageFlipbookProps) {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <HTMLFlipBook
                width={width}
                height={height}
                minWidth={200}
                maxWidth={560}
                minHeight={300}
                maxHeight={700}
                size="stretch"
                startPage={0}
                showCover={true}
                drawShadow={true}
                flippingTime={1000}
                usePortrait={true}
                startZIndex={0}
                autoSize={true}
                maxShadowOpacity={0}
                mobileScrollSupport={false}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={30}
                showPageCorners={true}
                disableFlipByClick={false}
                className="flip-book"
            >
                <div className="page cover">
                    <img src={images[0]} alt="Обложка" />
                </div>

                {images.slice(1).map((src, index) => (
                    <div key={index} className="page">
                        <img src={src} alt={`Page ${index + 2}`} />
                    </div>
                ))}
            </HTMLFlipBook>
        </div>
    );
}