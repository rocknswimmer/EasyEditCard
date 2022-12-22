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
      <h1 className='text_shadows'>Merry Christmas</h1>
      <br/>
      <button onClick={openModal}>OPEN CARD!</button>
      {openCard &&
      <Modal
        close={() => {setOpenCard(!openCard);}}
        content={<div className='card'><div>Instead of just texting you "Merry Christmas" this year, I decided to send you a link to this generic card an internet stranger made! Hope a bit more thought and care goes into your New Year!</div>
        <br/>
        <div className='signature'>Happy Holidays, Love</div>
        <div className='signature'>Whoever Sent This Link</div>
        </div>}
      />}
    </div>
  );
}

export default App;
