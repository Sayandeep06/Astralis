import Footer from "./components/footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import {useEffect, useState} from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const NASA_KEY = import.meta.env.VITE_NASA_API;
  function handleToggleModal(){
    setShowModal(!showModal);
  }
  useEffect(()=>{
    async function fetchAPIData(){
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`

      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if(localStorage.getItem(localKey)){
        try{
          const apiData = JSON.parse(localStorage.getItem(localKey))
          setData(apiData)
          console.log('fetched from cache')
          return;
        }catch(err){
          console.error('Error parsing cached data', err);
          localStorage.removeItem(localKey);          
        }
      }
      localStorage.clear()

      try{
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('fetched form api')
      }catch(err){
        console.log(err.message);
      }   
    }
    fetchAPIData()
  },[])
  return (
    <>
      {data ? (<Main data={data}/>): (
        <div className="loadingState">
          <i className="fa-solid fa-gear"/>
        </div>
      )}
      {showModal ? (
        <Sidebar data={data} handleToggleModal={handleToggleModal}/>
        ) : null }
      {data && (<Footer data={data} handleToggleModal={handleToggleModal}/>)}
    </>
  )
}

export default App
