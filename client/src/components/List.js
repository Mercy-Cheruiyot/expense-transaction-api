import React,{useState, useEffect} from 'react'
import Transaction from "./Transaction"
 import Filter from "./Filter"


export default function List({}) {
    const [selectedCategory, setSelectedCategory] = useState("All");
     const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/transactions")
          .then((r) => r.json())
          .then((transactions) =>
          setTransactions(transactions)
           );}, []);
    
    //   function handleAddItem(newTransaction) {
    //    setTransactions([ ...transactions, newTransaction]);
    //   }

    function handleCategoryChange(category) {
        setSelectedCategory(category);
      }
    //   function handleDeleteTransaction(deletedTransaction) {
    //     const updatedTransactions = transactions.filter((transaction) => transaction.id !== deletedTransaction.id);
    //     setTransactions(updatedTransactions);
    //   }
    //   function handleUpdateTransaction(updatedTransaction) {
    //     const updatedTransaction = transaction.map((transaction) => {
    //       if (transaction.id === updatedTransaction.id) {
    //         return updatedTransaction;
    //       } else {
    //         return transaction;
    //       }
    //     });
    //     setTransactions(updatedTransaction);
      //}
    
    //   const transactionsToDisplay = transactions.filter((transaction) => {
    //     if (selectedCategory === "All") return true;
    
    //     return transaction.category === selectedCategory;
    //   });
        
              

    return (
            <div className="flex flex-col py-6 gap-3">
                <h1 className='py-4 font-bold text-xl'>History</h1>
                <Filter
                      category={selectedCategory}
                      onCategoryChange={handleCategoryChange}
                    />
                    <ul >
                      {transactions.map((transaction) => (
                        <Transaction key={transaction.id}
                            transaction={transaction}
                        //  {/* <td>name={transaction.name}</td>
                        //  <td>category={transaction.category}</td>
                        //  <td>amount={transaction.amount}</td> */}
                        
                        //  {/* onUpdateTransaction={handleUpdateTransaction}
                        //  onDeleteTransaction={handleDeleteTransaction} */}
                         />
                      ))}
                    </ul>
                
            </div>
          )
        }

        
              
        