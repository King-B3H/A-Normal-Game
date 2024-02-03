var human = 0
var house = 0
var town = 0
var city = 0
var state = 0
var country = 0
var continent = 0
var planet = 0
var solarSystem = 0
var universe = 0

var userName = "A Random Person"
var pastEndgame = false
var metWall = false
var joeClick = false

var house_multi = 1
var town_h_multi = 1
var city_h_multi = 1
var state_h_multi = 1
var country_h_multi = 1
var continent_h_multi = 1
var planet_h_multi = 1

var totalMulti = 1

var days = 0
var hours = 0
var minutes = 0
var seconds = 0

var timeoutActive = 0
var upgrade1 = 0

function hoomanClick(){
    if (timeoutActive === 0){
    var timeout = setTimeout(create, 100)
    timeoutActive = 1
    }else{
        clearTimeout(timeout)
    }
}
function create(){
    human += 1*(house_multi)*(town_h_multi)*(city_h_multi)*(state_h_multi)*(country_h_multi)*(continent_h_multi)*(planet_h_multi)
    timeoutActive = 0
}

function hide(){
    if(joeClick === false){
        document.getElementById("test").style.display = "none"
        alert("I'LL BE BACK! JUST YOU WAIT!!!")
        joeClick = true
    }
}

/* function condense(building, i, cost){
    if(building === house)
    etc.
array of buildings, buildings[i-1] = 0 to reset
building 
} */


function condense(building){
    
    if(building === "house"){
        if(human >= 20){
        totalMulti > 100 ? house += (Math.floor(human/20))*(Math.floor((totalMulti/house_multi)**0.5)) : house += (Math.floor(human/20))*(Math.floor((totalMulti/house_multi)))
        human = 0
        return building = 0;
        }
    };

    if(building === "town"){
        if(house >= 50){
            totalMulti > 100 ? town += (Math.floor(house/50))*(Math.floor((totalMulti/house_multi/town_h_multi)**0.48)) : town += (Math.floor(house/50))*(Math.floor((totalMulti/house_multi/town_h_multi)))
            house = 0
            return building = 0;
        }   
    };
    
    if(building === "city"){
        if(town >= 150){
            totalMulti > 100 ? city += Math.floor(town/150)*(Math.floor(((state_h_multi)*(country_h_multi)*(continent_h_multi)*(planet_h_multi))**0.45)) : city += Math.floor(town/150)*(Math.floor(((state_h_multi)*(country_h_multi)*(continent_h_multi)*(planet_h_multi))))
            town = 0
            return building = 0;
        }
    };

    if(building === "state"){
        if(city >= 350){
            totalMulti > 100 ? state += Math.floor(city/350)*(Math.floor(((country_h_multi)*(continent_h_multi)*(planet_h_multi))**0.425)) : state += Math.floor(city/350)*(Math.floor((country_h_multi)*(continent_h_multi)*(planet_h_multi)))
            city = 0
            return building = 0;
        }
        
    };
    if(building === "country"){
        if(state >= 600){
            totalMulti > 100 ? country += Math.floor(state/600)*(Math.floor(((continent_h_multi)*(planet_h_multi))**0.39)) : country += Math.floor(state/600)*(Math.floor(((continent_h_multi)*(planet_h_multi))))
             state = 0
             return building = 0;
        }
        
    };

    if(building === "continent"){
        if(country >= 900){
            continent += Math.floor(country/900)*(Math.floor((planet_h_multi)**0.37))
            country = 0
            return building = 0;
        }
        
    };

    if(building === "planet"){
        if(continent >= 1250){
            planet += Math.floor(continent/1250)
            continent = 0
            return building = 0;
        }
        
    };

    /*if(building === solarSystem){
        
    }

    if(building === Universe){
        if(solarSystem >= 100){
            universe++
            solarSystem = 0
            return
        }
    }*/
}

function multiUpdate(){
    if(house > 0){
        house_multi = Math.floor(Math.log(10+house)**0.99)
    }else{
        house_multi = 1
    }

    if(town > 0){
        town_h_multi = Math.floor(Math.log(10+(town))**1.4)
    }else{
        town_h_multi = 1
    }

    if(city > 0){
        city_h_multi = Math.floor((Math.log(10+city))**1.7)
    }else{
        city_h_multi = 1
    }

    if(state > 0){
        state_h_multi = Math.floor(Math.log(10+state)**2.05)
    }else{
        state_h_multi = 1
    }

    if(country > 0){
        country_h_multi = Math.floor(Math.log(10+country)**2.4)
    }else{
        country_h_multi = 1
    }
        
    if(continent > 0){
        continent_h_multi = Math.floor(Math.log(10+continent)**2.75)
    }else{
        continent_h_multi = 1
    }

    if(planet > 0){
        planet_h_multi = Math.floor(Math.log(10+planet)**3.1)
    }else{
        planet_h_multi = 1
    }
}
        
function calculateTotalMulti(){
    totalMulti = 1*(house_multi)*(town_h_multi)*(city_h_multi)*(state_h_multi)*(country_h_multi)*(continent_h_multi)*(planet_h_multi)
}

function getUserName(){
    userName = (prompt("What will be your username?"))
    var hutchersonNames = [
        "Josh",
        "josh",
        "Josh Hutcherson",
        "josh hutcherson",
        "hutcherson",
        "Hutcherson",
        "JOSH",
        "HUTCHERSON"
    ]
    if(userName.length > 15){
        alert("Username too long.")
        userName = prompt("What will be your username? DO IT RIGHT THIS TIME!!!!")
    }
    if(userName === "King_B3H"){
        alert("That's not your name...")
        window.open(src="Goofy Images/clown_amogus.png")
        userName = "A random Person"
    }
    if(userName === "" || userName === " "){
        alert("That's not a name...")
        window.open(src="Goofy Images/chip.png")
        userName = "A random Person"
    }
    if(hutchersonNames.some(str => str.includes(userName))){
        alert("*Insert Whistle")
        window.open(src="Goofy Images/hutcherson.jpeg")
    }
    return stringify(userName)
}

function saveGame(){
    var gameSave = {
        human: human,
        house: house,
        town : town,
        city : city,
        state : state,
        country : country,
        continent : continent,
        planet : planet,
        userName : userName,
        pastEndgame : pastEndgame,
        seconds : seconds,
        minutes : minutes,
        hours : hours,
        days : days,
        metWall : metWall,
        joeClick : joeClick
    };

    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function resetGame(){
    if (confirm("Are you positive you wish to reset?")){
        var gameSave = {}
        totalMulti = 0
        saveGame()
        localStorage.setItem("gameSave", JSON.stringify(gameSave))
        window.stop()
        return location.reload()
    }
}

function continueGame(){
    if(confirm("Do you wish to continue on with the game?")){
        pastEndgame = true
    }
}

function loadGame(){
    var savedGame = JSON.parse(localStorage.getItem("gameSave")) 
    if (localStorage.getItem("gameSave") !== null){
        if(typeof savedGame.human !== "undefined") human = savedGame.human;
        if(typeof savedGame.house !== "undefined") house = savedGame.house;
        if(typeof savedGame.town !== "undefined") town = savedGame.town;
        if(typeof savedGame.city !== "undefined") city = savedGame.city;
        if(typeof savedGame.state !== "undefined") state = savedGame.state;
        if(typeof savedGame.country !== "undefined") country = savedGame.country;
        if(typeof savedGame.continent !== "undefined") continent = savedGame.continent;
        if(typeof savedGame.planet !== "undefined") planet = savedGame.planet;
        if(typeof savedGame.userName !== "undefined") userName = savedGame.userName;
        if(typeof savedGame.pastEndgame !== "undefined") pastEndgame = savedGame.pastEndgame;
        if(typeof savedGame.seconds !== "undefined") seconds = savedGame.seconds;
        if(typeof savedGame.minutes !== "undefined") minutes = savedGame.minutes;
        if(typeof savedGame.hours !== "undefined") hours = savedGame.hours;
        if(typeof savedGame.days !== "undefined") days = savedGame.days;
        if(typeof savedGame.metWall !== "undefined") metWall = savedGame.metWall;
        if(typeof savedGame.joeClick !== "undefined") joeClick = savedGame.joeClick
    }
}

setInterval(function(){
    saveGame()
}, 3000)

setInterval(function(){
    displayUpdate()
    multiUpdate()
    displayBonus()
    checkEndgame()
    calculateTotalMulti()
    displayTime()
  }, 100)

  setInterval(function(){timeTick();}, 1000)//Counts time

window.onload = function(){
    loadGame()
    displayUpdate()
    multiUpdate()
    checkEndgame()
    displayBonus() 
    calculateTotalMulti()
    displayTime()
    if(joeClick === true){
        document.getElementById("test").style.display = "none"
    }
}

function timeTick(){
    seconds += 1

    if(seconds >= 60){
        seconds -= 60
        minutes += 1
    }
    if(minutes >= 60){
        minutes -= 60
        hours += 1
    }
    if(hours >= 24){
        hours -= 24
        days += 1
    }
}


function checkEndgame(){
    if(planet > 99 && pastEndgame === false){
        document.getElementById("left").style.display = "none"
        document.getElementById("right").style.display = "none"
        document.getElementById("troll").style.display = "block"
        document.getElementById("continue").style.display = "block"
        document.getElementById("endgameReset").style.display = "block"
    }
    
    if(planet > 99 && pastEndgame === true){
        document.getElementById("left").style.display = ""
        document.getElementById("right").style.display = ""
        document.getElementById("troll").style.display = "none"
        document.getElementById("continue").style.display = "none"
        document.getElementById("endgameReset").style.display = "none"
    }    
    if(totalMulti >= 1e21){
        pastEndgame === true
        metWall = true
        saveGame()
        document.getElementById("left").style.display = "none"
        document.getElementById("right").style.display = "none"
        document.getElementById("theWall").style.display = "block"
    }

}

function displayUpdate(){
  document.getElementById("human").innerHTML = human
  document.getElementById("house").innerHTML = house
  document.getElementById("town").innerHTML = town
  document.getElementById("city").innerHTML = city
  document.getElementById("state").innerHTML = state
  document.getElementById("country").innerHTML = country
  document.getElementById("continent").innerHTML = continent
  document.getElementById("planet").innerHTML = planet

  document.getElementById("userName").innerHTML = userName
 
}
function displayBonus(){
    document.getElementById("house_multi").innerHTML = house_multi
    document.getElementById("town_h_multi").innerHTML = town_h_multi
    document.getElementById("city_h_multi").innerHTML = city_h_multi
    document.getElementById("city_h_multi").innerHTML = city_h_multi
    document.getElementById("state_h_multi").innerHTML = state_h_multi
    document.getElementById("country_h_multi").innerHTML = country_h_multi
    document.getElementById("continent_h_multi").innerHTML = continent_h_multi
    document.getElementById("planet_h_multi").innerHTML = planet_h_multi
    document.getElementById("totalMulti").innerHTML = totalMulti
  
}
function displayTime(){
    document.getElementById("secondDisplay").innerHTML = seconds > 0 ? `${seconds} Seconds` : ""
    document.getElementById("minuteDisplay").innerHTML = minutes > 0? `${minutes} Minutes` : ""
    document.getElementById("hourDisplay").innerHTML = hours > 0 ? `${hours} Hours` : ""
    document.getElementById("dayDisplay").innerHTML = days > 0 ? `${days} Days` : ""

}
