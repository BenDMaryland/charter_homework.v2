
import './App.css';
import { recordSorter, fetchMockTransactions } from './services/transaction.api'
import { useState, useEffect } from 'react'
import RewardsTable from './components/RewardsTable';



function App() {
  const [transactionsByMonth, setTransactionsByMonth] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    setIsLoading(true)
    fetchMockTransactions()
      .then(r => {
        setTransactionsByMonth(recordSorter(r))
        setIsLoading(false)
      })
      .catch(error => {
        setIsLoading(false)
        console.warn(error)
      })

  }, [])




  return (
    <div className="App">
      {isLoading ? <p>Loading</p>
        : Object.keys(transactionsByMonth).map(month => {
          return (<RewardsTable month={month} transactions={transactionsByMonth[month]} key={month} />)
        })
      }
    </div>
  );
}

export default App;
