"use client";
import { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from "./helper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
    IconAccount,
    IconArrowNext,
    IconClose,
    IconHeart,
    IconMenu,
    IconSearch,
    IconShoppingCart,
    Logo
} from "../../assets/index";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
    const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSubmenu = (index: number) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

            <div className="flex items-center justify-between px-4 py-3 md:px-8">

                {/* Mobile menu button */}
                <button className="flex items-center md:hidden cursor-pointer"
                    onClick={toggleMobileMenu}>
                    <IconMenu />
                </button>
                {/* Logo */}
                <Link href="/">
                    <Image src={Logo}
                        alt="Logo"
                        width={120}
                        height={40}
                        className="flex items-center"
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center align-center space-x-6">
                    {navItems.map((item, index) => (
                        <div key={index} className="relative group">
                            <Link href={item.path} className="text-gray-700 hover:text-black flex items-center space-x-1">
                                <span>{item.title}</span>
                                {item.submenu && (
                                    <IconArrowNext className="w-4 h-4 text-gray-500 transition-transform duration-300 group-hover:rotate-180" />
                                )}
                            </Link>
                            {item.submenu && (
                                <div className="absolute left-0 top-full mt-2 w-57 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col">
                                    {item.submenu.map((sub, subIndex) => (
                                        <Link key={subIndex} href={sub.path} className="block px-4 py-2 whitespace-nowrap text-gray-700 hover:bg-gray-100">
                                            {sub.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Icons */}
                <div className="flex space-x-4">
                    <Link href="/">
                        <IconAccount />
                    </Link>
                    <Link href="/">
                        <IconSearch />
                    </Link>
                    <Link href="/">
                        <IconHeart />
                    </Link>
                    <Link href="/">
                        <IconShoppingCart />
                    </Link>
                </div>

            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        // className="fixed inset-0 bg-white flex flex-col p-6 md:hidden"
                        className="fixed top-0 left-0 w-2/3 h-full bg-yellow-200 flex flex-col p-6 md:hidden"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.3 }}
                    >
                        <button className="self-end mb-4"
                            onClick={toggleMobileMenu}>
                            <IconClose />
                        </button>
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-center">
                                        <Link href={item.path} className="text-lg text-gray-800">
                                            {item.title}
                                        </Link>
                                        {item.submenu && (
                                            <button onClick={() => toggleSubmenu(index)}>
                                                <IconArrowNext
                                                    className={cn(
                                                        "w-5 h-5 text-gray-600 transition-transform duration-300",
                                                        openSubmenu === index && "rotate-180"
                                                    )}
                                                />
                                            </button>
                                        )}
                                    </div>
                                    <AnimatePresence>
                                        {openSubmenu === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="ml-4 mt-2 space-y-2"
                                            >
                                                {item.submenu?.map((sub, subIndex) => (
                                                    <Link key={subIndex} href={sub.path} className="block text-gray-700">
                                                        {sub.title}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

        </header >
    );
};

export default Header;
