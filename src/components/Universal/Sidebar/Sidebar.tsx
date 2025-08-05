'use client'
import React, { useState } from 'react';
import '@/components/Universal/Sidebar/Sidebar.scss'

import DesignActive from '@/components/Universal/icon/tsx/DesignActive'
import DesignInactive from '@/components/Universal/icon/tsx/DesignInactive'
import CreateActive from '@/components/Universal/icon/tsx/CreateActive'
import CreateInactive from '@/components/Universal/icon/tsx/CreateInactive'
import IllustrateActive from '@/components/Universal/icon/tsx/IllustrateActive'
import IllustrateInactive from '@/components/Universal/icon/tsx/IllustrateInactive'
import InfoActive from '@/components/Universal/icon/tsx/InfoActive'
import InfoInactive from '@/components/Universal/icon/tsx/InfoInactive'

import "@fontsource/ubuntu/300.css";

import Link from 'next/link'
import { Flex } from 'antd';
import { usePathname } from 'next/navigation';


const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

return (
    <>
        <div className="menu-btn" onClick={() => setOpen(!open)}>
            {open ? '✖' : '☰'}
        </div>

        <div className={`sidebar ${open ? 'open' : 'closed'}`}>
            <Flex vertical gap={56}>
                <Link href="/" className="home" >
                    <img className="homeIcon" src="/icons/home.png" alt="Главная" />
                    {open && <span>Elleipsis</span>}
                </Link>
                <Link href="/design" className="first" >
                    {pathname === "/design" ? <DesignActive /> : <DesignInactive />}
                    {open && <span>Дизайн</span>}
                </Link>
                <Link href="/create" className="nav-link">
                    {pathname === "/create" ? <CreateActive /> : <CreateInactive />}
                    {open && <span>Разработка</span>}
                </Link>
               <Link href="/illustrate" className="nav-link">
                   {pathname === "/illustrate" ? <IllustrateActive /> : <IllustrateInactive />}
                   {open && <span>Иллюстрация</span>}
                </Link>
                <Link href="/info" className="nav-link">
                    {pathname === "/info" ? <InfoActive /> : <InfoInactive />}
                    {open && <span>Обо мне</span>}
                </Link>
            </Flex>
        </div>
    </>
);
};

export default Sidebar;