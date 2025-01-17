'use client';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
function Header3() {
    return (
        <header className="wrapper2 h-[91px] text-[#252B42] flex items-center justify-between px-7 sm:px-10 lg:px-0">

            <div className="flex items-center gap-[119px]">
                <Link href="/">
                    <h1 className="font-bold text-2xl">
                        Bandage
                    </h1>
                </Link>
                <ul className="hidden md:flex items-center space-x-[15px] text-sm text-[#737373] font-bold">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/products"}>Product</Link>
                    <Link href={"/pricing"}>Pricing</Link>
                    <Link href={"/contact"}>Contact</Link>
                </ul>

            </div>

            <div className="hidden md:flex items-center font-bold text-[14px] gap-[45px] text-white">
                <div className="text-[#23A6F0]">Login</div>
                <div className="bg-[#23A6F0] flex items-center justify-center gap-[15px] rounded-[5px] w-[214px] h-[52px]">
                    <span>Become a member</span>
                    <FaArrowRight className="text-lg" />
                </div>
            </div>


            <div className="md:hidden flex items-center font-bold text-xl text-[#737373] gap-7">

                <IoSearch />
                <IoCartOutline />
                <TbMenuDeep />
            </div>

        </header>
    )
}

export default Header3;