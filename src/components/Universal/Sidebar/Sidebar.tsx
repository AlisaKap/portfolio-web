import React, { useState } from 'react';
import './Sidebar.scss'

const Sidebar = () => {
    const [open, setOpen] = useState(false);

return (
    <>


        <div className={`sidebar ${open ? 'open' : ''}`}>
            <ul>

                <li className="first"><a href="#">Дизайн</a></li>
                <li><a href="#">Разработка</a></li>
                <li><a href="#">Иллюстрация</a></li>
                <li><a href="#">Обо мне</a></li>
            </ul>
        </div>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
            {open ? '✖' : '☰'}
        </button>
    </>
);
};

export default Sidebar;