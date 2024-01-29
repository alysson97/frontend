"use client";
//import { get } from "http";
import { testeFunction } from "./functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface Usuario{
  id: number;
}

export default function Button(Usuario:Usuario) {

  const handleDeleteItem = (id:number)=>{
    fetch('http://localhost:8800/'+id,{method: 'delete', cache: 'no-store'})
      .then(()=>{console.log("requisição de delete enviada com sucesso")})
      .catch(()=>{console.log("erro ! requisição de delete não enviada")});
    //let getTeste = testeFunction();
    //console.log(getTeste);
  }
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleDeleteItem(Usuario.id);
          }
        }
        className="px-2 py-1 bg-red-500 text-white mr-2 rounded"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </>
  );
}
