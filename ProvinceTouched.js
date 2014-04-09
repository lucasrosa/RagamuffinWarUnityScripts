#pragma strict

// Keeps a reference for all the neighbors of this province
var neighbors : GameObject[];

function deactivateAll () {
	// Search for all the instances of provinces by tag
	var provinces = GameObject.FindGameObjectsWithTag("Province");
	
	// Gets the Sphere and Cube of the current Province and deactivate them
	for (var province : GameObject in provinces) {
		for (var child : Transform in province.transform) {
			if (child.name == "Sphere" || child.name == "Cube") {
				child.gameObject.SetActive(false);
			}
		}
	}
}
function ProvinceWasTouched () {
	// When one province is touched, all the other provinces receive a call to deactivate themselves
	deactivateAll();

	// Activate spheres on neighbors
	for (var neighbor : GameObject in neighbors) {
		for (var child : Transform in neighbor.transform) {
			if (child.name == "Sphere") {
				child.gameObject.SetActive(true);
			}
		}
	}
}