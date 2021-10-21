let $ = function (id) { return document.getElementById(id); };

let volunteerArray = [];

let displayVolunteers = function () {
    // display the volunteers in the text area
    let volunteerString = "";

    console.log(volunteerArray)

    for (let i = 0; i < volunteerArray.length; i++) {
        volunteerString = volunteerString + "\n" + (i+1) + ". " + volunteerArray[i];
    }

    $("volunteerList").value = volunteerString;
};

let addVolunteer = function () {
    // get the data from the form
    let volunteerString = $("first_name").value + " " + $("last_name").value;

    // store the data in an array
    volunteerArray.push(volunteerString);
    
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};


let deleteVolunteer = function () {
    let volunteerString = $("first_name").value + " " + $("last_name").value;

    console.log(volunteerArray.indexOf(volunteerString));

    console.log(volunteerString);

    // The splice method below was deleting the incorrect names if the name was not found
    // I.e. if the indexOf returns -1, then the last name added will be deleted since -1
    // returns the bottom of the array stack.
    // volunteerArray.splice(volunteerArray.indexOf(volunteerString), 1);

    // I had better results with filter since it only filters what it finds.
    volunteerArray = volunteerArray.filter(name => name !== volunteerString);
   
	 
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the delete form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};

let clearList = function () {
    // delete the data from the arrays
    volunteerArray = [];
    
	//   alternative way to delete all of the data from the array
	//    volunteerArray.length = 0;
    
    // remove the volunteers data from the web page
    $("volunteerList").value = "";
    
    $("first_name").focus();
};

let sortList = function () {
    // sort the scores
    volunteerArray.sort();
    
    // display the scores
    displayVolunteers();    
};

//When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
    $("add_button").onclick = addVolunteer;
	$("delete_button").onclick = deleteVolunteer;
    $("clear_button").onclick = clearList;    
    $("sort_button").onclick = sortList;    
    $("first_name").focus();
};
