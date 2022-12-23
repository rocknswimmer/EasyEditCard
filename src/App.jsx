import React from 'react';
import {useState} from 'react';
import Modal from './Modal.jsx';
import './App.css';

function App() {
  const [openCard, setOpenCard] = useState(false);

  const openModal = () => {
    setOpenCard(!openCard);
  }

  //This is going to be really ugly and bad practice for speed and easy since im using modals and accordians to do a silde show prezy within  a prezy cleaner loop without prezy commented out below
  return (
    <div className="App">
      <h1 className='text_shadows'>Merry Christmas Dad!</h1>
      <br/>
      <button onClick={openModal}>OPEN CARD!</button>
      {openCard &&
      <Modal
        close={() => {setOpenCard(!openCard);}}
        content={<div className='card'><div>Even when things are going rough for you, you still make sure I'm taken care of. So after checking my list twice, and obviously comming up nice, I'm glad to be able to gift you this custom card! In all seriousness though, Thank You So Much for all you have given me over the years!  </div>
        <br/>
        <div className='signature'>Merry Christmas,</div>
        <div className='signature'>Love Andy</div>
        </div>}
      />}
    </div>
  );
}

export default App;
