'use client';
function Hero() {
  return (

    <section className="wrapper1 w-full h-[753px] lg:h-[716px] bg-cover bg-center text-white sm:pl-[110px] lg:pl-[198px]" style={{ backgroundImage: "url('/bg-img/hero1.jpg')" }}>
    
      <div className="flex flex-col items-center sm:items-start justify-center h-full gap-[35px]">
        <h5 className="font-bold">SUMMER 2020</h5>
        <div className="flex flex-col sm:flex-row text-center">
          <h2 className="font-bold text-[40px] lg:text-[60px] leading-[50px] tracking-[0.2px]">NEW <br className="sm:hidden" />COLLECTION</h2>

        </div>
        <p className="text-center sm:text-start text-wrap text-[20px] leading-[30px]">
          We know how large objects <br className="sm:hidden"/>
          will act,<br className="max-sm:hidden"/> but things on a <br className="sm:hidden" />
          small scale.
        </p>

        <button className="bg-[#2DC071] w-[221px] h-[62px] font-bold text-center text-[24px] tracking-[0.2px]">
          SHOP NOW
        </button>

      </div>

    </section>
  )
}

export default Hero;