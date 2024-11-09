const Navbar = ()=>{
return (
    <>
        <div className=" m-auto w-[1322px] h-[91px] left-14 bg-[#252B42] flex justify-center items-center ">
            <div className="w-[187px] h-[58px]  flex    justify-between items-center">
                <h3 className=" w-[152px] h-[32px] font-bold text-[24px] leading-8 tracking-[0.1px] top-[13px] text-white ">BrandName</h3>
            </div>
            <div className="w-[815px] h-[58px] flex items-center justify-between">
                <div className="w-[275] h-[24px] top-[17px] flex   ">
                    <ul className="text-white flex items-center gap-[21px]">
                        <li className="w-[43px] h-[24px]"><a href="">Home</a></li>
                        <li className="w-[59px] h-[24px]"><a href="">Product</a></li>
                        <li className="w-[52px] h-[24px]"><a href="">Pricing</a></li>
                        <li className="w-[58px] h-[24px]"><a href="">Contact</a></li>
                    </ul>

                </div>
                <div className="w-[189px] h-[52px] top-[3px] left-[626] flex gap-[45px] items-center justify-center text-white">
                    <li className="decoration-none list-none"><a href="">Login</a></li>
                    <button className= " w-[110px] h-[52px] rounded-[5px]  bg-[#23A6F0]">JOIN US</button>
                </div>
            </div>
        </div>
    </>
)
}
export default Navbar;