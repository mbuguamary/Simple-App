import React,{useState} from 'react'

function AddListForm() {
   const [transaction,setTransaction] = useState({}) ;
   const [state,setState] = useState({});

   function handleSubmitForm(e){
    e.preventDefault();
    fetch("http://localhost:8002/transactions", 
    {
    method: 'POST',
    headers: {
    "Content-Type": "application/json",
    "accept":"application/json"
    },
    body: JSON.stringify(state)
  })
    .then(res=>res.json())
    .then(data=>{
      setTransaction([
        ...transaction,data
      ])
    }) 
  }

   function handleChange(e){
   setState({...state,[e.target.name]: e.target.value})
   }

  return (
    <div>
        <form onSubmit={handleSubmitForm}>
            
             <input type="date" name="date" onChange={handleChange} />
          
            <input type="text" name ="description" placeholder="description" onChange={handleChange}/>
          
            <input type="text" name ="category" placeholder="category" onChange={handleChange}/>
          
            <input type="number" name= "amount" placeholder="amount"onChange={handleChange}/>
            <button className="ui button" type="submit"> Add Transaction
           </button>
        </form>
    </div>
  )
}

export default AddListForm