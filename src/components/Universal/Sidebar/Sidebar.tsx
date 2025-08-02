'use client'
import React, { useState } from 'react';
import '@/components/Universal/Sidebar/Sidebar.scss'
import Link from 'next/link'
import { Flex } from 'antd';

const Sidebar = () => {
    const [open, setOpen] = useState(false);

return (
    <>
        <div className="menu-btn" onClick={() => setOpen(!open)}>
            {open ? '✖' : '☰'}
        </div>

        <div className={`sidebar ${open ? 'open' : ''}`}>
            <Flex vertical gap={80}>
                <Link className="first" href="#">Дизайн</Link>
                <Link href="#">Разработка</Link>
               <Link href="#">Иллюстрация</Link>
                <Link href="#">Обо мне</Link>
            </Flex>
        </div>
    </>
);
};

export default Sidebar;