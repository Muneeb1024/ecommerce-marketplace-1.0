'use client'
import Link from "next/link";
import { ClerkLoaded, SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Search } from "@/components/search";





export default function Header() {
    const { user } = useUser();

    return (
        <header className="wrapper1 mt-[23px] mb-[8px] sm:mt-[12px] sm:mb-[8px] h-[58px] px-4 md:px-10 text-[#252B42] flex items-center justify-between">
            <ClerkLoaded>
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
                    <div className="flex items-center gap-[5px]">
                        {user ? (
                            <div className="flex items-center space-x-2">
                                <UserButton />
                                <div className="hidden sm:block text-xs">
                                    <p className="text-gray-400">Welcome Back</p>
                                    <p className="font-bold">{user.fullName}</p>
                                </div>
                            </div>
                        ) : (
                            <Link href={"/sign-in"} className="flex items-center gap-[5px]">
                                <IoPersonOutline className="text-[12px]" />
                                <span className="text-sm font-bold">Login / Register</span>
                            </Link>
                        )}

                    </div>

                    <Popover>
                        <PopoverTrigger><IoSearch /></PopoverTrigger>
                        <PopoverContent>
                            <Search />


                        </PopoverContent>
                    </Popover>



                    <SignedIn>
                        <Link href={"/cart"}>
                            <div className="flex items-center space-x-1">
                                <IoCartOutline />
                                {/* <span className="hidden md:flex text-[12px]">1</span> */}
                            </div>
                        </Link>
                    </SignedIn>
                    <Link href={"/wish-list"}>
                        <div className="hidden md:flex items-center space-x-1">
                            <IoHeartOutline />
                            {/* <span className="hidden md:flex text-[12px]">1</span> */}
                        </div>
                    </Link>
                    
                    <Sheet>
                        <SheetTrigger>
                            <TbMenuDeep className="md:hidden" />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>
                                    <Link href="/" className="text-black">
                                        <h1 className="font-bold text-2xl">
                                            Bandage
                                        </h1>
                                    </Link>
                                </SheetTitle>
                                <SheetDescription>
                                    <div className="mt-5">

                                        <ul className="flex flex-col items-start space-y-[20px] text-lg text-[#737373] font-bold">
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
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>




                </div>
            </ClerkLoaded>


        </header>
    )
}





