/**
 * Created by meri on 9/4/16.
 */



var $ = function (id) {
    return document.getElementById(id);
}



var date = new Date();
var day =  date.getDate();
var month = date.getMonth() + 1  //0 is january;
var year = date.getFullYear();
var agemonth=0;
var ageyear=0;


function setTheDate(){

    $("today").value = month + "/" + day + "/" + year;
}


function calculate(){
    var today = new Date(("today").value);
    var birthday = $("birthday").value;


    var bmonth = (parseInt(birthday.substring(0,2)));
    var byear = (parseInt(birthday.substring(6,10)));


    if (bmonth > month)
    {
        ageyear = year - byear -1;
        agemonth = 12 - bmonth + month;
    }
    else
    {
        ageyear = year - byear;
        agemonth = month - bmonth;
    }

    $("reply").value = "it has been" + ageyear + " years and " + agemonth +" months";


}



function dayGreet()
{

    var dateStatement = "";
    var d = new Date();
    var todayIs = d.getDay();



    switch (todayIs)
    {
        case 0:
        case 6:
            dateStatement = "do something exciting!";
            break;
        case 1:
            dateStatement = "its monday... lord save us all";
            break;
        case 2:
            dateStatement = "tuesday.. i guess were doing this";
            break;
        case 3:
            dateStatement = "half way wednesdays";
            break;
        case 4:
            dateStatement = "thursdays arent the worst";
            break;
        case 5:
            dateStatement = "friday baby!";
            break;
        default:
            dateStatement = "warning!";
    }
    document.getElementById("myday").innerHTML =dateStatement;
}



function daysToFinal(){

    var today = new Date();


    $("todaysdate").innerHTML = today.toDateString();

    var final = new Date("05/12/2017");
   $("finaldue").innerHTML = final.toDateString();

    if (today < final){
        var timeDiff = Math.abs(final.getTime() - today.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        $("daysleft").innerHTML = diffDays;

    }
    else {
        $("daysleft").innerHTML = "Hmmm....I think your final is late!"
    }



}

window.onload = function()
{
    dayGreet();
    daysToFinal();
    setTheDate();
    $("birthday").value="mm/dd/yyyy"

    $("age").onclick = calculate;
}