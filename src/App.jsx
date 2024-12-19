import Footer from "./components/footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import {useState} from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal(){
    setShowModal(!showModal);
  }
  return (
    <>
      <Main/>
      {showModal ? (
        <Sidebar handleToggleModal={handleToggleModal}/>
        ) : null }
      <Footer handleToggleModal={handleToggleModal}/>
    </>
  )
}

export default App
