import React, { useEffect, useState } from "react";
import './Pomodoro.css';

function Pomodoro() {
  const [timer, setTimer] = useState();
  let minutes = 9;
  let [remainingSeconds, setremainingSeconds] = useState(minutes * 60);
  let [showModal, setShowModal] = useState(false);
  const start = () => {
    setShowModal(false)
    const timer = setInterval(() => {
      if (remainingSeconds > 0) {
        setremainingSeconds((remainingSeconds) => remainingSeconds - 1);
      }
      else {
        clearInterval(timer);
      }
    }, 1000);
    setTimer(timer);
  };

  const stop = () => {
    clearInterval(timer);
    setShowModal(true)
  }

  const restart = () => {
    setremainingSeconds(minutes * 60)
    setShowModal(false)
  }

  useEffect(() => {
    if (remainingSeconds === 0) {
      clearInterval(timer);
      alert("Your Time Got Over")
    }
  }, [remainingSeconds, timer]);

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  const closeModal = () => {
    setShowModal(false)
    start();
  }

  const modalContent = () => {
    return (
      <div className="modal">
        <div className="modal-content">
          <p>Timer is still running/paused! If you continue, the timer will restart.</p>
          <button
            className="pomodoro-button"
            onClick={() => closeModal()}>
              Close
          </button>
          <button
            className="pomodoro-button"
            onClick={() => restart()}>
              Continue
          </button>
        </div>
      </div>
    )
  }
  return (
    <>
    {showModal && modalContent()}
    <div className='pomodoro-container'>
      
        <h1>Pomodoro Timer</h1> 
        <div className="timer-container">

        {(Math.floor(remainingSeconds / 60)) < 10 ? `0${ Math.floor(remainingSeconds / 60)}:` :`${ Math.floor(remainingSeconds / 60)}:`}{(remainingSeconds % 60)<10 ? `0${ remainingSeconds % 60}` :`${ remainingSeconds % 60}`}
          </div>
        <div>
        <button className='pomodoro-button'>
            Change Timer
        </button>

        <button className='pomodoro-button' onClick={start}>
            Start Timer
        </button>

        <button className='pomodoro-button' onClick={stop}>
            Give Up
        </button>
        </div>
        
    </div>
    </>
  )
}

export default Pomodoro