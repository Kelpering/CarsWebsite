$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
}); //Makes :contains() case in-sensitive

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