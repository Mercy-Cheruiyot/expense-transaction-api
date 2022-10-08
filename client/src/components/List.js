// import React,{useState, useEffect} from 'react'
// import Transaction from "./Transaction"
//  //import Filter from "./Filter"


// export default function List({ item,onUpdateItem, onDeleteItem }) {

//   fetch(`http://localhost:4000/items/${item.id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       isInCart: !item.isInCart,
//     }),
//   })
//     .then((r) => r.json())
//     .then((updatedItem) => onUpdateItem(updatedItem));


//       function handleDeleteClick() {
//         // Call onDeleteItem, passing the deleted item
//         fetch(`http://localhost:4000/items/${item.id}`, {
//           method: "DELETE",
//         })
//           .then((r) => r.json())
//           .then(() => onDeleteItem(item));
//       }

//     // function handleCategoryChange(category) {
//     //     setSelectedCategory(category);
//     //   }
  
//     //   function handleUpdateTransaction(updatedTransaction) {
        
//     //     const updatedTransaction = transaction.map((transaction) => {
//     //       if (transaction.id === updatedTransaction.id) {
//     //         return updatedTransaction;
//     //       } else {
//     //         return transaction;
//     //       }
//     //     });
//     //     setTransactions(updatedTransaction);
//     //   }
    
//     //   const transactionsToDisplay = transactions.filter((transaction) => {
//     //     if (selectedCategory === "All") return true;
    
//     //     return transaction.category === selectedCategory;
//     //   });
        
              

//     return (
//             <div className="flex flex-col py-8 gap-3">
//                 <h1 className='py-4 font-bold text-xl'>History</h1>
//                 <Filter
//                       category={selectedCategory}
//                       onCategoryChange={handleCategoryChange}
//                     />
//                     <ul >

// {/*                     
//                 {transactions.map((transaction, i) => (<Transaction>
//                     <tr key={i}>
//                        <td>{transaction.name}</td>
//                          <td>{transaction.category}</td>
//                      <td>{transaction.amount}</td> 
//                     </tr>
//                     </Transaction>
//                 ))}
//             </tbody> */}
           
//                        {transactionsToDisplay.map((transaction,i) => (
//                         <Transaction key={i}
//                             transaction={transaction} 
//                         //  {/* <td>name={transaction.name}</td>
//                         //  <td>category={transaction.category}</td>
//                         //  <td>amount={transaction.amount}</td> */}
                        
//                         //  {/* onUpdateTransaction={handleUpdateTransaction}
//                          onDeleteTransaction={handleDeleteTransaction}
//                         />
//                       ))} 
//                     </ul>
                
//             </div>
//           )
//         }

        
              
        