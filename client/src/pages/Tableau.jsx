import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import Filter from '../assets/img/Filter_alt_fill.png';
import '../assets/css/Tableau.css';

const Tableau = () => {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(2022);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  const fetchData = async () => {
    try {
      const response = await axios.get('/profiles');
      setProfiles(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  const toggleDropdown = (profileId) => {
    setDropdownOpen(dropdownOpen === profileId ? null : profileId);
  };

  return (
    <div className="rounded-md max-w-[1100px]">
      <div className="gap-8">
        <div className="container mb-4 mx-auto">
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

          <div className="flex justify-between mt-4">
            <div className="flex py-1 cursor-pointer lg:px-2 bg-green-400 text-white rounded items-center mb-2 lg:mb-0" onClick={toggleForm}>
              <img src={Filter} alt="" className="h-6" />
              Filters
            </div>
            <div className="flex gap-4">
              <div className="flex gap-4 bg-blue-200 px-4 lg:rounded text-[10px] text-center">
                <div className="grid">
                  <div className="rotate-90 cursor-pointer" onClick={handlePrevMonthClick}>{"<"}</div>
                  <div>{months[currentMonth]}</div>
                  <div className="rotate-90 cursor-pointer" onClick={handleNextMonthClick}>{">"}</div>
                </div>
                <div className="grid">
                  <div></div>
                  <div>|</div>
                  <div></div>
                </div>
                <div className="grid">
                  <div className="rotate-90 cursor-pointer" onClick={handlePrevYearClick}>{"<"}</div>
                  <div>{currentYear}</div>
                  <div className="rotate-90 cursor-pointer" onClick={handleNextYearClick}>{">"}</div>
                </div>
              </div>
              <button className="bg-red-500 w-full lg:w-[200px] text-white py-1 px-2 rounded">select email</button>
            </div>
          </div>
        </div>

        {isFormVisible && (
          <div className="container mx-auto" id="formulaire">
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

        <div className="container mx-auto">
          <div className="flex overflow-hidden overflow-x-auto mx-auto items-center mb-8">
            <div className="w-full lg:rounded" style={{ maxHeight: '400px', overflowY: 'auto' }}>
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
                    <th scope="col" className="px-4 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">Qualité</th>
                    <th scope="col" className="px-4 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">Intitulé</th>
                    <th scope="col" className="px-4 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">Secteur</th>
                    <th scope="col" className="px-4 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">Formation PV</th>
                    <th scope="col" className="px-4 py-1 text-left text-[10px] font-medium text-gray-500 uppercase tracking-wider">Action</th>
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
                      <td className="px-4 py-1 text-[10px] relative">
                        <button
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          type="button"
                          onClick={() => toggleDropdown(profile.id)}
                        >
                          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                          </svg>
                        </button>

                        {dropdownOpen === profile.id && (
                          <div className="absolute z-10 right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-lg">
                            <ul className="py-2 text-sm text-gray-700">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
                                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 0h.01M7 16h10M5 8h14m1-5h-3.59a2 2 0 00-1.42.59L9.41 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2z" />
                                  </svg>
                                  Envoyer
                                </a>
                              </li>
                              <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
                                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0h-3.59a2 2 0 00-1.42.59L9.41 18H4a2 2 0 01-2-2V4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2z" />
                                  </svg>
                                  Modifier
                                </a>
                              </li>
                              <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center">
                                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                  Supprimer
                                </a>
                              </li>
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tableau;
