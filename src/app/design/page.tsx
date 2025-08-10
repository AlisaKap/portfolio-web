'use client';

import React from "react";
import Sidebar from '@/components/Universal/Sidebar/Sidebar';
import Text from '@/components/Universal/Text/Text';
import '@fontsource/ubuntu';
import Tabs from "@/components/Universal/Tabs/Tabs";
import GalleryModal from "@/components/Universal/GalleryModal/GalleryModal";
import InProgress from "@/app/inProgress/page";

const blocksData1 = [
    {
        id: 1,
        coverImage: "/images/cover1.jpg",
        images: ["/images/pic1.jpg", "/images/pic2.jpg", "/images/pic3.jpg"],
        text: "Платформа развития навыков SkillUp",
    },
    {
        id: 2,
        coverImage: "/images/cover2.jpg",
        images: ["/images/pic4.jpg", "/images/pic5.jpg"],
        text: "ИИ-мониторинг зарплат",
    },
    {
        id: 3,
        coverImage: "/images/cover2.jpg",
        images: ["/images/pic4.jpg", "/images/pic5.jpg"],
        text: "Мобильное приложение для заказа еды Бар Банка",
    },
    {
        id: 4,
        coverImage: "/images/cover2.jpg",
        images: ["/images/pic4.jpg", "/images/pic5.jpg"],
        text: "Technical Service for Admin Staff",
    },
    {
        id: 5,
        coverImage: "/images/cover2.jpg",
        images: ["/images/pic4.jpg", "/images/pic5.jpg"],
        text: "Генератор кодов",
    },
];

const tabsPage1 = [
    { label: "Графический дизайн", content: <div><InProgress /></div> },
    { label: "Промышленный дизайн", content: <div>Информация о профиле</div> },
    { label: "UX/XI дизайн", content: <div><GalleryModal blocks={blocksData1} /></div> },
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