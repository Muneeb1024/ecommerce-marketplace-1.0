'use client'
import Link from "next/link";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function Header() {
    return (
        <header className="wrapper1 mt-[23px] mb-[8px] sm:mt-[12px] sm:mb-[8px] h-[58px] px-10 text-[#252B42] flex items-center justify-between">

            <div className="flex items-center gap-[119px]">
                <Link href="/">
                    <h1 className="font-bold text-2xl">
                        Bandage
                    </h1>
                </Link>
                <ul className="hidden md:flex items-center space-x-[15px] text-sm text-[#737373] font-bold">
                    <Link href={"/"}>Home</Link>
                    <div className="flex items-center space-x-2">
                        <Link href={"/shop"}>Shop</Link>
                        <MdKeyboardArrowDown className="text-lg" />
                    </div>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/blog"}>Blog</Link>
                    <Link href={"/contact"}>Contact</Link>
                    <Link href={"/team"}>Pages</Link>
                </ul>

            </div>



            <div className="max-w-[315px] gap-[16px] text-[#252B42] sm:text-[#23A6F0] flex items-center justify-between text-xl sm:text-[16px]">
                <div className="hidden lg:flex items-center gap-[5px]">
                    <IoPersonOutline className="text-[12px]" />
                    <span className="text-sm font-bold">Login / Register</span>
                </div>

                <IoSearch />

                <div className="flex items-center space-x-1">
                    <IoCartOutline />
                    <span className="hidden md:flex text-[12px]">1</span>
                </div>

                <div className="hidden md:flex items-center space-x-1">
                    <IoHeartOutline />
                    <span className="hidden md:flex text-[12px]">1</span>
                </div>

                <TbMenuDeep className="md:hidden" />
            </div>



        </header>
    )
}

