"use client"
import React, { useState, useEffect } from 'react';
import "./index.scss";
import CreateButton from "./../button/create";
import UpdateButton from "./../button/update";


const Form = ({ mode, onSubmit, initialData, onClose, data }:any) => {
  interface FormData{
    id: number;
    nome: string;
    codigo: string;
    descricao: string;
    preco: string;
  }
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    id: 0,
    nome: "",
    codigo: "",
    descricao: "",
    preco: "0",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(formData);
  };

 /*  useEffect(() => {
    if (mode === "update" && initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        id: 0,
        nome: '',
        codigo: '',
        descricao: '',
        preco: '',
      });
    }
  }, [mode, initialData]); */

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(formData);
    setShowForm(false);
    onClose();
  };

  /* const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      nome: '',
      codigo: '',
      descricao: '',
      preco: '',
    });
  }; */

  return (
    <>
      <div className={ "mb-8 form-class rounded"}>
        <button onClick={() => {setShowForm(false)}}>X</button>
        <form>
        
          <div className="flex mb-4">
            <input type="number" className='hidden' value={data.id} />
            <label htmlFor="nome" className="w-1/4 mr-4">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome !== "" ? formData.nome : data.nome}
              onChange={handleChange}
              className="flex-1 p-2 border border-gray-300"
              required
            />
          </div>

          <div className="flex mb-4">
            <label htmlFor="codigo" className="w-1/4 mr-4">
              codigo:
            </label>
            <input
              type="number"
              id="codigo"
              name="codigo"
              value={formData.codigo != "" ? formData.codigo : data.codigo}
              onChange={handleChange}
              className="flex-1 p-2 border border-gray-300"
              required
            />
          </div>

          <div className="flex mb-4">
            <label htmlFor="descricao" className="w-1/4 mr-4">
              Descrição:
            </label>
            <input
              type="tel"
              id="descricao"
              name="descricao"
              value={formData.descricao !== "" ? formData.descricao : data.descricao}
              onChange={handleChange}
              className="flex-1 p-2 border border-gray-300"
              required
            />
          </div>

          <div className="flex mb-4">
            <label htmlFor="preco" className="w-1/4 mr-4">
              Preço:
            </label>
            <input
              type="number"
              id="preco"
              name="preco"
              value={formData.preco != "" ? formData.preco : data.preco}
              onChange={handleChange}
              className="flex-1 p-2 border border-gray-300"
              required
            />
          </div>

          {/*Esses botões servem apenas para enviar os dados */}
          {mode === "create" ?  (

            <CreateButton usuario={formData} />
          ) : (
            <UpdateButton usuario={formData} />
          )}

          {/* <UpdateButton usuario={data}/> */}

          {/* <button type="submit" className="px-4 py-2 bg-blue-500 text-white mr-2">
          Adicionar
          </button> */}
       </form>
      </div>
      
    </>
  );
};

const App = ()=>{
  
  return(
  <>
  </>
  );}

export default Form;
