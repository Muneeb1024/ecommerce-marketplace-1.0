'use client';
import Image from "next/image";


function Logos() {
    return (
        <div className="wrapper1 bg-[#FAFAFA]">
            <div className="wrapper2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 py-[50px] gap-[50px] place-content-center place-items-center mb-12">
                <Image
                    src={"/logos/logo1.png"}
                    alt="logo"
                    width={153}
                    height={34}
                    className="mx-auto"
                ></Image>
                <Image
                    src={"/logos/logo2.png"}
                    alt="logo"
                    width={146}
                    height={59}
                    className="mx-auto"
                ></Image>
                <Image
                    src={"/logos/logo3.png"}
                    alt="logo"
                    width={152}
                    height={75}
                    className="mx-auto"
                ></Image>
                <Image
                    src={"/logos/logo4.png"}
                    alt="logo"
                    width={151}
                    height={42}
                    className="mx-auto"
                ></Image>
                <Image
                    src={"/logos/logo5.png"}
                    alt="logo"
                    width={151}
                    height={62}
                    className="mx-auto"
                ></Image>
                <Image
                    src={"/logos/logo6.png"}
                    alt="logo"
                    width={151}
                    height={72}
                    className="mx-auto"
                ></Image>


            </div>
        </div>
    )
}

export default Logos;