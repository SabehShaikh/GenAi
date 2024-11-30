import React from "react";

type Props = {
  name: string;
  classDay: string;
  role: string;
};

const InfoCard = ({ name, classDay, role }: Props) => {
  return (
    <div className="flex justify-center items-center m-4">
      <div className="bg-white w-60 text-gray-800 flex flex-col justify-center 
      items-center p-6 rounded-lg shadow-xl border border-gray-200
       hover:shadow-2xl transition-shadow duration-300">
        
        <div className="flex gap-2 mb-2 items-center">
          <p className="font-semibold text-gray-600">Name:</p>
          <p className="text-lg font-medium text-gray-900">{name}</p>
        </div>

        <div className="flex gap-2 mb-2 items-center">
          <p className="font-semibold text-gray-600">Class:</p>
          <p className="text-lg font-medium text-gray-900">{classDay}</p>
        </div>

        <div className="flex gap-2 items-center">
          <p className="font-semibold text-gray-600">Role:</p>
          <p className="text-lg font-medium text-gray-900">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
