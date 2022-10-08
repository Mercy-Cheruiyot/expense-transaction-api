import React ,{useState,useEffect}from "react";
import Form from "./Form";
import Filter from "./Filter";
import Transaction from "./Transaction";

function TransactionList(){

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [transactions,setTransactions]=useState([])
  useEffect(() => {
    fetch("http://localhost:4000/transactions")
      .then((r) => r.json())
      .then((transactions) => setTransactions(transactions));
  }, []);
  function handleUpdateTransaction(updatedTransaction) {
    const updatedTransactions = transactions.map((transaction) => {
      if (transaction.id === updatedTransaction.id) {
        return updatedTransaction;
      } else {
        return transaction;
      }
    });
    setTransactions(updatedTransactions);
  }
 
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }
 
  function handleDeleteTransaction(deletedTransaction) {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== deletedTransaction.id);
    setTransactions(updatedTransactions);
  }
  function handleAddTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }
  const transactionsToDisplay = transactions.filter((transaction) => {
    if (selectedCategory === "All") return true;

    return transaction.category === selectedCategory;
  });

  return (
    
    <div className="form max-w-m mx-auto w-96">
        
    <h1 className='font-bold pb-4 text-xl'>Transaction</h1>
    <Form onAddTransaction={handleAddTransaction}/>
    <div className="flex flex-col py-8 gap-3"> 
    <h1 className='py-4 font-bold text-xl'>History</h1>
    <Filter category={selectedCategory} onCategoryChange={handleCategoryChange}/>
    <ul>
    {transactionsToDisplay.map((transaction,i) => (
      <Transaction key={transaction.id}
          transaction={transaction} 
      onDeleteTransaction={handleDeleteTransaction}
      onupdateTransaction={handleUpdateTransaction}/>
      ))}                        
    </ul>
   
    
    </div>
    </div>
    );
  }

export default TransactionList;
