import React from 'react';
import PieChart from '../components/PieChart.jsx'
// import LineChart from '../components/LineChart.jsx'


const Dashboard = () => {
  const data = [300, 50, 100, 40, 120];
  const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple'];
  const backgroundColor =  ['#006400', '#008000', '#228B22', '#00FF00', '#ADFF2F'];

  const labels2 = ['Red', 'Blue', 'Yellow', 'Green', 'Purple'];
  const data2 = [300, 50, 100, 40, 120];
  const backgroundColor2 = ['#FFA500', '#FFD700', '#FFB347', '#FFC107', '#FF9800'];


  const dataLine = [12, 19, 3, 5, 2, 3];
  const labelsLine = ['2017', '2018', '2019', '2020', '2021', '2022'];

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Dashboard</h2>
      <p>Welcome to the dashboard.</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className='md:col-span-3'>
          {/* chart js 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className='md:col-span-2'> 
              <div className="border-blue-600 text-center p-6 bg-white rounded-lg shadow-lg ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div style={{ width: '230px' }}>
                  <PieChart data={data} labels={labels} backgroundColor={backgroundColor} type={"pie"} />
                </div>
                <div style={{ width: '230px' }}>
                  <PieChart data={data2} labels={labels2}  backgroundColor={backgroundColor2} type={"pie"} />
                </div>
                </div>
              </div>
            </div>
            <div className="border-blue-600 text-center p-6 bg-white rounded-lg shadow-lg ">
              <h2 className="text-lg font-semibold mb-4">Organismes</h2>
              <div className="flex items-center justify-center mb-4">
                <button className="text-gray-400 hover:text-gray-600 mx-2">
                  <img src="src/assets/img/fll.png" alt="flesgh" width={"25px"} />
                </button>
                <img src="src/assets/img/OrganisationMondiale.png" alt="Organisation mondiale de la Santé" className="h-24 mx-4" />
                <button className="text-gray-400 hover:text-gray-600 mx-2">
                <img src="src/assets/img/flr.png" className='pt-1' alt="flesgh" width={"24px"} />
                </button>
              </div>
              <div className="text-blue-600 text-3xl font-bold">
                100 P
              </div>
            </div>
          </div>
         {/* chart js 2 */}
         <div className="flex justify-center items-center border-blue-600 text-center p-6 mt-3 bg-white rounded-lg shadow-lg">
          <div style={{ width: '430px' }}>
            <h1>Evolution du nombre de participants par annee</h1>
            <PieChart data={dataLine} labels={labelsLine}  backgroundColor={["blue"]} type={"bar"} />
          </div>
         </div>
        
        </div>
         {/* chart js for email status */}
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
