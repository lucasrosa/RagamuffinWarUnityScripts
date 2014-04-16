#pragma strict

public class ResumeButton extends GameButton {
	private var instance : GameManager;
	public var menu : GameObject;
	public var pauseButton : GameObject;
			
	function buttonPressed () {
		invertPause();
		guiTexture.color = Color.gray;
	}

	function invertPause() {
	    instance = MonoBehaviour.FindObjectOfType(GameManager);
	    if (instance == null) {
	    	Debug.Log("There is no GameManager instance");
		} else {
			if (instance.isPaused) {
				unpauseGame();
			}// else {
			//	pauseGame();
			//}
		}
	}

	function pauseGame() {
	    instance = MonoBehaviour.FindObjectOfType(GameManager);
	    if (instance == null) {
	    	Debug.Log("There is no GameManager instance");
		} else {
			instance.isPaused = true;
			menu.SetActive(true);
			guiTexture.color = Color.gray;
			this.gameObject.SetActive(false);
			Debug.Log("Game paused.");
		}
	}

	function unpauseGame() {
	    instance = MonoBehaviour.FindObjectOfType(GameManager);
	    if (instance == null) {
	    	Debug.Log("There is no GameManager instance");
		} else {
			instance.isPaused = false;
			menu.SetActive(false);
			pauseButton.SetActive(true);
			Debug.Log("Game unpaused.");
		}
	}
}
