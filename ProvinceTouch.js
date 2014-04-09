#pragma strict

function Update () {
	if (Input.touchCount == 1 && Input.GetTouch(0).phase == TouchPhase.Began) {
		
		// Get the touch
		var touch = Input.GetTouch(0);
		// Transforms the touch in a Ray
		var ray = Camera.main.ScreenPointToRay(touch.position);
        var hit : RaycastHit;
		// Verifies if the ray (touch) has touched any province
    	if (Physics.Raycast (ray, hit) && hit.transform.gameObject.tag == "Province" ) {
            // raycast hit this gameobject
			hit.transform.gameObject.GetComponent(ProvinceTouched).ProvinceWasTouched();
			// Activate the cube on this province
			for (var child : Transform in hit.transform) {
				if (child.name == "Cube") {
					child.gameObject.SetActive(true);
				}
			}
         }
	}
}