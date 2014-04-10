#pragma strict
private var thisGameButton : GameButton;

function Start () {
	// This is a polymorphic statement, the component should be a sublcass of GameButton: e.g. PauseButton
	thisGameButton = gameObject.GetComponent(GameButton);
}

function Update () {
	if (Input.touchCount == 1 && Input.GetTouch(0).phase == TouchPhase.Ended) {
		// Get the touch
		var touch = Input.GetTouch(0);
		// If the touch position is inside this button texture, call the buttonPressed method on this button
		if (guiTexture.HitTest(touch.position)) {
			thisGameButton.buttonPressed();
		}
	}
}