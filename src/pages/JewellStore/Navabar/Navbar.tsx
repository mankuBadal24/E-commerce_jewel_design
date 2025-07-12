"use client";
import { useState } from "react";
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import logo from '../../../../public/images/logo/logo.png'
import { IoIosSearch } from "react-icons/io";
import { User } from "@/components/common/icon/User";
import { BsCart3 } from "react-icons/bs";
import { motion, AnimatePresence } from "motion/react";
export function NavbarDemo() {
    return (
        <div className="relative w-full">
            <Navbar className="top-0" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    return (
        <div
            className={cn("fixed top-0 inset-x-0 w-full z-50", className)}
        >
            <div className="w-full flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
                {/* Logo Section */}
                <div className="flex items-center w-30 h-15">
                    <img src={logo} alt="" className="" />
                </div>

                {/* Desktop Menu Section - Hidden on mobile */}
                <div className="hidden lg:flex items-center">
                    <Menu setActive={setActive}>
                        <MenuItem setActive={setActive} active={active} item="Bawaria Precious">
                            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                                <ProductItem
                                    title="Pendants"
                                    href="https://algochurn.com"
                                    src="https://media.angara.com/pendant/lsp0155d/5mm-fgvs-lab-grown-diamond-yellow-gold-pendant.jpg?width=480&quality=85&auto=webp"
                                    description="Explore our stunning collection of pendants for women & men, including gold & lab diamond pendants"
                                />
                                <ProductItem
                                    title="Braclets"
                                    href="https://tailwindmasterkit.com"
                                    src="https://images.cltstatic.com/media/product/350/AT00303-SS0000-trailing-vines-bracelet-in-gold-plated--silver-prd-1-base.jpg"
                                    description="Shop our exquisite collection of silver bracelets (ब्रेसलेट)for women and men, including stylish couple bracelets."
                                />

                                <ProductItem
                                    title="Earrings"
                                    href="https://userogue.com"
                                    src="https://manubhai.in/SocialMedia/post_artworks/DCBE00660.jpg"
                                    description="Our earrings collection comes in 22 and 18 KT and striking colours including, yellow gold, two-tone gold, rose gold, and white gold."
                                />
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Women">
                            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                                <ProductItem
                                    title="Earrings"
                                    href="https://userogue.com"
                                    src="https://manubhai.in/SocialMedia/post_artworks/DCBE00660.jpg"
                                    description="Our earrings collection comes in 22 and 18 KT and striking colours including, yellow gold, two-tone gold, rose gold, and white gold."
                                />
                                <ProductItem
                                    title="Pendants"
                                    href="https://algochurn.com"
                                    src="https://media.angara.com/pendant/lsp0155d/5mm-fgvs-lab-grown-diamond-yellow-gold-pendant.jpg?width=480&quality=85&auto=webp"
                                    description="Explore our stunning collection of pendants for women & men, including gold & lab diamond pendants"
                                />
                                <ProductItem
                                    title="Necklace"
                                    href="https://algochurn.com"
                                    src="https://media.angara.com/pendant/sp1084aqd/5mm-aaa-aquamarine-yellow-gold-pendant.jpg?width=480&quality=85&auto=webp"
                                    description="Explore our stunning collection of pendants for women & men, including gold & lab diamond pendants"
                                />
                                <ProductItem
                                    title="Braclets"
                                    href="https://tailwindmasterkit.com"
                                    src="https://images.cltstatic.com/media/product/350/AT00303-SS0000-trailing-vines-bracelet-in-gold-plated--silver-prd-1-base.jpg"
                                    description="Shop our exquisite collection of silver bracelets (ब्रेसलेट)for women and men, including stylish couple bracelets."
                                />


                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Men">
                            <div className="  text-sm grid grid-cols-2 gap-10 p-4">

                                <ProductItem
                                    title="Braclets"
                                    href="https://tailwindmasterkit.com"
                                    src="https://image.hm.com/assets/hm/85/e7/85e766d66ef99ba0ed4aeed687d30657d935bb27.jpg?imwidth=1260"
                                    description="Shop our exquisite collection of silver bracelets (ब्रेसलेट)for women and men, including stylish couple bracelets."
                                />

                                <ProductItem
                                    title="Necklace"
                                    href="https://algochurn.com"
                                    src="https://media.angara.com/pendant/sp1084aqd/5mm-aaa-aquamarine-yellow-gold-pendant.jpg?width=480&quality=85&auto=webp"
                                    description="Explore our stunning collection of pendants for women & men, including gold & lab diamond pendants"
                                />
                            </div>
                        </MenuItem>

                        <MenuItem setActive={setActive} active={active} item="Bride">
                            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                                <ProductItem
                                    title="Pendants"
                                    href="https://algochurn.com"
                                    src="https://media.angara.com/pendant/lsp0155d/5mm-fgvs-lab-grown-diamond-yellow-gold-pendant.jpg?width=480&quality=85&auto=webp"
                                    description="Explore our stunning collection of pendants for women & men, including gold & lab diamond pendants"
                                />
                                <ProductItem
                                    title="Braclets"
                                    href="https://tailwindmasterkit.com"
                                    src="https://images.cltstatic.com/media/product/350/AT00303-SS0000-trailing-vines-bracelet-in-gold-plated--silver-prd-1-base.jpg"
                                    description="Shop our exquisite collection of silver bracelets (ब्रेसलेट)for women and men, including stylish couple bracelets."
                                />

                                <ProductItem
                                    title="Earrings"
                                    href="https://userogue.com"
                                    src="https://manubhai.in/SocialMedia/post_artworks/DCBE00660.jpg"
                                    description="Our earrings collection comes in 22 and 18 KT and striking colours including, yellow gold, two-tone gold, rose gold, and white gold."
                                />
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Groom">
                            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                                <ProductItem
                                    title="Pendants"
                                    href="https://algochurn.com"
                                    src="https://media.angara.com/pendant/lsp0155d/5mm-fgvs-lab-grown-diamond-yellow-gold-pendant.jpg?width=480&quality=85&auto=webp"
                                    description="Explore our stunning collection of pendants for women & men, including gold & lab diamond pendants"
                                />
                                <ProductItem
                                    title="Braclets"
                                    href="https://tailwindmasterkit.com"
                                    src="https://images.cltstatic.com/media/product/350/AT00303-SS0000-trailing-vines-bracelet-in-gold-plated--silver-prd-1-base.jpg"
                                    description="Shop our exquisite collection of silver bracelets (ब्रेसलेट)for women and men, including stylish couple bracelets."
                                />

                                <ProductItem
                                    title="Earrings"
                                    href="https://userogue.com"
                                    src="https://manubhai.in/SocialMedia/post_artworks/DCBE00660.jpg"
                                    description="Our earrings collection comes in 22 and 18 KT and striking colours including, yellow gold, two-tone gold, rose gold, and white gold."
                                />
                            </div>
                        </MenuItem>
                    </Menu>
                </div>

                {/* Desktop Icons Section - Hidden on mobile */}
                <div className="hidden lg:flex items-center space-x-4">
                    {/* Search Icon */}
                    <button 
                        onClick={() => setSearchOpen(!searchOpen)}
                        className="text-white hover:text-gray-300 transition-colors"
                    >
                        <IoIosSearch className="w-6 h-6" />
                    </button>

                    {/* Cart Icon */}
                    <button className="text-white hover:text-gray-300 transition-colors relative">
                        <BsCart3 />
                        {/* Cart badge */}
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                            0
                        </span>
                    </button>
                    <button className="text-white hover:text-gray-300 transition-colors relative">
                        <User />
                    </button>
                </div>

                {/* Mobile Hamburger Menu - Only visible on mobile */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-white hover:text-gray-300 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown - Only visible when hamburger is clicked */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-black border-t border-gray-800">
                    <div className="px-6 py-4 space-y-4">
                        {/* Mobile Menu Items */}
                        <div className="space-y-2">
                            <button className="block w-full text-left text-white hover:text-gray-300 py-2">
                                Bawaria Precious
                            </button>
                            <button className="block w-full text-left text-white hover:text-gray-300 py-2">
                                Women
                            </button>
                            <button className="block w-full text-left text-white hover:text-gray-300 py-2">
                                Men
                            </button>
                            <button className="block w-full text-left text-white hover:text-gray-300 py-2">
                                Bride
                            </button>
                            <button className="block w-full text-left text-white hover:text-gray-300 py-2">
                                Groom
                            </button>
                        </div>

                        {/* Mobile Icons */}
                        <div className="flex items-center space-x-6 pt-4 border-t border-gray-800">
                            {/* Search Icon */}
                            <button 
                                onClick={() => setSearchOpen(!searchOpen)}
                                className="text-white hover:text-gray-300 transition-colors"
                            >
                                <IoIosSearch className="w-6 h-6" />
                            </button>

                            {/* Cart Icon */}
                            <button className="text-white hover:text-gray-300 transition-colors relative">
                                <BsCart3 />
                                {/* Cart badge */}
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                    0
                                </span>
                            </button>
                            <button className="text-white hover:text-gray-300 transition-colors relative">
                                <User />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Search Input Overlay - Slides from left to right above navbar */}
            <AnimatePresence>
                {searchOpen && (
                    <motion.div 
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 30,
                            duration: 0.3 
                        }}
                        className="absolute top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 overflow-hidden z-10"
                    >
                        <div className="px-6 py-4">
                            <div className="flex items-center justify-between max-w-6xl mx-auto">
                                {/* Logo in search overlay */}
                                <motion.div 
                                    initial={{ x: -30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1, duration: 0.2 }}
                                    className="flex items-center"
                                >
                                    <img src={logo} alt="Bawaria Precious" className="h-15 w-auto" />
                                </motion.div>

                                {/* Search input in center */}
                                <motion.div 
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1, duration: 0.2 }}
                                    className="relative flex-1 max-w-2xl mx-8"
                                >
                                <input
                                    type="text"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    placeholder="Search for products..."
                                    className="w-full px-4 py-3 pl-10 pr-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                                    autoFocus
                                />
                                {/* Search icon inside input */}
                                <motion.div 
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.2 }}
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2"
                                >
                                    <IoIosSearch className="w-5 h-5 text-gray-400" />
                                </motion.div>
                                </motion.div>

                                {/* Close button on the right */}
                                <motion.button
                                    initial={{ x: 30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.2 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => {
                                        setSearchOpen(false);
                                        setSearchValue("");
                                    }}
                                    className="text-gray-400 hover:text-white transition-colors p-2"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                        
                        {/* Search suggestions/results with animation - positioned below the search overlay */}
                        <AnimatePresence>
                            {searchValue && (
                                <motion.div 
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-gray-800 max-h-96 overflow-y-auto"
                                >
                                    <div className="px-6 py-4">
                                        <div className="max-w-2xl mx-auto">
                                            <div className="bg-gray-900 rounded-lg border border-gray-700 p-4">
                                                <p className="text-gray-400 text-sm">
                                                    Search results for "{searchValue}"...
                                                </p>
                                                {/* Add search results here */}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
