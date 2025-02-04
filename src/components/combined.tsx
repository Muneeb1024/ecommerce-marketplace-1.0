"use client"
import { FiHeart } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { IoEye } from "react-icons/io5";

function Combined() {

    return (

        <div className="flex items-center gap-[10px]">
            <button className="w-[148px] h-[44px] bg-[#23A6F0] rounded-[5px] text-[14px] font-bold text-white">
                Select Options
            </button>
            <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full border border-[#E8E8E8] bg-[#FFFFFF] text-xl text-[#252B42]">
                <FiHeart />
            </div>
            <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full border border-[#E8E8E8] bg-[#FFFFFF] text-xl text-[#252B42]">

                <BsCart />
            </div>
            <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full border border-[#E8E8E8] bg-[#FFFFFF] text-xl text-[#252B42]">
                <IoEye />
            </div>
        </div>

    )
}

export default Combined