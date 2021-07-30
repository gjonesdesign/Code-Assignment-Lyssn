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
		let index = user_array[i];
		if (user_array[i].isTherapist) {
			li.innerHTML = index.lname + ', ' + index.fname + "<span class='material-icons orange'>medication</span>";
		} else {
			li.innerHTML = index.lname + ', ' + index.fname + "<span class='material-icons purple'>info</span>";
		}
		li.addEventListener("click", function () {
			display_id(index.id)
		});
		user_list.appendChild(li);
	}
}

function display_id(id) {
	if (document.getElementById("id")) {
		var dialog_box = document.getElementById("id");
		dialog_box.innerHTML = "<p>User ID: " + id + "</p>";
	} else {
		var dialog_box = document.createElement("dialog");
		dialog_box.id = "id";
		dialog_box.setAttribute("open", "");
		dialog_box.innerHTML = "<p>User ID: " + id + "</p>";
		user_list.appendChild(dialog_box);
	}
}