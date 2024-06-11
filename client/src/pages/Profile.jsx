import React from 'react';
import '../assets/css/Profile.css';


import linkedInIcon from '../assets/img/LinkedIn - Negative.png';
import twitterIcon from '../assets/img/Twitter - Negative.png';
import facebookIcon from '../assets/img/Facebook - Negative.png';
import instagramIcon from '../assets/img/Instagram - Negative.png';
import profileBg from '../assets/img/profileBg.png';

const Profile = () => {
  return (
    <div className="rounded-md">
      <div className="flex gap-8">
        <div className="left fllou bg-[#2B39900F] rounded-xl p-4 px-6 pt-20 text-center w-2/3 shadow">
          <h2 className="text-xl font-bold mb-2">Profile</h2>
          <span className="inline-flex items-center mb-4 rounded-md bg-green-200 px-2 py-1 text-[10px] font-medium text-green-500">Lorem ipsum</span>
          <div className="space-y-5">
            <input type="text" placeholder="Nom" className="form-input" />
            <input type="text" placeholder="Prénom" className="form-input" />
            <input type="email" placeholder="E-mail" className="form-input" />
            <input type="tel" placeholder="Numéro de téléphone" className="form-input" />
            <input type="date" placeholder="Date de naissance" className="form-input" />
            <input type="text" placeholder="Sexe" className="form-input" />
          </div>
        </div>
        <div className="right">
          <div className="fllou bg-[#2B399029] rounded-xl pt-28 p-4 px-6">
            <div className="flex gap-4">
              <div className="space-y-4">
                <input type="text" placeholder="Pays" className="form-input" />
                <input type="text" placeholder="Ville" className="form-input" />
                <input type="text" placeholder="Langue" className="form-input" />
                <input type="text" placeholder="Organisme de financement" className="form-input" />
              </div>
              <div className="space-y-4">
                <input type="text" placeholder="Qualité" className="form-input" />
                <input type="text" placeholder="Intitulé" className="form-input" />
                <input type="text" placeholder="Secteur" className="form-input" />
                <input type="text" placeholder="Formation PV" className="form-input" />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="mt-6">
                <h2 className="text-xl text-blue-800 font-bold mb-4">Social Media</h2>
                <div className="space-y-2 social-media">
                  <div className="flex items-center space-x-2">
                    <input type="text" placeholder="Link" className="form-input flex-1" />
                    <img src={linkedInIcon} alt="LinkedIn" className="h-6 w-6 p-1 bg-white rounded" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="text" placeholder="Link" className="form-input flex-1" />
                    <img src={twitterIcon} alt="Twitter" className="h-6 w-6 p-1 bg-white rounded" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="text" placeholder="Link" className="form-input flex-1" />
                    <img src={facebookIcon} alt="Facebook" className="h-6 p-1 bg-white rounded w-6" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="text" placeholder="Link" className="form-input flex-1" />
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
            <button className="bg-[#2B39906B] text-blue-900 p-4 py-2 rounded">Save Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
