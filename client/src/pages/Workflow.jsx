import React from "react";
import workflow from '../assets/img/workflowTop.png';
import first from '../assets/img/Screenshot 2024-06-13 162720.png';
import second from '../assets/img/Screenshot 2024-06-13 162915.png';
import third from '../assets/img/Screenshot 2024-06-13 163031.png';
const Workflow = () => {
    return (
        <div>
            <div className="bg-[#e8e7e740] min-h-[82vh] pb-4 backdrop-blur-md rounded-lg flex" style={{ marginTop: '-50px' }}>
                <div className="w-full px-8">
                    <div className="container ">
                        <img src={workflow} alt="" className="w-full" />
                    </div>

                    <div className="flex container  mt-4 gap-4 flex-wrap justify-between ">
                    
                        <div className="w-[32%] relative bg-[#FFFFFF] rounded-md shadow-md p-6 min-w-[300px] flex-1 flex flex-col items-center justify-between">
                           
                            <div className="mb-4 flex justify-center ">
                                <img src={first} alt="Placeholder" className="w-3/5" />
                            </div>
                            <div className="text-center">
                                <h1 className="text-2xl text-[#2B3990] font-bold">Number of Selected People</h1>
                            </div>
                            <div className="text-center mt-4">
                                <h2 className="text-[#7ED981] font-bold text-7xl">100M</h2>
                            </div>
                        </div>

                      
                        <div className="w-[32%] bg-[#FFFFFF] rounded-md shadow-md p-6 min-w-[300px] flex-1 flex flex-col items-center justify-between">
                            <div className="mb-4 flex justify-center">
                                <img src={second} alt="Placeholder" className="w-3/5" />
                            </div>
                            <div className="text-center">
                                <h1 className="text-2xl text-[#2B3990] font-bold">Mail Selected</h1>
                               
                            </div>
                            <div className="text-center mt-4">
                                <h2 className="text-[#7ED981] font-bold text-5xl">RCC</h2>
                                <p className="text-[#7ED981]">Pharmacovigilances</p>
                            </div>
                        </div>

                    
                        <div className="w-[32%] bg-[#FFFFFF] rounded-md shadow-md p-6 min-w-[300px] flex-1 flex flex-col items-center justify-between">
                            <div className="mb-4 flex justify-center">
                                <img src={third} alt="Placeholder" className="w-3/5" />
                            </div>
                            <div className="text-center">
                                <h1 className="text-2xl text-[#2B3990] font-bold">Number of Waves</h1>
                            </div>
                            <div className="text-center mt-4">
                                <h2 className="text-[#7ED981] font-bold text-7xl">2W</h2>
                            </div>
                        </div>
                    </div>

                    <div className="flex container flex-wrap justify-center mt-12 gap-4">
                            <button className="flex flex-1 items-center gap-8 w-1/5 min-w-[150px] max-w-[250px]  justify-center  px-6 py-3 bg-[#7ED981] text-white rounded-lg">
                                Send Email
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="25" fill="white">
                                    <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
                                </svg>

                            </button>
                            
                           
                            <button className="flex flex-1 items-center gap-8 w-1/5 min-w-[150px] max-w-[250px] justify-center px-6 py-3 bg-[#F6B40E] text-white rounded-lg">
                                Schedule Email  
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="25" fill="white">
                                <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                                </svg>

                               
                            </button>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Workflow;