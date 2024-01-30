var human = 0
var house = 0
var town = 0
var city = 0

var house_multi = 1
var town_h_multi = 1
var city_h_multi = 1

function create(){
    human += (1*town_h_multi)*city_h_multi*house_multi
}

function saveGame(){
    var gameSave = {
        human: human,
        house: house,
        town : town,
        city : city
    };

    localStorage.setItem("gameSave", JSON.stringify(gameSave))
}

function loadGame(){
    var savedGame = JSON.parse(localStorage.getItem("gameSave")) 
    if(typeof savedGame.human !== "undefined") human = savedGame.human;
    if(typeof savedGame.house !== "undefined") human = savedGame.house;
    if(typeof savedGame.town !== "undefined") human = savedGame.town;
    if(typeof savedGame.city !== "undefined") human = savedGame.city;
}

function condense(building){
    if(building === house){
        if(human >= 10){
        house += (Math.floor(human/10))*(city_h_multi)
        human = 0
        return
        }
    }

    if(building === town){
        if(house >= 5){
            town += Math.floor(house/10)
            house = 0
            return
        }
    }
    
    if(building === city){
        if(town >= 5){
            city += Math.floor(town/5)
            town = 0
            return
        }
    }

}

function multiUpdate(){
    if(house > 0){
        house_multi = Math.floor((house**0.4))
    }else{
        house_multi = 1
    }

    if(town > 0){
        town_h_multi = Math.floor(1+(town**.2))
    }else{
        town_h_multi = 1
    }

    if(city > 0){
        city_h_multi = Math.floor(1+(city**0.3))
    }else{
        city_h_multi = 1
    }
}

setInterval(function(){
    saveGame()
    displayUpdate()
    multiUpdate()
  }, 1)

window.onload = function(){
    loadGame()
  displayUpdate()
}

function displayUpdate(){
  document.getElementById("human").innerHTML = human
  document.getElementById("house").innerHTML = house
  document.getElementById("town").innerHTML = town
  document.getElementById("city").innerHTML = city

  document.getElementById("house_multi").innerHTML = house_multi
  document.getElementById("town_h_multi").innerHTML = town_h_multi
  document.getElementById("city_h_multi").innerHTML = city_h_multi
  document.getElementById("city_H_multi").innerHTML = city_h_multi
}