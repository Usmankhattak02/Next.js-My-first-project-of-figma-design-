
const Container = () => {
    return (

        <div className=" m-auto w-[1046px] h-[1028px]    py-20 bg-[#252B42] flex flex-col items-center justify-between">
            <div className="w-[701px] h-[496px]  flex justify-center">
                <div className="w-[699px] h-[496px] pt-10 pb-10 flex flex-col items-center justify-center gap-10" >
                    <h5 className=" w-[77px] h-[24px] font-bold text-2xl leading-6 tacker-[0.1px] text-[#23A6F0]">Welcome</h5>
                    <h1 className=" w-[542px] h-[160px] font-bold text-[58px] leading-[80px]  text-center  text-white Center">Selling on the internet like a pro</h1>
                    <h4 className="w-[536px] h-[60px] font-normal text-[20px] text-center text-white flex justify-center">We know how large objects will act, but things on a
                        small scale just do not act that way.</h4>
                    <div className="w-[365px] h-[52px] flex justify-center items-center gap-[10px] ">
                        <button className="w-[193px] h-[52px] rounded-[5px] px-10 py-[15px] font-bold text-[14px] leading-[22px]  text-white bg-[#23A6F0]">Get Quote Now</button>
                        <button className="w-[162px] h-[52px] rounded-[5px] px-10 py-[15px]  border-[#23A6F0] border-[1px] font-sans font-bold text-[14px] tracking-[0.2px] leading-[22px] text-[#23A6F0] ">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="w-[1046px] h-[292px]  flex justify-items-center  gap-[30px]">
                <div className="w-[328px] h-[292px]">
                    <div className="w-[328px] h-[292px] px-10 py-[35px]  bg-white flex flex-col gap-5  shadow-[#00000012] ">
                        <div className="w-[70px] h-[76px] rounded-[10px] py-[19px] px-[22px] bg-[#FFDCD1]"></div>
                        <h5 className="font-bold text-base leading-6 tracking-[0.1px] text-[#252B42] ">training Courses</h5>
                        <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
                        <p className="w-[222px] h-[60px] font-normal text-sm leading-5 tracking-[0.2px] text-[#737373]">The gradual accumulation of
                            information about atomic and
                            small-scale behaviour...</p>
                    </div>
                </div>
                <div className="w-[329px] h-[292px]">
                    <div className="w-[328px] h-[292px] px-10 py-[35px]  border bg-white flex flex-col gap-5  shadow-[#00000012]">
                        <div className="w-[70px] h-[76px] rounded-[10px] py-[19px] px-[22px] bg-[#B9EAA8]"></div>
                        <h5 className="font-bold text-base leading-6 tracking-[0.1px] text-[#252B42] ">2,769 online courses</h5>
                        <div className="w-[50px] h-[2px] bg-[#E74040]"></div>
                        <p className="w-[222px] h-[60px] font-normal text-sm leading-5 tracking-[0.2px] text-[#737373]">The gradual accumulation of
                            information about atomic and
                            small-scale behaviour...</p>
                    </div>
                </div>
                <div className="w-[329px] h-[292px]">
                    <div className="w-[328px] h-[292px] px-10 py-[35px] border text-white bg-[#23A6F0] flex flex-col gap-5  shadow-[#00000012] ">
                        <div className="w-[70px] h-[76px] rounded-[10px] py-[19px] px-[22px] bg-white"></div>
                        <h5 className="font-bold text-base leading-6 tracking-[0.1px] text-white ">2,769 online courses</h5>
                        <div className="w-[50px] h-[2px] bg-white"></div>
                        <p className="w-[222px] h-[60px] font-normal text-sm leading-5 tracking-[0.2px] text-white">The gradual accumulation of
                            information about atomic and
                            small-scale behaviour...</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Container;