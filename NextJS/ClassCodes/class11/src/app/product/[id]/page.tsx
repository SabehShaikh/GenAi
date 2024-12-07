import React from "react";

const page = async (props: any) => {
  const id = props.params.id;

  const singleBookData = await fetch(
    `https://simple-books-api.glitch.me/books/${id}`
  );
  const jsonBookData = await singleBookData.json();
  console.log("single book:", jsonBookData);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="font-bold text-3xl text-blue-600 mb-4">Book Details</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-2">   Book ID: {jsonBookData.id}</h2>

        <h2 className="text-lg font-semibold mb-2">  Book Name: {jsonBookData.name}</h2>
       
        <h2 className="text-lg font-semibold mb-2">    Author: {jsonBookData.author}</h2>
       
        <h2 className="text-lg font-semibold mb-2">   Price: ${jsonBookData.price} </h2>

        <h2 className="text-lg font-semibold mb-2">  Available: {jsonBookData.available ? "Yes" : "No"}</h2>

        <h2 className="text-lg font-semibold">  Current Stock: {jsonBookData["current-stock"]}</h2>
      </div>
    </div>
  );
};

export default page;
