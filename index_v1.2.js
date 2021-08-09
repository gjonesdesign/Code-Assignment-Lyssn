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
			li.innerHTML = "<div>" + index.lname + ', ' + index.fname + "<span class='material-icons orange'>medication</span></div>";
			li.addEventListener("click", function () {
				if (this.childNodes[1]) {
					this.removeChild(this.childNodes[1]);
				} else {
					var div = document.createElement("div");
					div.innerHTML = "<p>" + index.id + "</p>" + "<p>Therapist</p>";
					this.appendChild(div);
				}
			});
		} else {
			li.innerHTML = "<div>" + index.lname + ', ' + index.fname + "<span class='material-icons purple'>info</span></div>";

			li.addEventListener("click", function () {
				if (this.childNodes[1]) {
					this.removeChild(this.childNodes[1]);
				} else {
					var div = document.createElement("div");
					div.innerHTML = "<p>" + index.id + "</p>" + "<p>Patient</p>";
					this.appendChild(div);
				}
			});
		}
		user_list.appendChild(li);
	}
}