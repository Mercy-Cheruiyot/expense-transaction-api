import React,{useState,useEffect} from 'react'

//import List from './List';

export default function Form({onAddTransaction}) {
  
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Investment");
    const [amount, setAmount]=useState("");
   // const [transactions, setTransactions] = useState([]);


   
  
    function handleSubmit(e) {
        e.preventDefault();
        const transactionData = {
          name: name,
          category: category,
          amount: amount,
        };

       
        fetch("http://localhost:4000/transactions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(transactionData),
          })
            .then((r) => r.json())
            .then((newTransaction) => onAddTransaction(newTransaction));

             
  
    }

  return (
   

        <form id='form' onSubmit={handleSubmit}>
            <div className="grid gap-4">
                <div className="input-group">
                    <input type="text"
                     placeholder='Salary, House Rend, SIP'
                      className='form-input'
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)} />
                </div>
                <select className='form-input'  value={category}
          onChange={(e) => setCategory(e.target.value)}>
                    <option value="Investment">Investment</option>
                    <option value="Expense">Expense</option>
                    <option value="Savings">Savings</option>
                </select>
                <div className="input-group">
                    <input type="text"  value={amount}
          onChange={(e) => setAmount(e.target.value)} placeholder='Amount' className='form-input' />
                </div>
                <div className="submit-btn">
                    <button className='border py-2 text-white bg-indigo-500 w-full'>Make Transaction</button>
                </div>
              </div>
        </form>

        
    
  )
}