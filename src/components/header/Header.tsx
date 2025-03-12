'use client';
import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import Link from 'next/link';
import {navItems, getMenuIcon, menuIcons} from './helper';
import {cn} from '@/lib/utils';
import {IconArrowNext, IconClose, IconMenu, IconSearch} from '@/assets';
import SearchBar from '../ui/SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleSubmenu = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (term: string) => {
    console.log('Search term:', term);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Mobile menu button */}
        <button
          className="flex items-center md:hidden cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <IconMenu />
        </button>
        {/* Logo */}
        <div className="flex-1 flex justify-center md:flex-none md:justify-start font-display text-3xl font-bold">
          Zyclent
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center align-center space-x-6">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.path}
                className="text-gray-700 hover:text-black flex items-center space-x-1 text-sm"
              >
                <span>{item.title}</span>
                {item.submenu && (
                  <IconArrowNext className="w-4 h-4 text-gray-500 transition-transform duration-300 group-hover:rotate-180" />
                )}
              </Link>
              {item.submenu && (
                <div className="absolute left-0 top-full mt-2 w-57 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col">
                  {item.submenu.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sub.path}
                      className="block px-4 py-2 whitespace-nowrap text-gray-700 hover:bg-gray-100 text-sm"
                    >
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
          <button onClick={toggleSearch} className="relative">
            <IconSearch />
          </button>
        </div>
      </div>

      {/* Search Bar (Desktop) */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -10}}
            transition={{duration: 0.3}}
            className="hidden md:block absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md px-4 py-3"
          >
            <div className="container mx-auto">
              <SearchBar
                onSearch={(term) => {
                  handleSearch(term);
                  setIsSearchOpen(false);
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Bar (Mobile) */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{x: '100%'}}
            animate={{x: 0}}
            exit={{x: '100%'}}
            transition={{duration: 0.3}}
            className="absolute inset-0 bg-white flex items-center px-4 md:hidden"
          >
            <div className="container mx-auto">
              <SearchBar
                onSearch={(term) => {
                  handleSearch(term);
                  setIsSearchOpen(false);
                }}
              />
            </div>
            <button onClick={toggleSearch} className="ml-2">
              <IconClose />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#F7F7F9] flex flex-col p-9 md:hidden overflow-y-auto max-h-screen"
            initial={{x: '-100%'}}
            animate={{x: 0}}
            exit={{x: '-100%'}}
            transition={{duration: 0.3}}
          >
            {/* Nút đóng menu */}
            <button className="self-end mb-4" onClick={toggleMobileMenu}>
              <IconClose />
            </button>

            {/* Menu chính */}
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => {
                const Icon = getMenuIcon(item.title);

                return (
                  <div key={index}>
                    {/* Mục menu chính */}
                    <div className="flex justify-between items-center">
                      <Link
                        href={item.path}
                        className="text-lg text-gray-800 flex items-center space-x-2 text-sm"
                      >
                        {Icon && <Icon className="w-5 h-5 text-gray-600" />}
                        <span>{item.title}</span>
                      </Link>
                      {item.submenu && (
                        <button onClick={() => toggleSubmenu(index)}>
                          <div
                            className={cn(
                              'w-5 h-5 text-gray-600 transition-transform duration-300 text-sm',
                              openSubmenu === index && 'rotate-90'
                            )}
                          >
                            <IconArrowNext />
                          </div>
                        </button>
                      )}
                    </div>

                    {/* Submenu */}
                    <AnimatePresence>
                      {openSubmenu === index && (
                        <motion.div
                          initial={{height: 0, opacity: 0}}
                          animate={{height: 'auto', opacity: 1}}
                          exit={{height: 0, opacity: 0}}
                          className="ml-4 mt-2 space-y-2"
                        >
                          {item.submenu?.map((sub, subIndex) => {
                            const SubIcon = getMenuIcon(sub.title);

                            return (
                              <Link
                                key={subIndex}
                                href={sub.path}
                                className="flex items-center space-x-2 text-gray-700 text-sm"
                              >
                                {SubIcon && (
                                  <SubIcon className="w-5 h-5 text-gray-500" />
                                )}
                                <span>{sub.title}</span>
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Dòng phân cách */}
            <hr className="border-t border-gray-300 my-4" />

            {/* Các icon tài khoản, wishlist, giỏ hàng */}
            <div className="mt-6 flex flex-col space-y-4">
              {menuIcons.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={index}
                    href={item.path}
                    className="flex items-center space-x-2 text-gray-800 text-sm"
                  >
                    <Icon className="w-5 h-5 text-gray-600" />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
