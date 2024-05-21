

const Flight = () => {
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
                        <h5 className="text-lg font-medium text-black-soft mt-10">Flight Details</h5>
                        <div className="bg-white rounded-3xl h-12 flex justify-between items-center px-4 mt-4">
                                <input className="placeholder:text-xs  placeholder:text-gray-textsoft placeholder:font-normal " type="text" placeholder="Flight Type"/>
                            <a href="#">
                                <img src="./img/arrow-inp.svg" alt="arrow"/>
                            </a>
                        </div>
                        <div className="flex  mt-6">
                            <div className="bg-white rounded-l-3xl w-full xl:w-1/2 h-12 flex items-center px-4">
                                    <input className="placeholder:text-xs  placeholder:text-gray-textsoft placeholder:font-normal w-20 xl:w-40" type="text" placeholder="From"/>
                                </div>
                                <img src="./img/flight.svg" alt="flight"/>
                                <div className="bg-white rounded-r-3xl w-full xl:w-1/2 h-12 flex justify-between px-4 items-center ">
                                <input className="placeholder:text-xs  placeholder:text-gray-textsoft placeholder:font-normal w-16 xl:w-40"  type="text" placeholder="To"/>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 mt-4">
                            <div className="bg-white rounded-3xl w-full xl:w-1/2 h-12 flex justify-between items-center px-4 ">
                                <input className="placeholder:text-xs placeholder:text-gray-textsoft placeholder:font-normal " type="text" placeholder="Date of Travel"/>
                                <a href='#'>
                                    <img src="./img/calenderflight.svg" alt="calender"/>
                                </a>
                            </div>
                            <div className="bg-white rounded-3xl w-full xl:w-1/2 h-12 flex items-center justify-between px-4">
                                <input className="placeholder:text-xs placeholder:text-gray-textsoft placeholder:font-normal " type="text" placeholder="Class"/>
                                <a href='#'>                                  <img className="" src="./img/arrow-inp.svg" alt="arrow"/>
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <input type="checkbox" />
                            <span className="text-xs text-gray-textsoft font-medium">Flexible date</span>
                        </div>
                        
                        <div className="flex justify-between mt-3 w-1/2">
                            <div className="w-24 bg-white rounded-full h-11 flex items-center justify-between px-4">
                                <input className="w-8 placeholder:text-xs placeholder:text-gray-textsoft font-normal" type="text" placeholder="ADT"/>
                                <a href="#"><img src="./img/arrow-inp.svg" alt="arrow"/></a>
                            </div>
                            <div className="w-24 bg-white rounded-full h-11 flex items-center justify-between px-4">
                                <input className="w-8 placeholder:text-xs placeholder:text-gray-textsoft font-normal" type="text" placeholder="CHD"/>
                                <a href="#"><img src="./img/arrow-inp.svg" alt="arrow"/></a>
                            </div>
                            <div className="w-24 bg-white rounded-full h-11 flex items-center justify-between px-4">
                                <input className="w-8 placeholder:text-xs placeholder:text-gray-textsoft font-normal" type="text" placeholder="INFT"/>
                                <a href="#"><img src="./img/arrow-inp.svg" alt="arrow"/></a>
                            </div>
                        </div>
                        
                    </div>
                        
                    </div>
                    
                
                </div>
                <div className="">
                <div className="w-full xl:w-429px sm:max-w-md  p-6 border border-gray-lighter mt-10 sm:mt-0 rounded-md">
                        <div className="flex items-start justify-between">
                        <h5 className="text-xl xl:text-2xl font-semibold text-black-dark ">Flight Summary</h5>
                            <div >
                                <p className="text-xs font-semibold text-gray-text mb-3"># F202401</p>
                                <div className="flex items-center gap-1">
                                    <img src="./img/Calendarr.svg" alt="Calendarr"/>
                                    <span className="text-xs font-semibold text-gray-text">24 Jan 2023</span>
                                </div>
                            </div>
                        </div>
                        <div className=' mt-14'>
                        <svg width="full" height="22" viewBox="0 0 379 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M64 11H315" stroke="#E1E2E3" strokeDasharray="3 2"/>
                            <circle cx="4" cy="4" r="4.5" transform="matrix(-1 0 0 1 323 7)" fill="white" stroke="#D9D9D9"/>
                            <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 321 9)" fill="#D9D9D9"/>
                            <path d="M5.28409 10.3466V11.8182H0.125V10.3466H5.28409Z" fill="black"/>
                            <path d="M378.878 10.3466V11.8182H373.719V10.3466H378.878Z" fill="black"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M200.723 12.556L201.44 12.2252C201.781 12.0693 201.999 11.7323 202 11.3612V10.6591C201.999 10.288 201.781 9.95105 201.44 9.7951L200.723 9.46434C200.21 9.22548 199.65 9.10101 199.083 9.09982H193.182L187.643 0.803665C187.562 0.711955 187.476 0.626216 187.383 0.547137C187.03 0.188512 186.543 -0.00949388 186.037 0.00035031H185.805C185.681 -0.00410129 185.561 0.0452282 185.477 0.135382C185.363 0.248337 185.316 0.412033 185.354 0.567405L188.285 9.10659L183.052 9.52507L179.842 5.7719C179.666 5.60285 179.432 5.50633 179.186 5.50188H178.462C178.313 5.50227 178.173 5.57404 178.086 5.69456C177.999 5.81508 177.977 5.96958 178.025 6.10943L179.678 11.0102L178.025 15.9109C177.977 16.0508 177.999 16.2052 178.086 16.3258C178.173 16.4463 178.313 16.5181 178.462 16.5184H179.186C179.432 16.514 179.666 16.4175 179.842 16.2484L183.093 12.4412L188.285 12.9138L185.334 21.4327C185.296 21.588 185.342 21.7517 185.457 21.8647C185.541 21.9548 185.661 22.0042 185.785 21.9997H186.017C186.511 22.0057 186.987 21.8133 187.335 21.4664C187.428 21.3874 187.515 21.3016 187.595 21.2099L193.182 12.9205H199.083C199.65 12.9193 200.21 12.7949 200.723 12.556Z" fill="#5137A6"/>
                        </svg>

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

export default Flight