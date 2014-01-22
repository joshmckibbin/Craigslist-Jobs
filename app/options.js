$(function(){
    $("#country").change(function(){
        var country = $(this).val();
        $(".country").hide().attr('disabled','disabled');
        $("#"+country).show().removeAttr("disabled");
    });

//    $("#ca-province").change(function(){
//        var province = $(this).val();
//        $(".city").hide().attr('disabled','disabled');
//        $("#"+province).show().removeAttr("disabled");
//    });

    $(".state").change(function(){
        var state = $(this).val();
        $(".city").hide().attr('disabled','disabled');
        $("#"+state).show().removeAttr("disabled");
    });

    // Saves options to localStorage.
    $("#save-btn").click(function(){
        localStorage["entry_qty"] = $("#entry_qty").val();
        localStorage["job_type"] = $("#job_type").val();
        localStorage["country"] = $("#country").val();
        //localStorage["province"] = $("#province").val();
        localStorage["state"] = $("#state").val();
        localStorage["city"] = $("select.city:enabled").val();
        window.location = "popup.html";
    });

    // Saves options to localStorage.
    $("#cancel-btn").click(function(){
        window.location = "popup.html";
    });

    // Restores select box state to saved value from localStorage.
    var qty = localStorage["entry_qty"];
    var type = localStorage["job_type"];
    var country = localStorage["country"];
    //var province = localStorage["province"];
    var state = localStorage["state"];
    var city = localStorage["city"];

    if (!qty || !type || !state || !city) {
        return;
    }

    $("#entry_qty").val(qty);
    $("#job_type").val(type);
    $("#country").val(country);
    $(".state").val(state);
    $(".city").hide().attr('disabled','disabled');
    $("#"+state).show().removeAttr("disabled");
    $("#"+state).val(city);
    //$("#"+province).val(city);
});