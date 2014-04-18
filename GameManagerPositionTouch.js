#pragma strict


private var positions : GameObject[];
private var currentTouchedPosition : GameObject = null;

function Start () {
	positions = GameObject.FindGameObjectsWithTag("Position");
}

function Update () {
	if (Input.touchCount == 1 && Input.GetTouch(0).phase == TouchPhase.Ended) {
		// Get the touch
		var touch = Input.GetTouch(0);
		// Transforms the touch in a Ray
		var ray = Camera.main.ScreenPointToRay(touch.position);
        var hit : RaycastHit;
		// Verifies if the ray (touch) has touched any position
    	if (Physics.Raycast (ray, hit) && hit.transform.gameObject.tag == "Position" ) {
			// Deactivate all the positions
			for (var position : GameObject in positions) {
				position.GetComponent(Position).Deactivate();
			}
			
			// if there is no current touched position
			if (currentTouchedPosition == null) {
				Debug.Log("1");
				// raycast hit this gameobject so calling the WasTouched method of it
				hit.transform.gameObject.GetComponent(Position).PositionWasTouched();
				
				// sets the current touched positon
				currentTouchedPosition = hit.transform.gameObject;
				
				var positionUnit = currentTouchedPosition.GetComponent(Position).unit;
				// if this position doesnt have a unit or it doesnt belong to a player
				if (!(positionUnit != null && positionUnit.GetComponent(Unit).isPlayer)){
					currentTouchedPosition = null;
				}
				
			} else {
				// raycast hit this gameobject so calling the WasTouched method of it
				hit.transform.gameObject.GetComponent(Position).PositionWasTouched(currentTouchedPosition);
				currentTouchedPosition = null;
			}
         } else {
         	// If touched anywhere else (not in a position), deactivate all the positions
         	for (var position : GameObject in positions) {
				position.GetComponent(Position).Deactivate();
			}
			
			currentTouchedPosition = null;
         }
	}
}