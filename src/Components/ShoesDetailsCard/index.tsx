import ShoePng from '../../assets/img/shoe.png'



export default function ShoesDetailsCard(){
    return(
        <>
            <div className="flex justify-center space-x-4">

                {/*-------------A card-----------*/}
                <div>
                    <h1 className="text-center text-white">A</h1>

                    <div className="relative flex justify-center h-[300px] w-[230px] rounded-[1rem] bg-[#fefeff]">
                        <div className="h-[160px] w-[210px] rounded-[0.5rem] bg-[#d8d8d8] mt-3">
                            <img src={ShoePng} alt="" className="mt-2"/>
                        </div>
                        <h1 className="absolute top-[11.5rem] left-4 font-bold">Nike Dunk Low</h1>
                        <h1 className="absolute top-[12.9rem] left-4 font-bold text-[11px] text-[#a6a7a6]">Select Size</h1>

                        <div className="absolute top-[14rem] h-[170px] w-[220px] left-4 flex flex-wrap space-x-2">
                            <div className="h-[25px] w-[29px] bg-white border-2 border-black rounded-[0.4rem] flex justify-center items-center cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                <h1 className="text-center text-[14px]">22</h1>
                            </div>
                            <div className="h-[25px] w-[29px] bg-white border-2 border-black rounded-[0.4rem] flex justify-center items-center cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                <h1 className="text-center text-[14px]">32</h1>
                            </div>
                            <div className="h-[25px] w-[29px] bg-white border-2 border-black rounded-[0.4rem] flex justify-center items-center cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                <h1 className="text-center text-[14px]">12</h1>
                            </div>
                            <div className="h-[25px] w-[29px] bg-white border-2 border-black rounded-[0.4rem] flex justify-center items-center cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                <h1 className="text-center text-[14px]">32</h1>
                            </div>
                            <div className="h-[25px] w-[29px] bg-white border-2 border-black rounded-[0.4rem] flex justify-center items-center cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                <h1 className="text-center text-[14px]">42</h1>
                            </div>
                        </div>

                        <div className="absolute top-[16.5rem] left-4">
                            <h1 className="font-bold">$130.00</h1>
                        </div>
                        <div className="absolute top-[16.4rem] right-4">
                            <button className="flex items-center justify-center h-[30px] w-[130px] bg-[#1b71ec] rounded text-white text-[12px] px-2">
                                <i className="fas fa-shopping-cart text-white h-4 w-4 mr-1 mt-2"></i>
                                <span>Add to Cart</span>
                            </button>
                        </div>

                    </div>
                </div>


                {/*----------B Card---------*/}
                <div>
                    <h1 className="text-center text-white">B</h1>

                    <div className="relative flex justify-center h-[300px] w-[230px] rounded-[1rem] bg-[#fefeff]">
                        <div className="h-[160px] w-[210px] rounded-[0.5rem] bg-[#d8d8d8] mt-3">
                            <img src={ShoePng} alt="" className="mt-2"/>
                        </div>
                        <h1 className="absolute top-[11.5rem] left-4 font-bold">Nike Dunk Low</h1>
                        <h1 className="absolute top-[11.5rem] right-4 font-bold">$130.00</h1>
                        <h1 className="absolute top-[12.9rem] left-4 font-bold text-[11px] text-[#a6a7a6]">Select Size</h1>

                        <div className="absolute top-[14rem] h-[170px] w-[220px] left-4 flex flex-wrap space-x-2">
                            <div className="h-[25px] w-[29px] bg-white border-2 border-black rounded-[0.4rem] flex justify-center items-center cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                <h1 className="text-center text-[14px]">22</h1>
                            </div>
                            <div className="h-[25px] w-[29px] bg-white border-2 border-black rounded-[0.4rem] flex justify-center items-center cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                <h1 className="text-center text-[14px]">32</h1>
                            </div>
                            <div className="h-[25px] w-[29px] bg-white border-2 border-black rounded-[0.4rem] flex justify-center items-center cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                <h1 className="text-center text-[14px]">12</h1>
                            </div>
                            <div className="h-[25px] w-[29px] bg-white border-2 border-black rounded-[0.4rem] flex justify-center items-center cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                <h1 className="text-center text-[14px]">32</h1>
                            </div>
                            <div className="h-[25px] w-[29px] bg-white border-2 border-black rounded-[0.4rem] flex justify-center items-center cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-300">
                                <h1 className="text-center text-[14px]">42</h1>
                            </div>
                        </div>

                        <div className="absolute top-[16.4rem] right-4">
                            <button className="flex items-center justify-center h-[30px] w-[199.6px] bg-[#1b71ec] rounded text-white text-[12px] px-2">
                                <i className="fas fa-shopping-cart text-white h-4 w-4 mr-1 mt-2"></i>
                                <span>Add to Cart</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}