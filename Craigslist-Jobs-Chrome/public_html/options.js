$(function(){
	$("#state").change(function(){
            var state = $(this).val();
            $(".city").hide().attr('disabled','disabled');
            $("#"+state).show().removeAttr("disabled");
        });
	
	// Saves options to localStorage.
	$("#save-btn").click(function(){
		localStorage["entry_qty"] = $("#entry_qty").val();
		localStorage["job_type"] = $("#job_type").val();
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
	var state = localStorage["state"];
	var city = localStorage["city"];
	
	if (!qty || !type || !state || !city) {
		return;
	}
	
	$("#entry_qty").val(qty);
	$("#job_type").val(type);
	$("#state").val(state);
	$(".city").hide().attr('disabled','disabled');
	$("#"+state).show().removeAttr("disabled");
	$("#"+state).val(city);
});