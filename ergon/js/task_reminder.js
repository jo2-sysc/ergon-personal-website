document.addEventListener('DOMContentLoaded', () => {
	const addCard = (title, progress, description) => `
	<div class="col-12 col-md-6 col-lg-3">
	    <div class="card">

	        <div class="card-header px-4 pt-4">
	            <div class="card-actions float-right">
	            </div>
	            <h5 class="card-title mb-0">${title}</h5>
	            <div class="badge ${progress == 100 ? 'bg-success' : 'bg-warning'} my-2">${progress == 100 ? 'Finished' : 'In progress'}</div>
	        </div>
	        <div class="card-body px-4 pt-2">
	            <p>${description}</p>
	        </div>
	        <ul class="list-group list-group-flush">
	            <li class="list-group-item px-4 pb-4">
	                <p class="mb-2 font-weight-bold">Progress <span class="float-right">${parseInt(progress)}%</span></p>
	                <div class="progress progress-sm">
	                    <div class="progress-bar" role="progressbar" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100" style="width: ${progress}%;">
	                    </div>
	                </div>
	            </li>
	        </ul>
	    </div>
	</div>
	`

	document.getElementById("new-task").addEventListener('click', () => {
		let task_button = document.getElementById("new-task");
		task_button.innerText == "New Task" ? task_button.innerText = "Close Task" : task_button.innerText = "New Task";

		let form = document.getElementById("input-task");
		form.style.display == "none" || form.style.display == "" ? 
		form.style.display = "block" : form.style.display = "none";
	});

	 // 1. Add Event Listener to Submit Button
	 // 2. Checking, get value from three input boxes
	 // 3. Check progress whether it is an integer between 0 - 100
	 // 4. Output error msg

	document.getElementById("submit-btn").addEventListener('click', () => {
		let title = document.getElementById("task-name").value;
		let progress = document.getElementById("progress").value;
		let description = document.getElementById("description").value;

		if (title == '' || progress == '' || description == ''){
			alert('Please fill in all of the required fields');
		} else {
			// parseInt progress str -> int
			// if parseInt progress > 0 and < 100
			// progress = parseInt(progress)
			// alert msg
			if (parseInt(progress) >= 0 && parseInt(progress) <= 100){
				progress = parseInt(progress);
				document.getElementById('cardholder').innerHTML += addCard(title, progress, description);
			} else {
				alert('Please input an appropriate percentage');
			}
		}
		document.getElementById("task-name").value = '';
		document.getElementById("progress").value = '';
		document.getElementById("description").value = '';
	});
});

