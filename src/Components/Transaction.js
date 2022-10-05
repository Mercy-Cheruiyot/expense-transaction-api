import React from "react";
//import ExpenseForm from "./ExpenseForm";
import TransactionForm from "./TransactionForm"

 function Transaction(){
    return(
        <div>
            <h2> Your Balance</h2>
            <h2> Transcations</h2>
            {/*Your Transactions Here    */}
            <TransactionForm/>
        </div>
    )
 }
 export default Transaction;