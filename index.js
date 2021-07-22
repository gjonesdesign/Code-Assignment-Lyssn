fetch('users.json')
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		display(data);
	})
	.catch(function (error) {
		console.log(error);
	});

var user_list = document.getElementById("user-list");

function display(user_array) {
	for (var i = 0; i < user_array.length; i++) {
		var li = document.createElement("li");
		li.innerHTML = user_array[i].lname + ', ' + user_array[i].fname;
		user_list.appendChild(li);
	}
}