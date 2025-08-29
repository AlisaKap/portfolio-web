'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./RotatedCheck.scss";

type Props = {
    angle?: number;
    initialY?: string | number;
    content: React.ReactNode;
    delay?: number;
    positionStyle?: React.CSSProperties;
    backgroundColor?: string;
    height?: number | string;
    responsivePosition?: (width: number) => React.CSSProperties;
};

export default function RotatedCheck({
                                         angle = 0,
                                         initialY = "100vh",
                                         content,
                                         delay = 0,
                                         positionStyle = {},
                                         backgroundColor = "#fff",
                                         height,
                                         responsivePosition,
                                     }: Props) {
    const [hasMounted, setHasMounted] = useState(false);
    const [currentPosition, setCurrentPosition] = useState<React.CSSProperties>(positionStyle);

    // Монтируем компонент
    useEffect(() => {
        setHasMounted(true);
    }, []);

    // Обновление позиции при ресайзе
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const newPos = responsivePosition ? responsivePosition(width) : positionStyle;

            // Проверяем, изменилось ли положение, чтобы избежать бесконечного рендера
            setCurrentPosition(prev => {
                if (
                    prev.top === newPos.top &&
                    prev.left === newPos.left &&
                    prev.right === newPos.right &&
                    prev.bottom === newPos.bottom
                ) {
                    return prev;
                }
                return newPos;
            });
        };

        handleResize(); // задаем позицию сразу
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [positionStyle, responsivePosition]);

    return (
        <motion.div
            initial={!hasMounted ? { y: initialY, rotate: angle, opacity: 1 } : false}
            animate={{ y: 0, rotate: angle, opacity: 1 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.8, delay }}
            style={{ transform: `rotate(${angle}deg)`, ...currentPosition }}
            className="rotated-container"
        >
            <div className="check-content" style={{ backgroundColor, height }}>
                {content}
            </div>
        </motion.div>
    );
}
