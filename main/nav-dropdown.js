var dpc = document.getElementsByClassName("dropdown-container");
var dp1 = document.getElementsByClassName("dropdown-main-1-desc");
var dp2 = document.getElementsByClassName("dropdown-main-2-desc");
var dp3 = document.getElementsByClassName("dropdown-main-3-desc");
var dp4 = document.getElementsByClassName("dropdown-main-4-desc");
var dp5 = document.getElementsByClassName("dropdown-main-5-desc");

var _dp1 = false;
var _dp2 = false;
var _dp3 = false;
var _dp4 = false;
var _dp5 = false;

function catalog(){
    _dp2 = false;
    _dp3 = false;
    _dp4 = false;
    _dp5 = false;
    dp2[0].style.display = "none";
    dp3[0].style.display = "none";
    dp4[0].style.display = "none";
    dp5[0].style.display = "none";
    if(_dp1){
        dpc[0].style.display = "none";
        dp1[0].style.display = "none";
        _dp1 = false;
    }
    else{
        dpc[0].style.display = "flex";
        dp1[0].style.display = "flex";
        _dp1 = true;
    }
}
function products(){
    _dp1 = false;
    _dp3 = false;
    _dp4 = false;
    _dp5 = false;
    console.log(dp1);
    dp1[0].style.display = "none";
    dp3[0].style.display = "none";
    dp4[0].style.display = "none";
    dp5[0].style.display = "none";
    if(_dp2){
        dpc[0].style.display = "none";
        dp2[0].style.display = "none";
        _dp2 = false;
    }
    else{
        dpc[0].style.display = "flex";
        dp2[0].style.display = "flex";
        _dp2 = true;
    }
}
function careerPath(){
    _dp1 = false;
    _dp2 = false;
    _dp4 = false;
    _dp5 = false;
    dp1[0].style.display = "none";
    dp2[0].style.display = "none";
    dp4[0].style.display = "none";
    dp5[0].style.display = "none";
    if(_dp3){
        dpc[0].style.display = "none";
        dp3[0].style.display = "none";
        _dp3 = false;
    }
    else{
        dpc[0].style.display = "flex";
        dp3[0].style.display = "flex";
        _dp3 = true;
    }
}
function resources(){
    _dp1 = false;
    _dp2 = false;
    _dp3 = false;
    _dp5 = false;
    dp1[0].style.display = "none";
    dp2[0].style.display = "none";
    dp3[0].style.display = "none";
    dp5[0].style.display = "none";
    if(_dp4){
        dpc[0].style.display = "none";
        dp4[0].style.display = "none";
        _dp4 = false;
    }
    else{
        dpc[0].style.display = "flex";
        dp4[0].style.display = "flex";
        _dp4 = true;
    }
}
function business(){
    _dp1 = false;
    _dp2 = false;
    _dp3 = false;
    _dp4 = false;
    dp1[0].style.display = "none";
    dp2[0].style.display = "none";
    dp3[0].style.display = "none";
    dp4[0].style.display = "none";
        console.log("Pressed");
    if(_dp5){
        dpc[0].style.display = "none";
        dp5[0].style.display = "none";
        _dp5 = false;
    }
    else{
        dpc[0].style.display = "flex";
        dp5[0].style.display = "flex";
        _dp5 = true;
    }
}