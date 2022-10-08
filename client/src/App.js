import './App.css';
import React,{useState} from 'react'
import Graph from './components/Graph';
import Header from './components/Header'
//import Form from './components/Form';
import TransactionList from './components/TransactionList';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
 
  
 
    
  // useEffect(() => {
  //   fetch("http://localhost:4000/transactions")
  //     .then((r) => r.json())
  //     .then((transactions) => setTransactions(transactions));
  // }, []);

  // function handleAddItem(newTransaction) {
  //   setTransactions([ ...transactions, newTransaction]);
  //  }


  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
  <div className={"App " + (isDarkMode ? "dark" : "light")}>
    <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
      <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Expense Tracker</h1>
     <Header
      isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}
      />
      {/* grid columns */}
      <div className="grid md:grid-cols-2 gap-4">
          {/* Chart */}
          <Graph></Graph>
          {/* Form */}
          <TransactionList/>
      </div>
        
    </div>
  </div>
  );
}

export default App;
