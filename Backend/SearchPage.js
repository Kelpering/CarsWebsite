$(function(){

    $(".car").hide();
    // let search = "Honda" // Change to receive input
    let search = sessionStorage.getItem("searchParam");
    if (search == "" || search.length == 0 || search == " ")
    {
        $(".car").show();
    }
    let query = ".car:contains('" + search + "')"
    $(query).show();

    $(".params").text("Search params: " + search);

    sessionStorage.setItem("searchParam", " ");

})