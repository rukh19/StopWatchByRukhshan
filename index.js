
let isStop = true;
let sec = 0;
let min = 0;
let hr = 0;

//this is start function
function start()
{
  if(isStop == true)
  {
    isStop = false;
    timer();
  }
}

// this is timer function
// where the timer get started
function timer()
{

  
   if(isStop == false)
   {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    sec++;
    // if the sec == 60 then the min will increase by 1
    if( sec == 60)
    {
       sec = 0;
       min++;
    }
    
    //if the min == 60 then the hour will increase 1
    if(min == 60)
    {
        min = 0;
        hr++;
    }
    
    //in less than 10 sec we neen the format like 00:
    if(sec < 10)
    {
      sec = "0" + sec;
    }

    if(min < 10)
    {
      min = "0" + min;
    }

    if(hr < 10)
    {
      hr = "0" + hr;
    }

    stopwatch.innerHTML = hr + " : " + min + " : " + sec;
    setTimeout("timer()" ,1000);
   }
}

function stop()
{

    isStop = true;
}

function reset()
{
  isStop = true;
  sec = 0;
  min = 0;
  hr = 0;

  stopwatch.innerHTML = " 00 : 00 : 00";
}