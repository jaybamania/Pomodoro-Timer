// import React, { useEffect, useState } from "react";

// function DisplayTimer() {

//     // const [remainingSeconds, setRemainingSeconds] = useState(25 * 60);
 
//     const [displayTime , setDisPlayTime] = useState(`25:00`);
//     // const start = () => {
//     //   const timer = setInterval(() => {
        
//     //     setRemainingSeconds((remainingSeconds) => remainingSeconds-1);
//         // if (remainingSeconds > 0) {
//         //   setMinutes(Math.floor(remainingSeconds / 60))
//         //   setSeconds(remainingSeconds % 60)
//         //   let displayMinutes = minutes < 10 ? `0${minutes}` : minutes
//         //   let displaySeconds = seconds < 10 ? `0${seconds}` : seconds
//         //   setDisPlayTime(`${displayMinutes}:${displaySeconds}`)
//         // }
//     //     if (remainingSeconds === 0) {
//     //       clearInterval(timer);
//     //     }
//     //   }, 1000);

//     //   setTimer(timer);


//     // };
  
//     // useEffect(() => {
//     //   if (remainingSeconds === 0) {
//     //     clearInterval(timer);
//     //   }
//     // }, [remainingSeconds, timer]);
  
//     // useEffect(() => {
//     //   return () => clearInterval(timer);
//     // }, [timer]);
//     const [timer, setTimer] = useState();
//     let [remainingSeconds, setremainingSeconds] = useState(9 * 60);
//     const start = () => {
      
//       const timer = setInterval(() => {
//         if (remainingSeconds > 0) {
//           setremainingSeconds((remainingSeconds) => remainingSeconds - 1);
//         }
//         else {
//           clearInterval(timer);
//         }
//       }, 1000);
//       setTimer(timer);
//     };
  
//     useEffect(() => {
//       if (remainingSeconds === 0) {
//         clearInterval(timer);
//       }
//     }, [remainingSeconds, timer,minutes,seconds]);
  
//     useEffect(() => {
//       return () => clearInterval(timer);
//     }, [timer]);
  
//   return (
//     <div>

//         <button onClick={start}>start</button>
//         {/* <button  id={25}  onClick={changeTimer.bind(this)}>
//           Start
//         </button> */}
//     </div>
//   )
// }

// export default DisplayTimer