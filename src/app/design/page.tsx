'use client';

import React from "react";
import Sidebar from '@/components/Universal/Sidebar/Sidebar';
import Text from '@/components/Universal/Text/Text';
import '@fontsource/ubuntu';
import Tabs from "@/components/Universal/Tabs/Tabs";
import GalleryModal from "@/components/Universal/GalleryModal/GalleryModal";
import InProgress from "@/app/inProgress/page";
import ImageFlipbook from "@/components/Universal/ImageFlipbook/ImageFlipbook";

const blocksData1 = [
    {
        id: 1,
        coverImage: "/images/design/UX/1/1.png",
        images: ["/images/design/UX/1/1.png", "/images/design/UX/1/2.png", "/images/design/UX/1/3.png", "/images/design/UX/1/4.png", "/images/design/UX/1/5.png", "/images/design/UX/1/6.png"],

    },
    {
        id: 2,
        coverImage: "/images/design/UX/2/1.png",
        images: ["/images/design/UX/2/1.png", "/images/design/UX/2/2.png", "/images/design/UX/2/3.png", "/images/design/UX/2/4.png", "/images/design/UX/2/5.png"],

    },
    {
        id: 3,
        coverImage: "/images/design/UX/3/1.png",
        images: ["/images/design/UX/3/1.png", "/images/design/UX/3/2.png", "/images/design/UX/3/3.png", "/images/design/UX/3/4.png", "/images/design/UX/3/5.png", "/images/design/UX/3/6.png", "/images/design/UX/3/7.png", "/images/design/UX/3/8.png", "/images/design/UX/3/9.png", "/images/design/UX/3/10.png", "/images/design/UX/3/11.png", "/images/design/UX/3/12.png", "/images/design/UX/3/13.png", "/images/design/UX/3/14.png", "/images/design/UX/3/15.png", "/images/design/UX/3/16.png", "/images/design/UX/3/17.png"],

    },
    {
        id: 4,
        coverImage: "/images/design/UX/4/1.png",
        images: ["/images/design/UX/4/1.png", "/images/design/UX/4/2.png", "/images/design/UX/4/3.png", "/images/design/UX/4/4.png"],

    },
    {
        id: 5,
        coverImage: "/images/design/UX/5/1.png",
        images: ["/images/design/UX/5/1.png", "/images/design/UX/5/2.png", "/images/design/UX/5/3.png", "/images/design/UX/5/4.png", "/images/design/UX/5/5.png", "/images/design/UX/5/6.png", "/images/design/UX/5/7.png", "/images/design/UX/5/8.png" ],

    },
];

const blocksData2 = [
    {
        id: 1,
        coverImage: "/images/design/Industrial/1/1.png",
        images: ["/images/design/Industrial/1/2.png", "/images/design/Industrial/1/3.png"],

    },
    {
        id: 4,
        coverImage: "/images/design/Industrial/4/1.png",
        images: ["/images/design/Industrial/4/2.png", "/images/design/Industrial/4/3.png"],

    },
    {
        id: 5,
        coverImage: "/images/design/Industrial/5/1.png",
        images: ["/images/design/Industrial/5/2.png", "/images/design/Industrial/5/3.png"],

    },
    {
        id: 3,
        coverImage: "/images/design/Industrial/3/1.png",
        images: ["/images/design/Industrial/3/2.png", "/images/design/Industrial/3/3.png", "/images/design/Industrial/3/4.png", "/images/design/Industrial/3/5.png"],

    },
    {
        id: 6,
        coverImage: "/images/design/Industrial/6/1.png",
        images: ["/images/design/Industrial/6/2.png", "/images/design/Industrial/6/3.png"],

    },
    {
        id: 2,
        coverImage: "/images/design/Industrial/2/1.png",
        images: ["/images/design/Industrial/2/2.png", "/images/design/Industrial/2/3.png"],

    },
    {
        id: 7,
        coverImage: "/images/design/Industrial/7/1.png",
        images: ["/images/design/Industrial/7/2.png", "/images/design/Industrial/7/3.png"],

    },
    {
        id: 8,
        coverImage: "/images/design/Industrial/8/1.png",
        images: ["/images/design/Industrial/8/2.png", "/images/design/Industrial/8/3.png"],

    },
    {
        id: 9,
        coverImage: "/images/design/Industrial/9/1.png",
        images: ["/images/design/Industrial/9/2.png", "/images/design/Industrial/9/3.png", "/images/design/Industrial/9/4.jpg"],

    },
];

    const imagesMagazine = [
        "/images/design/grafic/1.png", "/images/design/grafic/2.png", "/images/design/grafic/3.png",
        "/images/design/grafic/4.png", "/images/design/grafic/5.png", "/images/design/grafic/6.png", "/images/design/grafic/7.png",
        "/images/design/grafic/8.png", "/images/design/grafic/9.png", "/images/design/grafic/10.png", "/images/design/grafic/11.png",
        "/images/design/grafic/12.png", "/images/design/grafic/13.png", "/images/design/grafic/14.png", "/images/design/grafic/15.png",
        "/images/design/grafic/16.png", "/images/design/grafic/17.png", "/images/design/grafic/18.png", "/images/design/grafic/19.png",
        "/images/design/grafic/20.png", "/images/design/grafic/21.png", "/images/design/grafic/22.png", "/images/design/grafic/23.png",
        "/images/design/grafic/24.png", "/images/design/grafic/25.png", "/images/design/grafic/26.png", "/images/design/grafic/27.png",
        "/images/design/grafic/28.png", "/images/design/grafic/29.png", "/images/design/grafic/30.png", "/images/design/grafic/31.png",
        "/images/design/grafic/32.png", "/images/design/grafic/33.png", "/images/design/grafic/34.png", "/images/design/grafic/35.png",
        "/images/design/grafic/36.png", "/images/design/grafic/37.png", "/images/design/grafic/38.png", "/images/design/grafic/39.png",
        "/images/design/grafic/40.png", "/images/design/grafic/41.png", "/images/design/grafic/42.png"
    ];

const tabsPage1 = [
    { label: "UX/XI дизайн", content: <div><GalleryModal blocks={blocksData1} /></div> },
    { label: "Промышленный дизайн", content: <div><GalleryModal blocks={blocksData2} /></div> },
    { label: "Графический дизайн", content: <div><ImageFlipbook images={imagesMagazine} width={452} height={700} /></div> },
    { label: "Геймдизайн", content: <div><InProgress /></div> },
    { label: "3Д-дизайн", content: <div><InProgress /></div> },
];

export default function Page() {
    return (
        <>
            <Tabs tabs={tabsPage1} />
        </>
    );
}