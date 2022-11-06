$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$("header").addClass("headerStop");
			$(".oculto").addClass("oculto2");
		} else {
			$("header").removeClass("headerStop");
			$(".oculto").removeClass("oculto2");
		}
	});
});

$(document).click(function () {
	var bol = $("input:checkbox:checked").length >= 3;
	$("input:checkbox").not(":checked").attr("disabled", bol);
});
