"use client";
import { useState } from 'react';
import { BsBoxArrowInRight, BsBoxArrowInLeft } from "react-icons/bs";
import Link from 'next/link';

interface MenuItem {
    title: string;
    icon: JSX.Element;
    link?: string;
    subItems?: { title: string; link: string }[];
}

interface SidebarProps {
    menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(true);

    const toggleSubMenu = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`h-screen bg-blue-600 text-white flex flex-col p-4 transition-width duration-300 ${isOpen ? 'w-64' : 'w-0'} md:block md:${isOpen ? 'w-64' : 'w-20'} ${isOpen ? 'block' : 'hidden'}`}>
                <button 
                    className="text-yellow mb-4 md-96"
                    onClick={toggleSidebar}
                >
                    {isOpen ? <BsBoxArrowInLeft /> : <BsBoxArrowInRight />}
                </button>

                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link || '#'}>
                                <button
                                    onClick={() => toggleSubMenu(index)}
                                    className={`w-full text-left p-2 hover:bg-blue-500 flex justify-between items-center transition-all duration-300 ${!isOpen ? 'justify-center' : ''}`}
                                >
                                    <div className="flex items-center space-x-2">
                                        <span>{item.icon}</span>
                                        {isOpen && <span>{item.title}</span>}
                                    </div>

                                    {item.subItems && isOpen && (
                                        <span>{activeIndex === index ? '-' : '+'}</span>
                                    )}
                                </button>
                            </Link>

                            {item.subItems && activeIndex === index && isOpen && (
                                <ul className="pl-8">
                                    {item.subItems.map((subItem, subIndex) => (
                                        <li key={subIndex} className="p-2 hover:bg-blue-400">
                                            <Link href={subItem.link}>
                                                <button>{subItem.title}</button>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <button
                className={`fixed top-4 left-4 z-50 text-white md:hidden ${isOpen ? 'hidden' : 'block'}`}
                onClick={toggleSidebar}
            >
                <BsBoxArrowInRight />
            </button>
        </>
    );
};

export default Sidebar;
