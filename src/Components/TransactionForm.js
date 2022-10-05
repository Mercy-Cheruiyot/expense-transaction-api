import React, {useState} from "react";


function TransactionForm (){
    const [name, setName] = useState("");
    const [totalAmount, setTotalAmount]=useState("Amount")
    const [amount,setAmount]=useState("")
    const [category,setCategory]=useState("Food")

    
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${name}`)
    }
    return (
        <form onSubmit={handleSubmit}>
          <label>Total Amount Spent:
            <input 
              type="text" 
              value={totalAmount}
              onChange={(e) => setTotalAmount(+e.target.value)}
            />
          </label>
          
          <label>Name:
            <input 
              type="text" 
              value={name}
              placeholder='Budgets Name'
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <select value={category} onChange={(e)=>setCategory(e.target.value)}>
             <option value="Food">Food</option>
             <option value="Clothes" >Clothes</option>
             <option value="Others">Others</option>
             </select>
          <label>Amount:
            <input 
              type="text" 
              value={amount}
              placeholder='Amount'
              onChange={(e) => setAmount(+e.target.value)}
            />
          </label>

          <input type="submit" />
        </form>
      )
}
export default TransactionForm;