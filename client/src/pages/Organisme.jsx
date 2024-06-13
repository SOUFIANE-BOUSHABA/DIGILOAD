import React, { useState } from 'react';
import axios from '../axiosConfig';
import '../assets/css/Profile.css';
import linkedInIcon from '../assets/img/LinkedIn - Negative.png';
import twitterIcon from '../assets/img/Twitter - Negative.png';
import facebookIcon from '../assets/img/Facebook - Negative.png';
import instagramIcon from '../assets/img/Instagram - Negative.png';
import profileBg from '../assets/img/profileBg.png';

const Organisme = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    birthDay: '',
    sexe: '',
    Qualite: '',
    Pays: '',
    Intitule: '',
    Ville: '',
    Secteur: '',
    Langue: '',
    Formation: '',
    organisme: '',
    LinkedIn: '',
    twitter: '',
    FaceBook: '',
    Instagram: '',
    Inscription_date145: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/createProfile', formData);
      console.log(response.data); 
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

  return (
    <div className="rounded-md">
      <div className="flex gap-8">
        <div className="left fllou bg-[#2B39900F] rounded-xl p-4 px-6 pt-20 text-center w-2/3 shadow">
          <h2 className="text-xl font-bold mb-2">Profile</h2>
          <span className="inline-flex items-center mb-4 rounded-md bg-green-200 px-2 py-1 text-[10px] font-medium text-green-500">Lorem ipsum</span>
          <div className="space-y-5">
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Nom" className="form-input" />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Prénom" className="form-input" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" className="form-input" />
            <input type="tel" name="tel" value={formData.tel} onChange={handleChange} placeholder="Numéro de téléphone" className="form-input" />
            <input type="date" name="birthDay" value={formData.birthDay} onChange={handleChange} placeholder="Date de naissance" className="form-input" />
            <input type="text" name="sexe" value={formData.sexe} onChange={handleChange} placeholder="Sexe" className="form-input" />
          </div>
        </div>
        <div className="right">
          <div className="fllou bg-[#2B399029] rounded-xl pt-28 p-4 px-6">
            <div className="flex gap-4">
              <div className="space-y-4">
                <input type="text" name="Pays" value={formData.Pays} onChange={handleChange} placeholder="Pays" className="form-input" />
                <input type="text" name="Ville" value={formData.Ville} onChange={handleChange} placeholder="Ville" className="form-input" />
                <input type="text" name="Langue" value={formData.Langue} onChange={handleChange} placeholder="Langue" className="form-input" />
                <input type="text" name="organisme" value={formData.organisme} onChange={handleChange} placeholder="Organisme de financement" className="form-input" />
              </div>
              <div className="space-y-4">
                <input type="text" name="Qualite" value={formData.Qualite} onChange={handleChange} placeholder="Qualité" className="form-input" />
                <input type="text" name="Intitule" value={formData.Intitule} onChange={handleChange} placeholder="Intitulé" className="form-input" />
                <input type="text" name="Secteur" value={formData.Secteur} onChange={handleChange} placeholder="Secteur" className="form-input" />
                <input type="text" name="Formation" value={formData.Formation} onChange={handleChange} placeholder="Formation PV" className="form-input" />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="mt-6">
                <h2 className="text-xl text-blue-800 font-bold mb-4">Social Media</h2>
                <div className="space-y-2 social-media">
                 
                <div className="flex items-center space-x-2">
                    <input type="text" name="LinkedIn" value={formData.LinkedIn} onChange={handleChange} placeholder="Link" className="form-input flex-1" />
                    <img src={linkedInIcon} alt="LinkedIn" className="h-6 w-6 p-1 bg-white rounded" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="text" name="twitter" value={formData.twitter} onChange={handleChange} placeholder="Link" className="form-input flex-1" />
                    <img src={twitterIcon} alt="Twitter" className="h-6 w-6 p-1 bg-white rounded" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="text" name="FaceBook" value={formData.FaceBook} onChange={handleChange} placeholder="Link" className="form-input flex-1" />
                    <img src={facebookIcon} alt="Facebook" className="h-6 p-1 bg-white rounded w-6" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="text" name="Instagram" value={formData.Instagram} onChange={handleChange} placeholder="Link" className="form-input flex-1" />
                    <img src={instagramIcon} alt="Instagram" className="h-6 w-6 p-1 bg-white rounded" />
                  </div>
                </div>
              </div>
              <div className="img grid items-center">
                <img src={profileBg} alt="User Avatar" />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-start">
            <button onClick={handleSubmit} className="bg-[#2B39906B] text-blue-900 p-4 py-2 rounded">Save Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organisme;
