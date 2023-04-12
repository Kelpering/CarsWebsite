const sleep = ms => new Promise(r => setTimeout(r, ms));

var favicon = document.getElementById("favicon");
var filept1 = "../ico/frame ("
var filept2 = ").gif"
async function start()
{
    while(true)
    {
        for (var i = 1; i < 172; i++)
        {
            favicon.href = filept1 + i + filept2;
            await sleep(35);
        }
    }
}


$(function() {

    $(".searchBtn").click(function (e) { 
        e.preventDefault();
        sessionStorage.setItem("searchParam", $(".searchBar").val());
        window.location.href = "../Search/Search.html";
    });

})