import React from 'react'

const Transportation = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center xl:justify-items-end gap-3 xl:gap-0  px-2 xl:px-0  ">
                <div className=" w-full xl:max-w-747px space-y-6" >
                    <div >
                    <div className=" bg-gray-#f9f9f9 rounded-md p-6 w-full">
                        <h5 className="text-lg font-medium text-black-soft mb-6">Guest Details</h5>
                        <div className="flex flex-col lg:flex-row gap-4 ">
                            <div className="bg-white rounded-3xl w-full xl:w-1/2 h-12 flex items-center px-4">
                                <input className="placeholder:text-xs placeholder:text-gray-textsoft placeholder:font-normal " type="text" placeholder="Guest Name"/>
                            </div>
                            <div className="bg-white rounded-3xl w-full xl:w-1/2 h-12 flex gap-2 items-center ">
                                <a href="#">
                                <div className="flex items-center gap-2 border-e-2 px-4">
                                    <img src="./img/KSA.svg" alt="ksa"/>
                                    <span className="text-xs xl:text-sm text-black-#18202F font-normal">+966</span>
                                    <img src="./img/chevron-downflight.svg" alt="chevron"/>
                                </div>
                                </a>
                                <input className="placeholder:text-xs placeholder:text-gray-textsoft placeholder:font-normal w-40"  type="number" placeholder="Your phone number"/>
                                </div>
                        </div>
                        <div className="bg-white rounded-3xl h-12 flex items-center px-4 mt-4">
                            <input className="placeholder:text-xs placeholder:text-gray-textsoft placeholder:font-normal " type="email" placeholder="Email"/>
                        </div>
                        <h5 className="text-lg font-medium text-black-soft mt-10">Transportation Details</h5>
                        <div className="bg-white rounded-3xl h-12 flex justify-between items-center px-4 mt-4">
                                <input className="placeholder:text-sm  placeholder:text-black-dark placeholder:font-normal " type="text" placeholder="Rent Car"/>
                            <a href="#">
                                <img src="./img/arrow-inp.svg" alt="arrow"/>
                            </a>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <input type="checkbox" />
                            <span className="text-xs text-gray-textsoft font-medium">different location</span>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 mt-4">
                        <div className="bg-white rounded-3xl w-full xl:w-1/2 h-12 flex items-center justify-between px-4">
                                <input className="placeholder:text-xs placeholder:text-gray-textsoft placeholder:font-normal " type="text" placeholder="Country"/>
                                <a href='#'>
                                    <img className="" src="./img/arrow-inp.svg" alt="arrow"/>
                                </a>
                            </div>
                            <div className="bg-white rounded-3xl w-full xl:w-1/2 h-12 flex items-center justify-between px-4">
                                <input className="placeholder:text-xs placeholder:text-gray-textsoft placeholder:font-normal " type="text" placeholder="City"/>
                                <a href='#'>
                                    <img className="" src="./img/arrow-inp.svg" alt="arrow"/>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 mt-4">
                        <div className="bg-white rounded-3xl w-full xl:w-1/2 h-12 flex items-center justify-between px-4">
                                <input className="placeholder:text-xs placeholder:text-gray-textsoft placeholder:font-normal " type="text" placeholder="Car Type"/>
                                <a href='#'>
                                    <img className="" src="./img/arrow-inp.svg" alt="arrow"/>
                                </a>
                            </div>
                            <div className="bg-white rounded-3xl w-full xl:w-1/2 h-12 flex items-center justify-between px-4">
                                <input className="placeholder:text-xs placeholder:text-gray-textsoft placeholder:font-normal " type="text" placeholder="No. of Car"/>
                                <a href='#'>
                                    <img className="" src="./img/arrow-inp.svg" alt="arrow"/>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 mt-4">
                            <div className="bg-white rounded-3xl w-full xl:w-1/2 h-12 flex justify-between items-center px-4 ">
                                <input className="placeholder:text-xs placeholder:text-gray-textsoft placeholder:font-normal " type="text" placeholder="Date and Time from"/>
                                <a href='#'>
                                    <img src="./img/calenderflight.svg" alt="calender"/>
                                </a>
                            </div>
                            <div className="bg-white rounded-3xl w-full xl:w-1/2 h-12 flex justify-between items-center px-4 ">
                                <input className="placeholder:text-xs placeholder:text-gray-textsoft placeholder:font-normal " type="text" placeholder="Date and Time to"/>
                                <a href='#'>
                                    <img src="./img/calenderflight.svg" alt="calender"/>
                                </a>
                            </div>
                        </div>
                        
                        <button className="py-3.5 px-10 bg-red-soft rounded-full flex items-center gap-1 mt-10"><img src="./img/plusflight.svg" alt="plus"/> <span className="text-xl font-medium text-white">Add Transportation</span></button>

                    </div>
                        
                    </div>
                </div>
                <div className="">
                <div className="w-full xl:w-429px sm:max-w-md  p-6 border border-gray-lighter mt-10 sm:mt-0 rounded-md">
                        <div className="flex items-start justify-between">
                        <h5 className="text-xl xl:text-2xl font-semibold text-black-dark max-w-44 ">Transportation Summary</h5>
                            <div >
                                <p className="text-xs font-semibold text-gray-text mb-3"># T202401</p>
                                <div className="flex gap-1">
                                    <img src="./img/Calendarr.svg" alt="Calendarr"/>
                                    <span className="text-xs font-semibold text-gray-text">24 Jan 2023</span>
                                </div>
                            </div>
                        </div>
                        <p className="mt-12 text-xs text-gray-text font-medium">4 Days</p>
                        <div className="flex justify-between items-center">
                            <span className="mt-2 text-xs text-gray-text font-semibold">Germany, Frankfort</span>
                            <span className="mt-2 text-xs text-gray-text font-semibold">Ford Fusion <span>2</span> </span>
                        </div>
                        <div className="flex justify-between mt-4">
                            <span className=" text-xs text-gray-text font-semibold">23 June 2023 11:30</span>
                            <span className="text-xs text-gray-text font-semibold">26 June 2023 13:30</span>
                        </div>
                    </div>
                    
                </div> 
            </div>
            <div className="text-center mt-10 space-x-3">
                    <button className=" opacity-30 py-3.5 px-10 border border-gray-#e4e4e4 rounded-full  text-xl text-black-#18202F font-medium">Cancel</button>
                    <button className="opacity-30  py-3.5 px-10 bg-red-soft text-white border border-gray-#e4e4e4 rounded-full text-xl font-medium">Send</button>
                </div>
        </div>
      )
    }

export default Transportation