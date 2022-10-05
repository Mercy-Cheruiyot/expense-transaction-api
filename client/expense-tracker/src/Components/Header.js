import React from "react";
import image from  "../images/calcimg.jpg"

function Header(){
    // const [income,setIncome]=useState("");
    // const [expense ,setExpense]=useState("")
    // const [balance,setBalance]=useState(setIncome-setExpenses)
    return(
        <div>
        <h1>Expense Tracker</h1>
        <h4> Keeping Track Your Finances </h4>

       <img src={image} alt="Funds"  style={{
            resizeMode: "contain",
            height: 400,
            width: 400
          }}
        />
      
        </div>
    );
}
export default Header;