'use client';
function Editorspics() {
  return (
    <section className="wrapper1 bg-[#FAFAFA] flex flex-col items-center py-[80px]">

      <h3 className="text-2xl font-bold text-[#252B42] mb-[10px]">EDITOR’S PICK</h3>
      <p className="text-[#737373] font-[400] text-[14px] text-center leading-5 mb-[48px]">Problems trying to resolve <br className="sm:hidden" />
        the conflict between </p>

      {/* /pics section */}
      <div className="wrapper2 flex flex-wrap gap-[30px]">
        <div className="mx-auto w-[325px] lg:w-[510px] h-[500px] bg-cover bg-center flex items-end relative" style={{ backgroundImage: "url('/editors-pics/pic1.png')" }}>
          <div className="bg-white w-[170px] h-12 absolute left-[31px] bottom-[26px] text-[black] font-bold flex items-center justify-center">
            MEN
           </div>
        </div>

        <div className="mx-auto w-[325px] lg:w-[239px] h-[500px] bg-cover bg-center flex items-end relative" style={{ backgroundImage: "url('/editors-pics/pic2.png')" }}>
          <div className="bg-white w-[136px] h-12 absolute left-[63px] bottom-[18px] text-[black] font-bold flex items-center justify-center">
            WOMEN
          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-[16px] mx-auto">
          <div className="mx-auto w-[325px] lg:w-[240px] h-[242px] bg-cover bg-center flex items-end relative" style={{ backgroundImage: "url('/editors-pics/pic3.png')" }}>
            <div className="bg-white w-[170px] h-12 absolute left-[26px] bottom-[12px] text-[black] font-bold flex items-center justify-center">
              ACCESSORIES
            </div>
          </div>
          <div className="mx-auto w-[325px] lg:w-[240px] h-[242px] bg-cover bg-center flex items-end relative" style={{ backgroundImage: "url('/editors-pics/pic4.png')" }}>
            <div className="bg-white w-[120px] h-12 absolute left-[18px] bottom-[12px] text-[black] font-bold flex items-center justify-center">
              KIDS
            </div>
          </div>
        </div>

      </div>



    </section>
  )
}

export default Editorspics;