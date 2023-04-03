$(function() {

    $(".searchBtn").click(function (e) { 
        e.preventDefault();
        sessionStorage.setItem("searchParam", $(".searchBar").val());
        window.location.href = "../Search/Search.html";
    });

})