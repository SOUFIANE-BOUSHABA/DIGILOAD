import React from "react";

const Analytics = () => {
    return (
        <div className=" p-4 space-y-4">

            <div className="flex space-x-4">

                <div className="flex-1 grid grid-cols-1 gap-4">
                    <div className="border text-center items-center border-blue-800 rounded-md border-2 bg-white p-4">
                        <h2 className="text font-semibold mb-4">Evolution du nombre de participants par an</h2>
                        <canvas className="w-full h-40 bg-gray-200"></canvas>
                    </div>
                    <div className="flex  space-x-4 border text-center items-center border-blue-800 rounded-md border-2 bg-white p-4">
                        <div className="w-1/2">
                            <h2 className="text font-semibold mb-4">Qualité des participants</h2>
                            <canvas className="w-full h-24 bg-gray-200"></canvas>
                        </div>
                        <div className="w-1/2">
                            <h2 className="text font-semibold mb-4">Appartenance des participants</h2>
                            <canvas className="w-full h-24 bg-gray-200"></canvas>
                        </div>
                    </div>
                </div>
                <div className="w-[400px] h-[500px] border text-center items-center border-blue-800 rounded-md border-2 bg-white">
                   
                    <img src="your-image-source.jpg" alt="Descriptive Alt Text" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="flex text-left justify-center space-x-2 border text-center  border-blue-800 rounded-md border-2 bg-white p-4">
            <h2 className="text   font-semibold mb-4">Statistiques participants</h2>
            </div>

            <div className="flex space-x-4">

                <div className="flex-1 flex space-x-4 border text-center items-center border-blue-800 rounded-md border-2 bg-white p-4">
                    <div className="w-1/2">
                        <h2 className="text font-semibold mb-4">Qualité des participants</h2>
                        <canvas className="w-full h-24 bg-gray-200"></canvas>
                    </div>
                    <div className="w-1/2">
                        <h2 className="text font-semibold mb-4">Appartenance des participants</h2>
                        <canvas className="w-full h-24 bg-gray-200"></canvas>
                    </div>
                    <div className="w-1/2">
                        <h2 className="text font-semibold mb-4">Appartenance des participants</h2>
                        <canvas className="w-full h-24 bg-gray-200"></canvas>
                    </div>
                </div>

                <div className="border text-center items-center border-blue-800 rounded-md border-2 bg-white p-4">
                    <h3 className="text-lg font-semisemibold">Organismes</h3>
                    <div className="flex items-end justify-center mt-4 mb-4">
                        <button className="text-gray-400 hover:text-gray-600 mx-2">
                            <img src="src/assets/img/fll.png" alt="flesgh" width={"25px"} />
                        </button>
                        <img src="src/assets/img/OrganisationMondiale.png" alt="Organisation mondiale de la Santé" className="h-24 mx-4" />
                        <button className="text-gray-400 hover:text-gray-600 mx-2">
                            <img src="src/assets/img/flr.png" className='pt-1' alt="flesgh" width={"24px"} />
                        </button>
                    </div>
                    <p className="text-3xl font-semibold mb-4">100 P</p>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
