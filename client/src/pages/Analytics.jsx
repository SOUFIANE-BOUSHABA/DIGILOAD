import React from "react";
import PieChart from '../components/PieChart.jsx'

const Analytics = () => {

    const data = [300, 50, 100, 40, 120];
    const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple'];
    const backgroundColor =  ['#006400', '#008000', '#228B22', '#00FF00', '#ADFF2F'];
  
    const labels2 = ['Red', 'Blue', 'Yellow', 'Green', 'Purple'];
    const data2 = [300, 50, 100, 40, 120];
    const backgroundColor2 = ['#FFA500', '#FFD700', '#FFB347', '#FFC107', '#FF9800'];
  
  
    const dataLine = [12, 19, 3, 5, 2, 3];
    const labelsLine = ['2017', '2018', '2019', '2020', '2021', '2022'];
  
    
    const emailData = [500, 200,363];
    const labelsEmail = ['Envoyer', 'En attente', 'Programée'];
    const backgroundColorEmail = ['blue', 'red', 'green'];

    
    return (
        <div className=" p-4 space-y-4">

            <div className="flex space-x-4">

                <div className="flex-1 grid grid-cols-1 gap-4">
                    <div className="border text-center flex flex-col justify-center items-center border-blue-800 rounded-md border-2 w-full  bg-white pt-4 pb-8" style={{ height: '242px' }} >
                        <h2 className="text font-semibold mb-2">Evolution du nombre de participants par an</h2>
                        <PieChart data={dataLine} labels={labelsLine}  backgroundColor={["blue"]} type={"bar"} className=""  />
                    </div>
                    <div className="flex  space-x-4 border text-center items-center border-blue-800 rounded-md border-2 bg-white p-4"  style={{ height: '242px' }}>
                        <div className="w-1/2 flex flex-col items-center justify-center">
                            <h2 className="text font-semibold mb-2">Qualité des participants</h2>
                            <div style={{ width: '190px' }}>
                                <PieChart data={data}  backgroundColor={backgroundColor} type={"pie"} />
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col items-center justify-center">
                            <h2 className="text font-semibold mb-2">Appartenance des participants</h2>
                            <div style={{ width: '190px' }}>
                                <PieChart data={data2}  backgroundColor={backgroundColor2} type={"pie"} />
                            </div>
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
