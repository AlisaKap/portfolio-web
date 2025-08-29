'use client'

import React, { useState, useEffect } from 'react';
import '@/components/Universal/Sidebar/Sidebar.scss';

import DesignActive from '@/components/Universal/icon/tsx/DesignActive';
import DesignInactive from '@/components/Universal/icon/tsx/DesignInactive';
import MiniDesignActive from '@/components/Universal/icon/tsx/MiniDesignActive';
import MiniDesignInactive from '@/components/Universal/icon/tsx/MiniDesignInactive';

import CreateActive from '@/components/Universal/icon/tsx/CreateActive';
import CreateInactive from '@/components/Universal/icon/tsx/CreateInactive';
import MiniCreateActive from '@/components/Universal/icon/tsx/MiniCreateActive';
import MiniCreateInactive from '@/components/Universal/icon/tsx/MiniCreateInactive';

import IllustrateActive from '@/components/Universal/icon/tsx/IllustrateActive';
import IllustrateInactive from '@/components/Universal/icon/tsx/IllustrateInactive';
import MiniIllustrateActive from '@/components/Universal/icon/tsx/MiniIllustrateActive';
import MiniIllustrateInactive from '@/components/Universal/icon/tsx/MiniIllustrateInactive';

import InfoActive from '@/components/Universal/icon/tsx/InfoActive';
import InfoInactive from '@/components/Universal/icon/tsx/InfoInactive';
import MiniInfoActive from '@/components/Universal/icon/tsx/MiniInfoActive';
import MiniInfoInactive from '@/components/Universal/icon/tsx/MiniInfoInactive';

import PhotoActive from "@/components/Universal/icon/tsx/PhotoActive";
import PhotoInactive from "@/components/Universal/icon/tsx/PhotoInactive";
import MiniPhotoActive from "@/components/Universal/icon/tsx/MiniPhotoActive";
import MiniPhotoInactive from "@/components/Universal/icon/tsx/MiniPhotoInactive";

import "@fontsource/ubuntu/300.css";
import Link from 'next/link';
import { Flex } from 'antd';
import { usePathname } from 'next/navigation';

interface SidebarIconProps {
    isActive: boolean;
    isOpen: boolean;
    ActiveIcon: React.ComponentType;
    InactiveIcon: React.ComponentType;
    MiniActiveIcon: React.ComponentType;
    MiniInactiveIcon: React.ComponentType;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({
                                                     isActive,
                                                     isOpen,
                                                     ActiveIcon,
                                                     InactiveIcon,
                                                     MiniActiveIcon,
                                                     MiniInactiveIcon,
                                                 }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if (isMobile) return isActive ? <MiniActiveIcon /> : <MiniInactiveIcon />;

    if (isOpen) return isActive ? <MiniActiveIcon /> : <MiniInactiveIcon />;
    return isActive ? <ActiveIcon /> : <InactiveIcon />;
};

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const [gap, setGap] = useState(12);
    const pathname = usePathname();

    // Один эффект для gap и состояния open
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            // Настройка gap
            if (width <= 480) setGap(4);
            else if (width <= 768) setGap(6);
            else if (width <= 1024) setGap(2);
            else setGap(12);

            // Автоматическое открытие/закрытие
            setOpen(width <= 1024);
        };

        handleResize(); // вызвать сразу при монтировании
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Реакция на смену страницы
    useEffect(() => {
        if (window.innerWidth > 768 && open) {
            setOpen(false); // закрыть только если реально открыто
        }
    }, [pathname]);

    return (
        <>
            <div
                className={`sidebar-overlay ${open ? "visible" : ""}`}
                onClick={() => setOpen(false)}
            />

            <div className="menu-btn" onClick={() => setOpen(!open)}>
                {open ? '✖' : '☰'}
            </div>

            <div className={`sidebar ${open ? "open" : "closed"}`}>
                <Flex vertical gap={gap}>
                    <Link href="/" className="home">
                        <img className="homeIcon" src="/icons/home.png" alt="Главная" />
                    </Link>

                    <Link href="/design" className="first">
                        <SidebarIcon
                            isActive={pathname === "/design"}
                            isOpen={open}
                            ActiveIcon={DesignActive}
                            InactiveIcon={DesignInactive}
                            MiniActiveIcon={MiniDesignActive}
                            MiniInactiveIcon={MiniDesignInactive}
                        />
                        {open && <span>Дизайн</span>}
                    </Link>

                    <Link href="/create" className="nav-link">
                        <SidebarIcon
                            isActive={pathname === "/create"}
                            isOpen={open}
                            ActiveIcon={CreateActive}
                            InactiveIcon={CreateInactive}
                            MiniActiveIcon={MiniCreateActive}
                            MiniInactiveIcon={MiniCreateInactive}
                        />
                        {open && <span>Разработка</span>}
                    </Link>

                    <Link href="/illustrate" className="nav-link">
                        <SidebarIcon
                            isActive={pathname === "/illustrate"}
                            isOpen={open}
                            ActiveIcon={IllustrateActive}
                            InactiveIcon={IllustrateInactive}
                            MiniActiveIcon={MiniIllustrateActive}
                            MiniInactiveIcon={MiniIllustrateInactive}
                        />
                        {open && <span>Иллюстрация</span>}
                    </Link>

                    <Link href="/photo" className="nav-link">
                        <SidebarIcon
                            isActive={pathname === "/photo"}
                            isOpen={open}
                            ActiveIcon={PhotoActive}
                            InactiveIcon={PhotoInactive}
                            MiniActiveIcon={MiniPhotoActive}
                            MiniInactiveIcon={MiniPhotoInactive}
                        />
                        {open && <span>Фото</span>}
                    </Link>

                    <Link href="/info" className="nav-link">
                        <SidebarIcon
                            isActive={pathname === "/info"}
                            isOpen={open}
                            ActiveIcon={InfoActive}
                            InactiveIcon={InfoInactive}
                            MiniActiveIcon={MiniInfoActive}
                            MiniInactiveIcon={MiniInfoInactive}
                        />
                        {open && <span>Обо мне</span>}
                    </Link>
                </Flex>
            </div>
        </>
    );
};

export default Sidebar;
