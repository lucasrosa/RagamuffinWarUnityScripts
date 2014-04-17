#pragma strict
/* A position represents a "clickable" hexagon in the grid
 */

public var unit : GameObject; // The unit currently on this position (the owner)
public var neighborPositions : GameObject[]; // The positions around this position, the ones that can be targeted by unit
public var isOutpost : boolean = false; // Identify if this province is an outpost
private var particlesPositionTouched : GameObject; // Active after this position was touched
private var particlesNeighborTouched : GameObject; // Active after a neighbor of this position was touched


function Start () {
	// Sets the particles
	for (var child : Transform in transform) {
		if (child.name == "ParticlesPositionTouched") {
			particlesPositionTouched = child.gameObject;
		} else if (child.name == "ParticlesNeighborTouched") {
			particlesNeighborTouched = child.gameObject;
		}
	}
}

function PositionWasTouched () {
	// Set active the particlesPositionTouched
	particlesPositionTouched.SetActive(true);
	
	// Call the methods on the neighbors
	for (var neighbor : GameObject in neighborPositions) {
		neighbor.GetComponent(Position).NeighborWasTouched();
	}
}

function NeighborWasTouched () {
	// Set active the particlesPositionTouched
	particlesNeighborTouched.SetActive(true);
}

function Deactivate () {
	// Deactive particlesPositionTouched and particlesPositionTouched
	particlesPositionTouched.SetActive(false);
	particlesNeighborTouched.SetActive(false);
}