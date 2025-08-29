"use client";

import React, { useState } from "react";
import '@/components/Universal/ImageFlipbook/ImageFlipbook.scss'

type ImageFlipbookProps = {
    images: string[];
    width?: number;
    height?: number;
};

export default function ImageFlipbook({
                                          images,
                                          width = 300,
                                          height = 400,
                                      }: ImageFlipbookProps) {
    const [page, setPage] = useState(0);

    const goPrev = () => setPage((p) => (p > 0 ? p - 1 : p));
    const goNext = () => setPage((p) => (p < images.length - 1 ? p + 1 : p));

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        if (x < rect.width / 2) {
            goPrev();
        } else {
            goNext();
        }
    };

    return (
        <div
            onClick={onClick}
            style={{
                width,
                height,
                userSelect: "none",
                WebkitTapHighlightColor: "transparent",
                cursor: "pointer",
                border: "1px solid #ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                backgroundColor: "#fff",
            }}
        >
            <img
                src={images[page]}
                alt={`Page ${page + 1}`}
                style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    userSelect: "none",
                    width: "100%",
                    height: "100%",
                }}
                draggable={false}
            />
        </div>
    );
}
