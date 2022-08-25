import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
// const root1 = ReactDOM.createRoot(document.getElementById('root'));
const clock=()=>{
  let time=new Date().toLocaleTimeString();
 root1.render(
    <div id="clk">
      <p>{time}</p></div>
  );
}
setInterval(clock,1000);
  var hr=0;
  var min=0;
  var sec=0;
  var ms=0;
  var flag=false;
  function start(){
    // alert();
    flag=true;
    time= setInterval(stopwtach,10);
  }
  function stoptime(){
    flag=false;
    clearInterval(time);
  }
  function reset()
  {
    flag=false;
     hr=0;
     min=0;
     sec=0;
     ms=0;

  }
  const stopwtach=()=>
  {
    if(flag===true){
     if(ms<99)
     {
        ms++;
     }
     else
     {
         ms=0;
        if(sec<59)
        {
            sec++;
        }
        else
        {
          sec=0;
          if(min<59)
          {
            min++;
          }
          else
          {
           min=0;
           if(hr<59)
           {
            hr++;
           }

          }
        }
     }
    }
//    console.log(hr,min,sec,ms);
   root.render(
    <div id="time">
  <p>{hr}:{min}:{sec}:{ms}</p>
  <button onClick={start}>Start</button><button onClick={stoptime}>Stop</button><button onClick={reset}>reset</button>
  </div>
  ) 

  }
  var time= setInterval(stopwtach,10);

  
 

root.render(
    <div id="time">
  <p>{hr}:{min}:{sec}:{ms}</p>
  <button onClick={start}>Start</button><button onClick={stoptime}>Stop</button><button onClick={reset}>reset</button>
  </div>
  ) 
reportWebVitals();
