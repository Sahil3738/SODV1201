/*
Name: Sahil Malhotra
Bvc id:413738
Subject: SODV1201
*/
//open weather data
 const get = function(){
 $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=calgary&units=metric&appid=e829486144b71e69f3f08613940ef364", function(data){



const symbol = "http://openweathermap.org/img/w/"+data.weather[0].icon +".png";
const temp = Math.floor(data.main.temp);
const weather = data.weather[0].main;
$('.fsymbol').attr('src', symbol);
$('.fweather').append(weather);
$('.ftemp').append(temp);
 

});
 }
 get();

// bvc club
 const submit=document.getElementById("submit");
 const status=document.getElementById("status");
 const fname=document.getElementById("fname");
 const lname=document.getElementById("lname");
 const address=document.getElementById("address");
 const myform=document.getElementById("myform");

function fees(){
    if(status.value==='student')
    {
        alert("Your fees will be 10$");
    }
    else if(status.value==='staff'){
        alert("Your fees will be 50$");

    }
    else if(status.value==='volunteer'){
        alert("Your fees will be 0$");

    }
    
}
 
submit.addEventListener("click",fees);
myform.addEventListener('submit',function(e){

    e.preventDefault();
    const  formdata= new FormData(this);
    const searchparam= new URLSearchParams();
    for(const pair of formdata){
        searchparam.append(pair[0],pair[1],pair[2],pair[3],pair[4],pair[5]);
    }
    fetch('login.php',{
        method:'post',
        body:searchparam
    }
    ).then(function (response){
        return response.text();
    }).then(function(text){
        console.log(text);
    }).catch(function (error){
        console.log(error);
    });
    
}
);


