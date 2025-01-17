'use client';
import About from '@/components/about';
import Footer from '@/components/footer';
import Header3 from '@/components/header3';
import Logos from '@/components/logos';
import Team from '@/components/team';
import { IoPlay } from "react-icons/io5";

function Aboutus() {
    return (
        <section className='wrapper1'>
            <Header3 />
            <About />

            <div className='wrapper2 sm:px-10 lg:px-0 py-[80px] md:py-0 flex flex-col items-center lg:flex-row justify-between text-center md:text-start gap-[60px]'>
                <div className='w-[290px] md:w-[394px] py-6 space-y-6'>
                    <span className='text-[14px] text-[#E74040]'>Problems trying</span>
                    <h3 className='text-[24px] leading-[32px] text-[#252B42] tracking-[0.1px] font-bold'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h3>
                </div>

                <div>
                    <p className='text-[14px] text-[#737373] leading-[20px] w-[306px] md:w-[545px] text-start'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
            </div>

            <div className='wrapper2 sm:px-10 lg:px-0 py-[100px] md:py-[80px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[100px]'>
                <div className='mx-auto text-center font-bold'>
                    <h1 className='text-[58px] text-[#252B42] leading-[80px]'>15K</h1>
                    <span className='text-[#737373]'>Happy Customers</span>
                </div>
                <div className='mx-auto text-center font-bold'>
                    <h1 className='text-[58px] text-[#252B42] leading-[80px]'>150K</h1>
                    <span className='text-[#737373]'>Monthly Visitors</span>
                </div>
                <div className='mx-auto text-center font-bold'>
                    <h1 className='text-[58px] text-[#252B42] leading-[80px]'>15</h1>
                    <span className='text-[#737373]'>Countries  Worldwide</span>
                </div>
                <div className='mx-auto text-center font-bold'>
                    <h1 className='text-[58px] text-[#252B42] leading-[80px]'>100+</h1>
                    <span className='text-[#737373]'>Top Partners</span>
                </div>
            </div>

            <div className='wrapper2 py-[80px]'>
                <div className='mx-auto w-[306px] sm:w-[500px] md:w-[650px] lg:w-[990px] h-[316px] md:h-[400px] lg:h-[540px] bg-center bg-cover rounded-[10px] flex items-center justify-center' style={{ backgroundImage: "url('/bg-img/cover.png')" }}>
                    <div className='bg-[#23A6F0] w-[57px] md:w-[93px] h-[57px] md:h-[93px] flex items-center justify-center rounded-full'>
                        <IoPlay className='text-white text-xl md:text-[26px]' />
                    </div>
                </div>
            </div>
            <Team />

            <div className='wrapper1 bg-[#FAFAFA]'>
                <div className='flex flex-col items-center py-[112px] gap-[24px]'>
                    <div className='text-center flex flex-col items-center gap-[30px]'>
                        <h2 className='font-bold text-[40px] text-[#252B42] leading-[50px] w-[260px] md:w-auto'>Big Companies Are Here</h2>
                        <p className='text-[14px] leading-[20px] text-[#737373] w-[320px] md:w-auto'>Problems trying to resolve the conflict between <br className='hidden md:inline' />
                            the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                    <Logos />
                </div>
            </div>

            <div className='wrapper1 text-white bg-[#2A7CC7] flex justify-start items-center relative'>


                <div className='wrapper2 h-[520px] lg:h-[637px] flex items-center justify-start  text-center'>
                    <div className='w-full lg:w-[1050px] flex flex-col items-center lg:items-start text-center lg:text-start gap-[24px]'>
                        <h6 className='font-bold'>WORK WITH US</h6>
                        <h2 className='font-bold text-[40px] leading-[50px]'>Now Let’s <br className='md:hidden' />grow Yours</h2>
                        <p className='text-[14px] leading-[20px] w-[250px] lg:w-[440px]'>The gradual accumulation of information about atomic and
                            small-scale behavior during the first quarter of the 20th </p>

                        <button className='w-[132px] h-[52px] text-center border border-white rounded-[5px] text-[14px] font-bold'>
                            Button
                        </button>
                    </div>
                </div>

                <div className='hidden lg:flex w-[590] h-[637px] bg-cover absolute right-0' style={{ backgroundImage: "url('/bg-img/side-women.png')" }}>
                </div>


            </div>

            <Footer />

        </section>
    )
}

export default Aboutus;