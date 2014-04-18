#pragma strict
/* A position represents a "clickable" hexagon in the grid
 */

public var unit : GameObject = null; // The unit currently on this position (the owner)
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
	// if this position belongs to the player
	if (unit != null && unit.GetComponent(Unit).isPlayer) {
		// Set active the particlesPositionTouched
		particlesPositionTouched.SetActive(true);
		
		// Call the methods on the neighbors
		for (var neighbor : GameObject in neighborPositions) {
			neighbor.GetComponent(Position).NeighborWasTouched();
		}
	}
	
}

function PositionWasTouched (attackerPosition : GameObject) {
	// if this position is being attacked and the attacker is a neighbor
	if (attackerPosition in neighborPositions) {
		//but has no player on it
		if (unit == null) {
			// sets this unit equals to the attacker unit
			unit = attackerPosition.GetComponent(Position).unit;
			// moves this unit equals to the this position
			unit.transform.position = transform.position;
			// sets thie attacker's unit equals null
			attackerPosition.GetComponent(Position).unit = null;
		} else if (unit.GetComponent(Unit).isPlayer) { // if the unit is a friend
			
		} else {  // if the unit is an enemy
		
		}
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