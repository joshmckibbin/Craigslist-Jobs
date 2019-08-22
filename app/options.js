$(function(){
    $("#country").change(function(){
        $(".country").hide(); // Hide all country divs
        var country = "#"+$(this).val(); // Store the ID of the current country div
        $(country).show(); // Show the current country div
        
        var state = $(country+" .state option:first-child").val();
        var city = $(country+" .city option:first-child").val();
        $(".state").val(state);
        $(".city").val(city);
        
        $(".city").hide().attr('disabled','disabled');
        $(country+" .city:first").show().removeAttr("disabled");
    });

    $(".state").change(function(){
        var state = $(this).val();
        $(".city").hide().attr('disabled','disabled');
        $("#"+state).show().removeAttr("disabled");
        
        $("#"+state).val($("#"+state+" option:first-child").val());
    });

    // Saves options to localStorage.
    $("#save-btn").click(function(){
        var country = $("#country").val();
        //localStorage["entry_qty"] = $("#entry_qty").val();
        localStorage["keywords"] = $("#keywords").val();
        localStorage["job_type"] = $("#job_type").val();
        localStorage["country"] = country;
        switch(country){
            case "US":
            localStorage["state"] = $("#us-state").val();
            break;
            case "Canada":
            localStorage["state"] = $("#ca-province").val();
            break;
        }
        localStorage["city"] = $("select.city:enabled").val();
        window.location = "popup.html";
    });

    // Cancels the save.
    $("#cancel-btn").click(function(){
        window.location = "popup.html";
    });

    // Restores select box state to saved value from localStorage.
    //var qty = localStorage["entry_qty"];
    var keywords = localStorage["keywords"];
    var type = localStorage["job_type"];
    var country = localStorage["country"];
    var state = localStorage["state"];
    var city = localStorage["city"];

    if (!type || !country || !state || !city) {
        return;
    }

    //$("#entry_qty").val(qty);
    $("#keywords").val(keywords);
    $("#job_type").val(type);
    $("#country").val(country);
    $(".state").val(state);
    $(".city").hide().attr('disabled','disabled');
    $(".country").hide();
    $("#"+country).show();
    $("#"+state).show().removeAttr("disabled");
    $("#"+state).val(city);
});