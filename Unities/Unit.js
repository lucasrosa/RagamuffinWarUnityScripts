#pragma strict

public var health 	: TextMesh;
public var isPlayer : boolean 	= false;
public var attack 	: int 		= 0;
public var defense 	: int 		= 0;

function Start () {
	if (!isPlayer) {
		health.color = Color.red;
	}
}

function Update () {

}