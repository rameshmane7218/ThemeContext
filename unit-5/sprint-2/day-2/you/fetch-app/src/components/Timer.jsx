import React from "react";

const Timer = () => {
  const [timer, setTimer] = React.useState(10);

  React.useEffect(() => {
    
    let id = setInterval(() => {
        if(timer > 100){
            clearInterval(id);
        }else{
            setTimer(timer + 1);
        }
    }, 1000);

    return () => {
        // call a api to inform that user has logged out
        clearInterval(id);
    };
    //componet is unmounted
  }, [timer]);
 

  return (
    <div>
      <h1>Count Down:{timer}</h1>
    </div>
  );
};

export default Timer;
