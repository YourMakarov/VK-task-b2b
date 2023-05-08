let DEF_MEANS = {'tower': 'А', 'floor': '3', 'room': 1, 'any_date': ""}

//get inputs by id:
let get_data = document.getElementById("get-data");
let clear_data = document.getElementById("clear-data");

let tower = document.getElementById("tower-num");
let floor = document.getElementById("floor-num");
let room = document.getElementById("room-num");

let date = document.getElementById("meeting-date");
let start_time = document.getElementById("start-time-input");
let end_time = document.getElementById("end-time-input");

start_time.addEventListener("change", () => {
  start_time.style.borderColor='black';
});
date.addEventListener("change", () => {
  date.style.borderColor='black';
});
end_time.addEventListener("change", () => {
  end_time.style.borderColor='black';
});


//print current data:
get_data.addEventListener("click", () => {
  if (start_time.value == '') start_time.style.borderColor='red';
  if (start_time.value == '') date.style.borderColor='red';
  if (start_time.value == '') end_time.style.borderColor='red';
            

	console.log({'tower_number': tower.value, 'floor_number': floor.value, 'room_number': room.value, 'meeting-date': date.value, 'start_time': start_time.value, 'end_time': end_time.value})
});

//clear all data
clear_data.addEventListener("click", () => {
	tower.value = DEF_MEANS['tower'];
  floor.value = DEF_MEANS['floor'];
  room.value = DEF_MEANS['room']; 
  date.value =  DEF_MEANS['any_date'];
  start_time.value = DEF_MEANS['any_date'];
  end_time.value = DEF_MEANS['any_date'];
});



