import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import sofi from './sofi.png';
import cebu from './cebu.png';
import barbeque from './barbeque.png';
import carbonara from './carbonara.png';
import chocolate from './chocolate.png';
import friedchicken from './friedchicken.png';
import fries from './fries.png';
import icecream from './icecream.png';
import kwekwek from './kwekwek.png';
import pasta from './pasta.png';
import pizza from './pizza.png';
import sisig from './sisig.png';
import sushi from './sushi.png';
import steak from './steak.png';
import cat from './cat.gif'
import cat2 from './cat2.gif'

import './App.css';

function App() {
  const [x, setx] = useState(50.4);
  const [marks, setMarks] = useState([]);
  const [y, sety] = useState(76.6);
  const [startDate, setStartDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false); // State to control calendar visibility
  const [showMap, setShowMap] = useState(false); // State to control calendar visibility
  const [showMenu, setShowMenu] = useState(false); // State to control calendar visibility
  const [showKiss, setShowKiss] = useState(false); // State to control calendar visibility
  
  const handleMapClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setMarks([...marks, { x: offsetX, y: offsetY }]);
  };
  const form = useRef();

  const body = document.querySelector("body");
  if (!body) {
    throw new ReferenceError("Body section not found.");
  }

  function createHeart() {
    const heart = document.createElement("i");
    heart.className = "fa-solid fa-heart";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s"
    body.appendChild(heart);
  }
  setInterval(createHeart, 1000);

  /* code for moving button */
  const popUp = () => {
  }

  const clickedYes = (event) => {
    event.preventDefault();
    setShowCalendar(true); // Show the calendar when YES button is clicked
    
  }

  const clickedSubmit1 = () => {
    setShowMap(true); // Show the calendar when YES button is clicked
  }

  const clickedSubmit2 = () => {
    setShowMenu(true); // Show the calendar when YES button is clicked
  }

  const clickedSubmit3 = () => {
    setShowKiss(true); // Show the calendar when YES button is clicked
    alert("DAMN! Its all set then hehehehehe.. screenshot the page and send it to your 😝 I made this when ur inactive pa, im sorry i didn't get to finish it when u were online na and lost some precious time that should've been spent talking with you 🤞 Also I saw that u reposted something like this on tiktok so i had to do it mwa")
  }




  function mouseOver() {
    setx(Math.random() * 100);
    sety(Math.random() * 100);
  }
  
  var noStyle = {
    left: x + "%",
    top: y + "%",
    position: "absolute",
  };

  // Adjusted position for "YES!" button
  var yesStyle = {
    left: "44.2%",
    top: "calc(55% + 210px)",
    position: "absolute",
  }



  var whiteBoxStyle = {
    position: "absolute",
    top: "13.5%",
    left: "15%",
    transform: "translate(0%, -50%)",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f5f3f0",
    width: "20px", // Adjusted width
    height: "50px", // Adjusted height
    zIndex: "999", // Ensure the box appears above the picture
    border: "1px solid black",
  }

  var calendarBoxStyle = {
    position: "absolute",
    top: "calc(13% + 108px)", // Adjusted position
    left: "5%",
    zIndex: "999", // Ensure the box appears above the picture
    border: "1px solid black",
    paddingRight: "30px",
    paddingLeft: "30px",
    paddingBottom: "0px",
    borderRadius: "10px",
    backgroundColor: "#fff",
  };

  var bottomWhiteBoxStyle = {
    position: "absolute",
    top: "38%",
    bottom: "10%", // Adjusted position to bottom
    left: "5%",
    padding: "20px",
    paddingTop: "10px",
    borderRadius: "10px",
    backgroundColor: "#f5f3f0",
    width: "515px", // Adjusted width
    height: "450px", // Adjusted height
    zIndex: "999", // Ensure the box appears above the picture
    border: "1px solid black",
    display: showMap ? 'block' : 'none', // Conditionally show calendar
  }

  var foodMenuBoxStyle = {
    position: "absolute",
    top: "5%", // Adjusted position
    right: "5%", // Adjusted position to the right
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f5f3f0",
    width: "525px", // Adjusted width
    height: "700px", // Adjusted height
    zIndex: "999", // Ensure the box appears above the picture
    border: "1px solid black",
    display: showMenu ? 'block' : 'none', // Conditionally show calendar
  }

  var calendarCont = {
    display: showCalendar ? 'block' : 'none', // Conditionally show calendar
  }

  var imageCont ={
    position: "absolute",
    top: "5%",
    left: "5%",
    width: "160px", // Adjusted width
    height: "160px", // Adjusted height
    border: "1px solid black",
  }

  var Box ={
    top: "46.5%",
    left: "51.5%",
    position: "absolute",
    border: "1px solid black",
    width: "170px", // Adjusted width
    height: "170px", // Adjusted height
    display: showKiss ? 'block' : 'none', // Conditionally show calendar
  }

  return (
    <>  
      
      <img src={sofi} alt="placeholder" style={{ position: 'absolute', left: '50%', top: '52%', transform: 'translate(-50%, -50%)', width: '510px', height: '510px' }} />
      <div style={Box}> <img src={cat2} alt="placeholder" style={{ position: 'relative', width: '170px', height: '170px' }} /></div>
      <div id="imageCont" style={imageCont}>
        <img src={cat} alt="placeholder" style={{ width: '160px', height: '160px' }} />
      </div>
      <div id="container" style={whiteBoxStyle}>
        <p className="pre-valentine">
          Hi Sophia Abegael!
        </p>
        <p className="valentine">Will you be my Valentine?</p>
      </div>

      <div style={calendarCont}>
        <div style={calendarBoxStyle}> 
          <p className="test"> Sweet! When is Sofi free then? hehehehe 
          <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
          </p>
        </div>

      {/* "Submit" button is placed below the calendar selection */}
      <button
        style={{position: 'absolute', top: 'calc(13% + 175px)', left: '5%', width: '80px', height:'40px', borderRadius: "5px",}} // Adjusted position
        type="submit"
        onClick={clickedSubmit1}
      >
        Submit
      </button>
      </div>


      {/* New white box at the bottom */}
      <div style={bottomWhiteBoxStyle}>
      <p className="test">Pick a spot you like!</p>
      <div className="image-container">
        <img
          src={cebu}
          alt="Cebu"
          useMap="#image-map"
          onClick={handleMapClick} style={{ left: '100%', top: '100%', width: '515px' }}
        />
        <map name="image-map">
          {/* Define clickable regions here */}
          {/* Example: */}
          <area shape="rect" coords="0,0,50,50" alt="Clickable Area 1" />
          <area shape="rect" coords="50,50,100,100" alt="Clickable Area 2" />
          {/* Add more areas as needed */}
        </map>
        {/* Render marks */}
        {marks.map((mark, index) => (
          <div
            key={index}
            className="mark"
            style={{ left: mark.x, top: mark.y }}
          />
        ))}
        {/* Pointer */}
        <div className="pointer" />
      </div>

      {/* "Submit" button is placed below the calendar selection */}
      <button
        style={{position: 'absolute', top: 'calc(13% + 435px)', left: '0%', width: '80px', height:'40px', borderRadius: "5px",}} // Adjusted position
        type="submit"
        onClick={clickedSubmit2}
      >
        Submit
      </button>
      </div>

      
  <div style={foodMenuBoxStyle}>
  <p class="test">And what would Sofi like to eat?</p>
  {/* Replace <ul> with checkboxes */}
  <label style={{ position: 'relative', display: 'inline-block', marginRight: '20px', marginLeft: '10px', marginBottom: '10px'}}>
    <input type="checkbox" style={{ position: 'absolute', bottom: '0', left: '0', zIndex: '1' }} />
    <img src={pizza} alt="Pizza" style={{ width: '150px', height: '150px' }} />
  </label>
  <label style={{ position: 'relative', display: 'inline-block', marginRight: '20px' }}>
    <input type="checkbox" style={{ position: 'absolute', bottom: '0', left: '0', zIndex: '1' }} />
    <img src={carbonara} alt="Carbonara" style={{ width: '150px', height: '150px' }} />
  </label>
  <label style={{ position: 'relative', display: 'inline-block' }}>
    <input type="checkbox" style={{ position: 'absolute', bottom: '0', left: '0', zIndex: '1' }} />
    <img src={icecream} alt="Ice Cream" style={{ width: '150px', height: '150px' }} />
  </label>
  <br />
  <label style={{ position: 'relative', display: 'inline-block', marginRight: '20px', marginLeft: '10px', marginBottom: '10px' }}>
    <input type="checkbox" style={{ position: 'absolute', bottom: '0', left: '0', zIndex: '1' }} />
    <img src={kwekwek} alt="Kwek Kwek" style={{ width: '150px', height: '150px' }} />
  </label>
  <label style={{ position: 'relative', display: 'inline-block', marginRight: '20px' }}>
    <input type="checkbox" style={{ position: 'absolute', bottom: '0', left: '0', zIndex: '1' }} />
    <img src={fries} alt="Fries" style={{ width: '150px', height: '150px' }} />
  </label>
  <label style={{ position: 'relative', display: 'inline-block', marginRight: '20px' }}>
    <input type="checkbox" style={{ position: 'absolute', bottom: '0', left: '0', zIndex: '1' }} />
    <img src={sisig} alt="Sisig" style={{ width: '150px', height: '150px' }} />
  </label>
  <br />
  <label style={{ position: 'relative', display: 'inline-block', marginRight: '20px', marginLeft: '10px', marginBottom: '10px'}}>
    <input type="checkbox" style={{ position: 'absolute', bottom: '0', left: '0', zIndex: '1' }} />
    <img src={barbeque} alt="Barbeque" style={{ width: '150px', height: '150px' }} />
  </label>
  <label style={{ position: 'relative', display: 'inline-block', marginRight: '20px' }}>
    <input type="checkbox" style={{ position: 'absolute', bottom: '0', left: '0', zIndex: '1' }} />
    <img src={chocolate} alt="Chocolates" style={{ width: '150px', height: '150px' }} />
  </label>
  <label style={{ position: 'relative', display: 'inline-block', marginRight: '20px' }}>
    <input type="checkbox" style={{ position: 'absolute', bottom: '0', left: '0', zIndex: '1' }} />
    <img src={pasta} alt="Pasta" style={{ width: '150px', height: '150px' }} />
  </label>
  <br />
  <label style={{ position: 'relative', display: 'inline-block', marginRight: '20px', marginLeft: '10px', marginBottom: '10px'}}>
    <input type="checkbox" style={{ position: 'absolute', bottom: '0', left: '0', zIndex: '1' }} />
    <img src={friedchicken} alt="Fried Chicken" style={{ width: '150px', height: '150px' }} />
  </label>
  <label style={{ position: 'relative', display: 'inline-block', marginRight: '20px' }}>
    <input type="checkbox" style={{ position: 'absolute', bottom: '0', left: '0', zIndex: '1' }} />
    <img src={steak} alt="Steak" style={{ width: '150px', height: '150px' }} />
  </label>
  <label style={{ position: 'relative', display: 'inline-block', marginRight: '20px' }}>
    <input type="checkbox" style={{ position: 'absolute', bottom: '0', left: '0', zIndex: '1' }} />
    <img src={sushi} alt="Sushi" style={{ width: '150px', height: '150px' }} />
  </label>
  <br />
  {/* Add more checkbox items as needed */}
  <button
        style={{position: 'absolute', top: 'calc(13% + 660px)', left: '0%', width: '80px', height:'40px', borderRadius: "5px",}} // Adjusted position
        type="submit"
        onClick={clickedSubmit3}
      >
        Submit
</button>
</div>







      <form ref={form}>
        <button 
          style={yesStyle}
          type="submit"
          onClick={clickedYes}
        >
          YES
        </button> 
      </form>
      <button
        onMouseOver={mouseOver}
        style={noStyle}
        onClick={popUp}
      >
        NO
      </button>
    </>
  );
}

export default App;
