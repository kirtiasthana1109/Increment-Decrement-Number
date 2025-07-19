const countvalue= document.querySelector('#counter');

function increment(){
    // get the value
     let value=parseInt(countvalue.innerText);
    //  update the value
     value=value+1;
    //  set the value
     countvalue.innerText=value;
};

function decrement(){
      // get the value
     let value=parseInt(countvalue.innerText);
    //  update the value
     value=value-1;
    //  set the value
     countvalue.innerText=value;
};