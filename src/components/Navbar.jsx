import React, { useContext } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <span className="logo text-xl font-semibold">Lama Chat</span>
      <div className="user flex items-center space-x-2">
        <img src={currentUser.photoURL} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
        <span className="text-sm">{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)} className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
