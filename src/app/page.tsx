import React from "react";
import Sidebar from '@/components/Universal/Sidebar/Sidebar';
import Text from '@/components/Universal/Text/Text';
import '@fontsource/ubuntu';
import '@/app/home.scss';
import localFont from "next/font/local";

const myFont = localFont({
    src: [
        {
            path: "./fonts/NAURYZREDKEDS.ttf",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-NAURYZREDKEDS"
});

export default function HomePage() {

    return (
        <main>
            <div className="background-container-home">
                <h1>CREATOR</h1>
                <h2 className={myFont.variable} style={{ fontFamily: "var(--font-NAURYZREDKEDS)" }}>
                    PORTFOLIO
                </h2>
                <div>2025</div>
            </div>
        </main>
    );
}