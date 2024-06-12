import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Dashboard</h2>
      <p>Welcome to the dashboard.</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className='md:col-span-3'>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className='md:col-span-2'> 

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
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
