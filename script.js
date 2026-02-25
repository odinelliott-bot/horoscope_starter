//Signs & variables
document.getElementById("startButton").addEventListener("click", onSubmit)
document.getElementById("restartButton").addEventListener("click", restart)
const currentDate = new Date();
const thisMonth = currentDate.getMonth() + 1;
let thisDay = currentDate.getDate();
var signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"] 
let messages = ["You are Confident, passionate, and proactive","You are bold and energetic","You are grounded and comforting to others","You are highly inteligent and adaptable to new situations. You are adventurous and social.","You are seeking of the spotlight, performance is your jam","You are kind, like helping others and you know the details matter","You are balanced and advocate for unity", "You are resourceful, passionate, and dont hesitate to dive into the deep unknown", "You are adventurous and honest. You never miss the chance to experience something new","You are driven and patient, focussing on longterm goals rather than impulsive decisions","You are rebellious and forward-thinking","The last sign of the zodiac, they are deeply emotional and intuitive, often absorbing the feelings of people around them."];
let images = ["aries.webp", "Taurus.avif", "Gemini.jpg", "cancer-zodiac-sign.jpg","Leo.jpg","virgo.jpg","Libra.wedp","Scorpio.jpg", "sagittarius.webp","capricorn.png","aquarius.jpg","pisces.jpg"]
function onSubmit(){
    var username = document.getElementById("username").value
    var birthMonth = parseInt(document.getElementById("birthdayMonth").value)
    var birthdayDay = parseInt(document.getElementById("birthdayDay").value)

    let index = signAssign(birthMonth,birthdayDay);
    console.log(signs[index]);
    console.log(messages[index]);
    if ((birthMonth == 2 && birthdayDay > 28 || birthMonth == 4 && birthdayDay > 30 || birthMonth == 6 && birthdayDay > 30 || birthMonth == 9 && birthdayDay > 30 || birthMonth == 11 && birthdayDay > 30) && (username == "")) {
        alert("Enter name and valid date.");
        return;
    }
    if (username == "") {
        alert("Enter name.")
        return;
    }
    if (birthMonth == 2 && birthdayDay > 28 || birthMonth == 4 && birthdayDay > 30 || birthMonth == 6 && birthdayDay > 30 || birthMonth == 9 && birthdayDay > 30 || birthMonth == 11 && birthdayDay > 30)    {
        alert("Enter valid date.");
        return;
    }
    if (birthMonth == thisMonth && birthdayDay == thisDay) {
        document.getElementById("sign").innerHTML = "Happy Birthday " + username + "! You are a " + signs[index]
        document.getElementById("image").src = images[index]
        document.getElementById("message").innerHTML = messages[index]
    }else{
        document.getElementById("sign").innerHTML = username + ", You are a " + signs[index]
        document.getElementById("image").src = images[index]
        document.getElementById("message").innerHTML = messages[index]
    //write the info back out onto the page
    }

    
}
function restart() {
    document.getElementById("birthdayMonth").value = "1"
    document.getElementById("birthdayDay").value = "1"
    document.getElementById("sign").innerHTML = ""
    document.getElementById("image").src = ""
    document.getElementById("message").innerHTML = ""
    document.getElementById("username").value = ""
}

function signAssign(birthMonth, birthdayDay) {
    if (birthMonth == 3 && (21 <= birthdayDay <= 31) || birthMonth == 4 && (birthdayDay <= 19)) {
        console.log(signs[0])
        return 0;
    } else if ((birthMonth == 4 && (birthdayDay >= 20)) || birthMonth == 5 && (birthdayDay <= 20)) {
        console.log(signs[1])
        return 1;
    } else if ((birthMonth == 5 && (birthdayDay >= 21)) || birthMonth == 6 && (birthdayDay <= 20)) {
        console.log(signs[2])
        return 2;
    } else if ((birthMonth == 6 && (birthdayDay >= 21)) || birthMonth == 7 && (birthdayDay <= 22)) {
        console.log(signs[3])
        return 3;
    } else if ((birthMonth == 7 && (birthdayDay >= 23)) || birthMonth == 8 && (birthdayDay <= 22)) {
        console.log(signs[4])
        return 4;
    } else if ((birthMonth == 8 && (birthdayDay >= 23)) || birthMonth == 9 && (birthdayDay <= 22)) {
        console.log(signs[5])
        return 5;
    } else if ((birthMonth == 9 && (birthdayDay >= 23)) || birthMonth == 10 && (birthdayDay <= 22)) {
        console.log(signs[6])
        return 6;
    } else if ((birthMonth == 10 && (birthdayDay >= 23)) || birthMonth == 11 && (birthdayDay <= 21)) {
        console.log(signs[7])
        return 7;
    } else if ((birthMonth == 11 && (birthdayDay >= 22)) || birthMonth == 12 && (birthdayDay <= 21)) {
        console.log(signs[8])
        return 8;
    } else if ((birthMonth == 12 && (birthdayDay >= 22)) || birthMonth == 1 && (birthdayDay <= 19)) {
        console.log(signs[9])
        return 9;
    } else if ((birthMonth == 1 && (birthdayDay >= 20)) || birthMonth == 2 && (birthdayDay <= 18)) {
        console.log(signs[10])
        return 10;
    } else if ((birthMonth == 2 && (birthdayDay >= 19)) || birthMonth == 3 && (birthdayDay <= 20)) {
        console.log(signs[11])
        return 11;
    } 
    }



