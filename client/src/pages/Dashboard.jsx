import React from 'react';
import PieChart from '../components/PieChart.jsx'
// import LineChart from '../components/LineChart.jsx'
import Rectangle from '../assets/img/A-Simple-Guide-n-How-to-Includ-unscreen.gif';


const Dashboard = () => {
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
    <div>
      <h2 className="text-xl font-bold mb-2" style={{ marginTop: '-50px' }}>Dashboard</h2>
      <div className="bg-[#e8e7e740] backdrop-blur-md rounded-lg p-6 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className='md:col-span-3'>
            {/* chart js 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className='md:col-span-2'> 
                <div className="border-2 border-blue-800 text-center p-6 bg-white rounded-lg ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div style={{ width: '200px' }}>
                    <PieChart data={data} labels={labels} backgroundColor={backgroundColor} type={"pie"} />
                  </div>
                  <div style={{ width: '200px' }}>
                    <PieChart data={data2} labels={labels2}  backgroundColor={backgroundColor2} type={"pie"} />
                  </div>
                  </div>
                </div>
              </div>
              <div className="border text-center items-center border-blue-800 rounded-md border-2 bg-white">
                <h3 className="text-lg font-semibold">Organismes</h3>
                <div className="flex items-end justify-center mt-4 mb-4">
                  <button className="text-gray-400 hover:text-gray-600 mx-2">
                    <img src="src/assets/img/fll.png" alt="flesgh" width={"25px"} />
                  </button>
                  <img src="src/assets/img/OrganisationMondiale.png" alt="Organisation mondiale de la Santé" className="h-24 mx-4" />
                  <button className="text-gray-400 hover:text-gray-600 mx-2">
                    <img src="src/assets/img/flr.png" className='pt-1' alt="flesgh" width={"24px"} />
                  </button>
                </div>
                <p className="text-3xl font-bold">100 P</p>
              </div>
            
            </div>
          {/* chart js 2 */}
          <div className="flex justify-center border-2 items-center border-blue-800 text-center p-6 mt-3 bg-white/50 backdrop-blur-md  rounded-lg">
            <div style={{ width: '420px' }}>
              <h1 className='font-bold '>Evolution du nombre de participants par annee</h1>
              <PieChart data={dataLine} labels={labelsLine}  backgroundColor={["blue"]} type={"bar"} />
            </div>
          </div>
          
          </div>
          {/* chart js for email status */}
          <div>
            <div className="flex justify-center text-[15px] shadow-lg items-center border-blue-800 text-center p-6  bg-white/50 backdrop-blur-md  rounded-lg">
              <div className="div">
                 <div className="flex items-center">
                    <div className="w-2/3 text-left text-[#2B3990] font-bold pl-4">
                        <h3 className="text-3xl">Emails</h3>
                        <h3 className="text-3xl">Status</h3>
                    </div>
                    <img src={Rectangle} alt="" className='max-w-32' />
                 </div>
                <div style={{ width: '230px' }}>
                <PieChart  data={emailData} labels={labelsEmail}  backgroundColor={backgroundColorEmail} type={"doughnut"} />
                </div>
                <div className='flex justify-between items-center font-bold pt-5 text-blue-800' >
                  <p>Types d’opération</p>
                  <p>Mail</p>
                </div>
                <div  className='flex justify-between items-center font-bold pt-5 text-blue-800'>
                  <p className='flex  justify-between  gap-3 items-center'> 
                    <div className="color left" style={{backgroundColor:'blue', width:"15px", height:"15px"}}></div> 
                    Envoyer</p>
                  <p>500</p>
                </div>
                <div className='flex justify-between items-center font-bold pt-5 text-blue-800'>
                <p className='flex gap-3 items-center'> 
                  <div className="color left" style={{backgroundColor:'red', width:"15px", height:"15px"}}></div> 
                  En attente</p>
                  <p>200</p>
                </div>
                <div className='flex justify-between items-center font-bold pt-5 text-blue-800'>
                <p className='flex gap-3 items-center'> 
                  <div className="color " style={{backgroundColor:'green', width:"15px", height:"15px"}}></div> 
                  Programée</p>
                  <p>363</p>
                </div>
              </div>
            
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
