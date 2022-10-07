import React from "react";
import 'boxicons';



export default function Transaction({ transaction,onUpdateTransaction, onDeleteTransaction}){
  const{  name,amount,category}=transaction;


    function handleDeleteClick() {
        // Call onDeleteItem, passing the deleted item
        fetch(`http://localhost:4000/transactions/${transaction.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => onDeleteTransaction(transaction.id));
           

    }
        if(!category) return null;
        return (
            <div className="item flex justify-center bg-gray-50 py-2 rounded-r"
             style={{ borderRight : `8px solid ${category.color ??  "#e5e5e5"}`}}>
                <button className='px-3'>
                    <box-icon data-id={category._id ?? '' } 
                onclick={handleDeleteClick} 
                color={category.color} size="15px" name="trash" >
                    </box-icon></button>   
                    <table className="table">
                        <td className="th">{category}</td>
                        <td className="th">{name}</td>
                        <td className="th">{amount}</td>
                    </table>
                <span className='block w-full'>{category.name ?? ''}</span>
            </div>
        )
    }