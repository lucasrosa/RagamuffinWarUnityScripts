#pragma strict
// This is the general singleton for GameManager
class GameManager extends UnityEngine.MonoBehaviour {   
    /*
     *	Global isPaused variable, all other scripts/components should obey to this variable
     *	***
     *	It can be referenced this way: 
    		private var instance : GameManager;
    		instance = MonoBehaviour.FindObjectOfType(GameManager);
    		instance.isPaused = true;
     *
    */
    
    public var isPaused : boolean;
	
	// Constructor
    function Start(){
        isPaused = false;
    }   
} 

function Awake() {   
    GameObject.DontDestroyOnLoad(this);
}