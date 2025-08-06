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
};

export default function RotatedCheck( {
    angle = 0,
        initialY = "100vh",
        content,
        delay = 0,
        positionStyle = {},
       backgroundColor = "#fff",
    }: Props) {

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return (

        <motion.div
            initial={!hasMounted ?{ y: initialY, rotate: angle, opacity: 1 }: false}
            animate={{ y: 0, rotate: angle, opacity: 1 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.8, delay,
            }}
            style={{
                transform: `rotate(${angle}deg)`,
                ...positionStyle,
            }}
            className="rotated-container"
        >
            <div
                className="check-content"
                style={{ backgroundColor }}
            >
                {content}
            </div>
        </motion.div>

    );
}