$(function(){

    $(".car").hide();
    // let search = "Honda" // Change to receive input
    let search = sessionStorage.getItem("searchParam");
    if (search == "" || search == " " || search == null)
    {
        $(".car").show();
    }
    else
    {
        console.log(search);
    }
    let query = ".car:contains('" + search + "')"
    $(query).show();

    $(".params").text("Search params: " + search);

    sessionStorage.setItem("searchParam", " "); // Clears search params after first page load

})