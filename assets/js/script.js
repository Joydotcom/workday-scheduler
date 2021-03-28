var today = moment();
$("#currentDay").text(today.format("MMMM Do YYYY, h:mm:ss"));
//console.log("wtf")

var hrs = [9, 10, 11, 12, 13, 14, 15, 16, 17];

var currentHour = today.hours();

for (var i = 0; i < hrs.length; i++) {
  if (currentHour === hrs[i]) {
    $("#" + hrs[i]).addClass("present");
  } else if (currentHour > hrs[i]) {
    $("#" + hrs[i]).addClass("past");
  } else {
    $("#" + hrs[i]).addClass("future");
  }
}


$(".saveBtn").on("click", function () {
  var hr = $(this).data("hr");
  var description = $("#" + hr).val();
  localStorage.setItem(hr, description);
});

for (var i = 0; i < hrs.length; i++) { 
    // hrs[i] represents the hr (9,10,11,12) 
    //which also represents the key in localstorage
    // i = 0, i(0)< hrs.length(9), hrs[0] = 9, i++(1)
    // i = 1, i(1) < hrs.length(9), hrs[1] = 10, i++(2), 
    // i = 2, i(2) < hrs.length(9), hrs[2] = 11, i++(3),
    // ...
    // i = 8, i(8) < hrs.length(9), hrs[8] = 17,  i++ (9)
    // i = 9, i(9) < hrs.length(9), stop & exits forloop
    $("#" + hrs[i]).val(localStorage.getItem(hrs[i])); 
}

