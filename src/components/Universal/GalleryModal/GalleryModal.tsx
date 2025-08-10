import React, { useState, useEffect } from "react";
import '@/components/Universal/GalleryModal/GalleryModal.scss'

type Block = {
    id: string | number;
    coverImage: string;
    images: string[];
    text: string;
};

type GalleryModalProps = {
    blocks: Block[];
};

export default function GalleryModal({ blocks }: GalleryModalProps) {
    const [activeBlock, setActiveBlock] = useState<Block | null>(null);

    useEffect(() => {
        if (activeBlock) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [activeBlock]);

    return (
        <div className="blocks" >
            <div className="blocks-container" style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                {blocks.map((block) => (
                    <div
                        key={block.id}
                        style={{ cursor: "pointer", width: 200, border: "1px solid #ccc", padding: 8, boxSizing: "border-box" }}
                        onClick={() => setActiveBlock(block)}
                    >
                        <img src={block.coverImage} alt="" style={{ width: "100%", display: "block", objectFit: "cover"  }} />
                        <p>{block.text}</p>
                    </div>
                ))}
            </div>

            {activeBlock && (
                <div
                    className="modal-overlay"
                    onClick={() => setActiveBlock(null)}
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {activeBlock.images.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt=""
                                style={{ width: "100%", objectFit: "contain" }}
                            />
                        ))}
                        <button
                            onClick={() => setActiveBlock(null)}
                            style={{
                            }}
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
