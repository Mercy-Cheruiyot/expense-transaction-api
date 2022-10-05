import React, {useState} from "react";


function Budget (){
    const [name, setName] = useState("");
    const [amount, setAmount]=useState(0)
    const [totalBudget,setTotalBudget]=useState(setAmount)
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${name}`)
    }
    return (
        <form onSubmit={handleSubmit}>
          <label>Total Budget:
            <input 
              type="text" 
              value={totalBudget}
              onChange={(e) => setTotalBudget(+e.target.value)}
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
export default Budget;