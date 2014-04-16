#pragma strict
private var thisGameButton : GameButton;

function Start () {
	// This is a polymorphic statement, the component should be a sublcass of GameButton: e.g. PauseButton
	thisGameButton = gameObject.GetComponent(GameButton);
}

function Update () {
	if (Input.touchCount == 1) {
		var touch = Input.GetTouch(0);
		if (Input.GetTouch(0).phase == TouchPhase.Ended) {
			// Get the touch
			// If the touch position is inside this button texture, call the buttonPressed method on this button
			if (guiTexture.HitTest(touch.position)) {
				thisGameButton.buttonPressed();
			}
		} else  {
			if (guiTexture.HitTest(touch.position)) {
				thisGameButton.guiTexture.color = Color.cyan;
			}
		}
	}
}