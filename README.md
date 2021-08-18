# User List Demo Website
 Site user list via Javascript  and JSON

# Description
Site is made by creating an array in javascript via user data in a JSON file, then looping through the arrayand creating a list element for every user. The elements are contained and centered in a flexbox container,and will stay in the center of the webpage even when the page is resized. 

v1.1: Additionally, this was updated by adding an onclick event to each name that would display their user ID via a dialogue box. If an new ID is clicked, the previous dialogue box is replaced as to not create duplicate,stacked IDs.

v1.2: The final update, denoted in the files marked v1.2 (which have been created to preserve the 1.1 solution), replaces the onclick event with a more specific eventListener, that displays a users ID and denotes if they're a therapist or patient below the selected user via a newly created div. If this div already exists, the eventListener will remove the additional info div on click.
