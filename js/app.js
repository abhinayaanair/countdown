const endDate="11 November 2027 10:00 PM";

document.getElementById("end-date").innerText=endDate;

let input=document.querySelectorAll('input')

function clock(){
    const end= new Date(endDate);
    const now= new Date();
    diff=end-now;
    //diff is in milliseconds to convert it into seconds
    diff=diff/1000
    if(diff<0) return;
    //convert into days
    input[0].value= Math.floor(diff/3600/24);
    //convert into hours
    input[1].value=Math.floor((diff/3600)%24);
    //convert into minutes
    input[2].value=Math.floor((diff/60)%60);
    //convert into seconds
    input[3].value=Math.floor((diff%60));

}

//initial call
clock();

setInterval(()=>{clock()}
    ,1000
)
