'use client';
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MdKeyboardArrowDown } from "react-icons/md";




function Header3() {
    const { user } = useUser();
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
                    <Link href={"/shop"}>Product</Link>
                    <Link href={"/pricing"}>Pricing</Link>
                    <Link href={"/contact"}>Contact</Link>
                </ul>

            </div>

            <div className="hidden md:flex items-center font-bold text-[14px] gap-[45px] text-white">

                <div className="flex items-center gap-[5px]">
                    {user ? (
                        <div className="flex items-center space-x-2">
                            <UserButton />
                            <div className="hidden sm:block text-xs">
                                <p className="text-gray-400">Welcome Back</p>
                                <p className="text-[#23A6F0] font-bold">{user.fullName}</p>
                            </div>
                        </div>
                    ) : (
                        <Link href={"/sign-up"}>
                            <div className="text-[#23A6F0]">Login</div>
                        </Link>
                    )}

                </div>


                <Link href={"/sign-up"}>
                    <div className="bg-[#23A6F0] flex items-center justify-center gap-[15px] rounded-[5px] w-[214px] h-[52px]">
                        <span>Become a member</span>
                        <FaArrowRight className="text-lg" />
                    </div>
                </Link>
            </div>


            <div className="md:hidden flex items-center font-bold text-xl text-[#737373] gap-7">

                <IoSearch />
                <SignedIn>
                    <Link href={"/cart"}>
                        <IoCartOutline />
                    </Link>
                </SignedIn>

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

        </header>
    )
}

export default Header3;