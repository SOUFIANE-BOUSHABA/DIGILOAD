import React, { useState } from 'react';
import '../assets/css/Profile.css';
import linkedInIcon from '../assets/img/LinkedIn - Negative.png';
import twitterIcon from '../assets/img/Twitter - Negative.png';
import facebookIcon from '../assets/img/Facebook - Negative.png';
import instagramIcon from '../assets/img/Instagram - Negative.png';
import profileBg from '../assets/img/profileBg.png';

const Organisme = () => {


  return (
    <div className="rounded-md">
      <div className="flex gap-8">
        <div className="left fllou bg-[#2B39900F] rounded-xl p-4 px-6 pt-20 text-center w-1/3 shadow">
          <h2 className="text-xl font-bold mb-2">InfinyBox</h2>
          <span className="inline-flex items-center mb-4 rounded-md bg-green-200 px-2 py-1 text-[10px] font-medium text-green-500">Lorem ipsum</span>
          <div className="space-y-5">
            <input type="text" name="firstName" value=""  placeholder="Nom" className="form-input" />
            <input type="text" name="Gérant" value=""  placeholder="Gérant" className="form-input" />
           
            <input type="text" name="Décideur" value=""  placeholder="Décideur" className="form-input" />
            <div className="border bg-white rounded flex flex-col justify-start p-2">
                <label htmlFor="budget" className=" text-left opacity-60 text-sm mb-3">Budget Total</label>
                <input   type="text" className="bg-[#7ED98136] text-center text-green-700 text-3xl font-bold form-input"  name="budget"    value="150K $"      readOnly  />
            </div>
          </div>
        </div>
        <div className="right flex-1">
          <div className="fllou bg-[#2B399029] rounded-xl pt-28 p-4 px-6">
            <div className="flex w-full  gap-4">
              <div className="space-y-4 w-full">
                <input type="text" name="nom" placeholder="Nom" className="form-input" />
                <input type="email" name="email_representant" placeholder="Email du représentant" className="form-input" />
                <input type="email" name="email_decideur" placeholder="Email du décideur" className="form-input" />
                <div className=" bg-white rounded flex h-[40px] justify-start p-2">
                    <label htmlFor="user_id" className=" w-1/6 text-left opacity-60 text-sm mb-3">User ID</label>
                    <input   type="text" className="bg-[#7ED98136] text-center text-green-700 text-3xl font-bold form-input"  name="user_id" readOnly  />
                </div>
              </div>
             
            </div>
            <div className="grid">
              <div className="mt-6">
                <h2 className="text-xl text-blue-800 font-bold mb-4">Social Media</h2>
                <div className="space-y-2 social-media">
                 
                <div className="flex items-center space-x-2">
                    <input type="text" name="LinkedIn" value=""  placeholder="Link" className="form-input flex-1" />
                    <img src={linkedInIcon} alt="LinkedIn" className="h-6 w-6 p-1 bg-white rounded" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="text" name="twitter" value=""  placeholder="Link" className="form-input flex-1" />
                    <img src={twitterIcon} alt="Twitter" className="h-6 w-6 p-1 bg-white rounded" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="text" name="FaceBook" value=""  placeholder="Link" className="form-input flex-1" />
                    <img src={facebookIcon} alt="Facebook" className="h-6 p-1 bg-white rounded w-6" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="text" name="Instagram" value=""  placeholder="Link" className="form-input flex-1" />
                    <img src={instagramIcon} alt="Instagram" className="h-6 w-6 p-1 bg-white rounded" />
                  </div>
                </div>
              </div>

              <div className="container flex justify-center bg-white p-6 mt-4 rounded-md">
                 <img src="src/assets/img/OrganisationMondiale.png" alt="Organisation mondiale de la Santé" className="h-24 mx-4" />
              </div>
             
            </div>
          </div>
          <div className="mt-8 flex justify-start">
            <button  className="bg-[#2B39906B] text-blue-900 p-4 py-2 rounded">Save Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organisme;
