import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from '../assets/img/Filter_alt_fill.png';
import '../assets/css/Tableau.css';

const Tableau = () => {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(2022);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [profiles, setProfiles] = useState([]);

  const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/profiles');
      setProfiles(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once, like componentDidMount

  const updateDateDisplay = () => {
    document.getElementById("month").innerText = months[currentMonth];
    document.getElementById("year").innerText = currentYear;
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handlePrevMonthClick = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonthClick = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handlePrevYearClick = () => {
    setCurrentYear(currentYear - 1);
  };

  const handleNextYearClick = () => {
    setCurrentYear(currentYear + 1);
  };

  return (
    <div className="rounded-md  border   max-w-2/3">
      <div className=" gap-8">
              

            <div className="container mx-auto p-6 ">
            <div className="flex justify-end">
            <div className="relative inline-block">
                <select name="export" id="export-select" className="block appearance-none w-[200px] bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                <option value="">Export list</option>
                <option value="csv">CSV</option>
                <option value="pdf">PDF</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M7 10l5 5 5-5H7z" />
                </svg>
                </div>
            </div>
            </div>

            <div className="flex    justify-between mt-4">
            <div className="flex py-1  cursor-pointer lg:px-2 bg-green-400 text-white rounded items-center mb-2 lg:mb-0" onClick={toggleForm}>
                <img src={Filter} alt="" className="h-6" />
                Filters
            </div>
            <div className="flex gap-4">
            <div className="flex gap-4 bg-blue-200 px-4 lg:rounded text-[10px] text-center">
                <div className="grid">
                <div className="rotate-90 cursor-pointer" onClick={handlePrevMonthClick}>{"<"}</div>
                <div id="month">{months[currentMonth]}</div>
                <div className="rotate-90 cursor-pointer" onClick={handleNextMonthClick}>{">"}</div>
                </div>
                <div className="grid">
                <div></div>
                <div>|</div>
                <div></div>
                </div>
                <div className="grid">
                <div className="rotate-90 cursor-pointer" onClick={handlePrevYearClick}>{"<"}</div>
                <div id="year">{currentYear}</div>
                <div className="rotate-90 cursor-pointer" onClick={handleNextYearClick}>{">"}</div>
                </div>
            </div>
            <button className="bg-red-500 w-full lg:w-[200px] text-white py-1 px-2 rounded">select email</button>
            </div>
            
            </div>
            </div>

            {isFormVisible && (
            <div className="container mx-auto  p-6" id="formulaire">
            <div className="filterElements flex flex-wrap gap-4">
                <input className="filterSection flex-1 p-2 mb-4 border border-gray-300 rounded" type="text" name="name" id="filterInput1" placeholder="Nom" />
                <input className="filterSection flex-1 p-2 mb-4 border border-gray-300 rounded" type="text" name="name" id="filterInput2" placeholder="Prénom" />
                <input className="filterSection flex-1 p-2 mb-4 border border-gray-300 rounded" type="email" name="email" id="filterInput3" placeholder="Email" />
                <input className="filterSection flex-1 p-2 mb-4 border border-gray-300 rounded" type="tel" name="tel" id="filterInput4" placeholder="Numéro de tel" />
                <input className="filterSection flex-1 p-2 mb-4 border border-gray-300 rounded" type="text" name="sexe" id="filterInput5" placeholder="Sexe" />
                <input className="filterSection flex-1 p-2 mb-4 border border-gray-300 rounded" type="text" name="pays" id="filterInput6" placeholder="Pays" />
                <input className="filterSection flex-1 p-2 mb-4 border border-gray-300 rounded" type="text" name="ville" id="filterInput7" placeholder="Ville" />
                <input className="filterSection flex-1 p-2 mb-4 border border-gray-300 rounded" type="text" name="langue" id="filterInput8" placeholder="Langue" />
                <input className="filterSection flex-1 p-2 mb-4 border border-gray-300 rounded" type="text" name="Qualité" id="filterInput9" placeholder="Qualité" />
                <input className="filterSection flex-1 p-2 mb-4 border border-gray-300 rounded" type="text" name="Organisme" id="filterInput10" placeholder="Organisme" />
                <input className="filterSection flex-1 p-2 mb-4 border border-gray-300 rounded" type="text" name="Intitulé" id="filterInput11" placeholder="Intitulé" />
                <input className="filterSection flex-1 p-2 mb-4 border border-gray-300 rounded" type="text" name="Secteur" id="filterInput12" placeholder="Secteur" />
                <input className="filterSection flex-1 p-2 mb-4 border border-gray-300 rounded" type="text" name="Formation" id="filterInput13" placeholder="Formation PV" />
            </div>
            </div>
            )}

            <div className="container mx-auto p-6">
            <div className="flex  overflow-hidden overflow-x-auto mx-auto items-center mb-8">
            <table className="overflow-x-auto w-full lg:rounded">
                <thead className="bg-gray-50 mb-4 rounded-md shadow-md">
                <tr>
                    <th scope="col" className="px-4 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-4 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                    <th scope="col" className="px-4 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">Prénom</th>
                    <th scope="col" className="px-4 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">E-mail</th>
                    <th scope="col" className="px-4 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">Téléphone</th>
                    <th scope="col" className="px-4 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">Date de naissance</th>
                    <th scope="col" className="px-4 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">Sexe</th>
                    <th scope="col" className="px-4 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">Pays</th>
                    <th scope="col" className="px-4 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">Ville</th>
                    <th scope="col" className="px-4 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">Langue</th>
                    <th scope="col" className="px-4 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">Organisme de financement</th>
                    <th scope="col" className="px-4  py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">Qualité</th>
                    <th scope="col" className="px-4 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">Intitulé</th>
                    <th scope="col" className="px-4 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">Secteur</th>
                    <th scope="col" className="px-4 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">Formation PV</th>
                </tr>
                </thead>
                <tbody className="mt-4 border shadow rounded text-bold backdrop-blur-lg bg-[rgba(252, 252, 252, 0.8)]">
                {profiles.map(profile => (
                    <tr key={profile.id}>
                        <td className="px-4 py-1 text-[10px]">{profile.id}</td>
                        <td className="px-4 py-1 text-[10px]">{profile.lastName}</td>
                        <td className="px-4 py-1 text-[10px]">{profile.firstName}</td>
                        <td className="px-4 py-1 text-[10px]">{profile.email}</td>
                        <td className="px-4 py-1 text-[10px]">{profile.tel}</td>
                        <td className="px-4 py-1 text-[10px]">{profile.birthDay}</td>
                        <td className="px-4 py-1 text-[10px]">{profile.sexe}</td>
                        <td className="px-4 py-1 text-[10px]">{profile.Pays}</td>
                        <td className="px-4 py-1 text-[10px]">{profile.Ville}</td>
                        <td className="px-4 py-1 text-[10px]">{profile.Langue}</td>
                        <td className="px-4 py-1 text-[10px]">{profile.organisme}</td>
                        <td className="px-4 py-1 text-[10px]">{profile.Qualite}</td>
                        <td className="px-4 py-1 text-[10px]">{profile.Intitule}</td>
                        <td className="px-4 py-1 text-[10px]">{profile.Secteur}</td>
                        <td className="px-4 py-1 text-[10px]">{profile.Formation}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>
            </div>
    </div>
    </div>
  );
};

export default Tableau;


