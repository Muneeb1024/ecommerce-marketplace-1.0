'use client';
import Image from 'next/image';

function About() {
    return (
        <div>
            <section className='wrapper1 hidden lg:block bg-cover h-[638px] bg-center' style={{ backgroundImage: "url('/bg-img/hero-bg4.png')" }}>
                <div className='wrapper2 h-full flex items-center justify-start'>
                    <div className='flex flex-col items-start gap-[35px]'>
                        <span className='text-[#252B42] font-bold'>ABOUT COMPANY</span>
                        <h2 className='text-[58px] text-[#252B42] font-bold '>ABOUT US</h2>
                        <p className='leading-[30px] text-[#737373] text-[20px]'>We know how large objects will act,<br />
                            but things on a small scale</p>
                        <div className='bg-[#23A6F0] text-[14px] text-white font-bold w-[195px] h-[52px] flex items-center justify-center rounded-[5px]'>
                            Get Quote Now
                        </div>
                    </div>
                </div>
            </section>

            <section className='wrapper2 lg:hidden flex flex-col items-center md:flex-row justify-between md:h-[638px] md:px-[40px]'>

                <div className='h-[590px] text-center md:text-start flex flex-col items-center md:items-start justify-center gap-[40px] md:gap-[35px]'>
                <span className='text-[#252B42] font-bold hidden md:block'>ABOUT COMPANY</span>

                    <h2 className='text-[40px] text-[#252B42] font-bold '>ABOUT US</h2>
                    <p className='leading-[30px] text-[#737373] text-[20px]'>We know how large <br />
                        objects will act, but things <br />
                        on a small scale just do <br />
                        not act that way.</p>
                    <div className='bg-[#23A6F0] text-[14px] text-white font-bold w-[195px] h-[52px] flex items-center justify-center rounded-[5px]'>
                        Get Quote Now
                    </div>
                </div>
                <Image src={'/bg-img/about.png'}
                    alt="about"
                    width={376} 
                    height={440}
                    className='md:w-[450px]'
                    >
                </Image>

            </section>



        </div>
    )
}

export default About;