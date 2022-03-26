var slowo, slowa=[] , dl, odpowiedzi=[], bledy=1, strzal;
var trafienie=false;
function start(){
    slowa=["kurier","przestrzeń","fasolka","rachunek","trucizna"];
    slowo= slowa[Math.floor(Math.random()*slowa.length)];
    dl=slowo.length;

    for(var i=0; i<dl; i++){
        odpowiedzi[i] = "_";
    }
    document.getElementById("haslo").innerHTML = odpowiedzi.join(" ");
    
}

function sprawdz(){
    trafienie=false;

    strzal =document.getElementById("znak").value;

    for( var j=0; j<slowo.length; j++){
        if(slowo[j] == strzal && odpowiedzi[j]=="_"){
            odpowiedzi[j]=strzal;
            dl--;
            trafienie=true;
        }
        document.getElementById("haslo").innerHTML= odpowiedzi.join(" ");
    }
    document.getElementById("znak").value="";

    if(trafienie==false && bledy<8){
        bledy++;
        obraz = "wis" + bledy + ".png";
        document.getElementById("szubienica").innerHTML='<img src=" ' + obraz + ' ">';


    }

    if(dl==0 && bledy <8){
        document.getElementById("wynik").innerHTML="wygrana";
        document.getElementById("wynik").style.backgroundColor="green";
    }
    if (bledy ==8) {
        document.getElementById("wynik").innerHTML = "przegrana";
        document.getElementById("wynik").style.backgroundColor = "red";
    }

}
