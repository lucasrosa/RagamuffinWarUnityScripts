#pragma strict

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
			var positions = GameObject.FindGameObjectsWithTag("Position");
			for (var position : GameObject in positions) {
				position.GetComponent(Position).Deactivate();
			}
			
			// raycast hit this gameobject so calling the WasTouched method of it
			hit.transform.gameObject.GetComponent(Position).PositionWasTouched();
         } else {
         	// If touched anywhere else (not in a position), deactivate all the positions
         	for (var position : GameObject in positions) {
				position.GetComponent(Position).Deactivate();
			}
         }
	}
}