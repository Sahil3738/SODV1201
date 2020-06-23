/*
* @name: Assignement1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Sahil Malhotra
*/

// to fetch date from online

 const dynamic = document.querySelector("#dynamic");
  let fdate = new Date();
  dynamic.textContent= fdate;

// name of the picture will appear after ten second
 const imagename = document.querySelector("#imagename");
 setTimeout(() => {imagename.textContent="Sahil Malhotra"}, 10000);

//marks to grade convertor
  
  const submit = document.getElementById("sbt");
  const clr = document.getElementById("clr");
  
  function run(){
    if ( document.getElementById("input").value===" "){
        document.getElementById("err").textContent=" Error: Need a number";
    }

    else if ( document.getElementById("input").value > 100 ||  document.getElementById("input").value< 0){
        document.getElementById("err").textContent ="Enter value less than 101 and not negative number";
        document.getElementById("grade").textContent=" "; 
    }
     else if( document.getElementById("input").value>90){
        document.getElementById("grade").textContent ="A";
        document.getElementById("err").textContent = " ";
        
    }
     else if ( document.getElementById("input").value>80){
        document.getElementById("grade").textContent ="B"; 
        document.getElementById("err").textContent = " ";
     }

     else if ( document.getElementById("input").value>70){
        document.getElementById("grade").textContent ="C";
        document.getElementById("err").textContent = " "; 
     }
     else if ( document.getElementById("input").value>=50){
        document.getElementById("grade").textContent ="D";
        document.getElementById("err").textContent = " "; 
     }
     else if ( document.getElementById("input").value < 50){
        document.getElementById("grade").textContent="F";
        document.getElementById("err").textContent = " "; 
    }
    
    else if( document.getElementById("input").value>"A" && "a" || document.getElementById("input").value < "Z" && "z"){
        document.getElementById("grade").textContent=" ";  
        document.getElementById("err").textContent=" Error: Enter Number Only";
    }
    

}

function empty(){

    document.getElementById("grade").textContent=" ";
    document.getElementById("err").textContent= " ";
    document.getElementById("input").value =" ";
}

// temprature convertor
 
 const convertf = document.getElementById("convertf");
 const convertc = document.getElementById("convertc");


 function celsius(){
 const final = (document.getElementById("fahre").value -32)*5/9;
 alert("Your celsius temprature is"+final);

}
 
function kelvin(){
    const final2 =+(document.getElementById("cel")).value + 273.15;
    alert("Your kelvin temprature is"+ final2);

}
 






  