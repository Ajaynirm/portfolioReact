import React, { useEffect, useState } from 'react'
import './footer.css'
const Footer = () => {
   const [joke,setJoke]=useState('');
   const [loading,setLoading] = useState(true);
   const fetchData = async () => {
    setLoading(true);
    try{
        const res= await fetch("https://jokes-always.p.rapidapi.com/common",{
         method:'GET',
         headers: {
          'x-rapidapi-key': '2116bf59ffmsh37f1981ef5f3c38p1e3a4djsn73743b4f9b71',
          'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
        }
        }
        );
        if(!res.ok){
            throw new Error("http error");
        }
        const data= await res.json();
        setLoading(false);
        setJoke(data)
    }
    catch(e){
      console.log(e);
    }
  };;
    useEffect( () => {
      fetchData();

    }
      ,[]);
  return (
    
    <div className='joke-container'>
    <h1>Joke</h1>
    <div className='joke-container2'>
       {
       (loading ? <div className='joke-text'>Loading...</div> : <div className='joke-text'>{JSON.stringify(joke.data, null, 2)}</div>)
       }
    </div>
   
    <button onClick={() => fetchData()} className='joke-change-btn'> change </button>
  </div>
    
  )
}

export default Footer;