import React from "react";
import { useEffect,useState } from 'react'
import Transaction from "./Transaction";

function TransactionList(){
  const [search, setSearch] = useState('');
 
  const [transactions,setTransactions]= useState([])
    useEffect(() => {
  
    fetch("http://localhost:8002/transactions")
    .then(res => res.json())
    .then(data => {setTransactions(data)})
    },[]);

  /*const trans=transactions.filter(transaction => {
      if (search === '') {
        return true;
      }else
      return transaction.description.includes(search);
      return transaction.amount.includes(search)
    })*/
  return (
    <table >
      <tbody>
        { <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr> }

        {transactions.map(transaction => {
          return (
          <Transaction
          key={transaction.id}
          date={transaction.date}
          description={transaction.description}
          category={transaction.category}
          amount={transaction.amount}
  
          />
        );
          }
        ) 
      }
      
      
      
      </tbody>
    </table>
  );
}

export default TransactionList;


