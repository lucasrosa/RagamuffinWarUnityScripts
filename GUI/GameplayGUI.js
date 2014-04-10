#pragma strict

function OnGUI () {

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (20,40,80,20), "Pause")) {
		print ("You clicked me!");
	}
}