import React from "react";
import 'boxicons';



export default function Transaction({ transaction,i,onUpdateTransaction, onDeleteTransaction}){
  const{id,  name,amount,category}=transaction;

  // fetch(`http://localhost:4000/items/${transaction.id}`, {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     amount,
  //   }),
  // })
  //   .then((r) => r.json())
  //   .then((updatedTransaction) => onUpdateTransaction(updatedTransaction));


      
    function handleDeleteClick() {
        // Call onDeleteItem, passing the deleted item
        fetch(`http://localhost:4000/transactions/${transaction.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => onDeleteTransaction(transaction));
           
    }
        //if(!category) return null;
        return (
            <div className="item flex justify-center bg-gray-50 py-2 rounded-r"
             style={{ borderRight : `8px solid ${category.color ??  "#e5e5e5"}`}}>
              <button onClick={handleDeleteClick}  className='px-3'>
              <box-icon 
                 size="15px" name="trash" >
                    </box-icon>
              </button>
                
                    <tbody>
                <tr>
                    <th> Id</th>
                    <th>Category</th> 
                    <th>Name</th>
                    <th>Amount</th>
                </tr>
                <tr key={i}>
                    <td>{id}</td>
                       <td>{category}</td>
                         <td>{name}</td>
                     <td>{amount}</td> 
                    </tr>
                    </tbody>
                    {/* <button onclick={handleDeleteClick}  className='px-3'>
                    <box-icon 
                
                color={category.color} size="15px" name="trash" >
                    </box-icon></button>    */}

                <span className='block w-full'>{category.name ?? ''}</span>
            </div>
        );
    }