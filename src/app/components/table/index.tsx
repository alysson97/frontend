"use client";
import React, { useState } from "react";
import DeleteButton from "./../button/delete";
import UpdateButton from "./../button/update";
import Form from "./../form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from '@fortawesome/free-solid-svg-icons';





export default function Page({data}: any) {
  //const jsonData = await getData();
  //const data = JSON.parse(jsonData);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [formMode, setFormMode] = useState("");

  const handleUpdateClick = (item: any) => {
    setFormData(item);
    setShowForm(true); 
    setFormMode("update")
  };

  const handleAddClick = () => {
    setShowForm(true);
    setFormMode("create");
  }

  const handleCloseForm = () => {
    setShowForm(false);
    setFormData({});
  };



  return (
    <div className="flex flex-col justify-between">
      {showForm && <Form data={formData} onClose={handleCloseForm} mode={formMode}/>}
      <div className="flex w-100 justify-end">
      <button
        onClick={() => handleAddClick()}
        className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white mr-2 rounded-xl mb-6"
      >Adcionar
      </button>
      </div>
      
        
      <table className="w-full border border-collapse border-gray-300 rounded-xl">
        <thead>
          <tr className="bg-gray-200 text-gray-950">
            <th className="p-2 border">Nome</th>
            <th className="p-2 border">codigo</th>
            <th className="p-2 border">Descrição</th>
            <th className="p-2 border">Preço</th>
            <th className="p-2 border">Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: number) => (
          <tr key={index}>
            <td className="p-2 border">{item.nome}</td>
            <td className="p-2 border">{item.codigo}</td>
            <td className="p-2 border">{item.descricao}</td>
            <td className="p-2 border">{item.preco}</td>
            <td className="p-2 border">
              
              <button
                onClick={() => handleUpdateClick(item)}
                className="px-2 py-1 bg-gray-500 text-white mr-2"
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <DeleteButton id={item.id} />
              {/* <UpdateButton
                onClick={() => handleUpdateClick(item)}
                usuario={item}
              /> */}
            </td>
          </tr>
        ))}
        </tbody>
        
      </table>
      
    </div>
  );
}
