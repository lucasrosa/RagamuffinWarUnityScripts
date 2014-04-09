#pragma strict

public var draggingSpeed : float = 0.05f; // for camera at xyz = (215.5,170,131.7) and field of view at 30 and Terrain (at y = 0 and height at 90)

public var perspectiveZoomSpeed 	 : float = 0.5f;        // The rate of change of the field of view in perspective mode.
public var orthoZoomSpeed 			 : float = 0.5f;        // The rate of change of the orthographic size in orthographic mode.
public var perspectiveFieldOfViewMin : float = 30.0f;
public var perspectiveFieldOfViewMax : float = 70.0f;


// Defines the maximum and minimum values for the camera movement
// It is used to limit the camera to the Terrain Boundaries
// TODO: Should calculate this values based on the terrain size
public var maximumCameraX : float = 230;
public var maximumCameraZ : float = 300;
public var minimumCameraX : float = 120;
public var minimumCameraZ : float = 100;

function Update () {
	
	if (Input.touchCount == 1 && Input.GetTouch(0).phase == TouchPhase.Moved) {
		
		// Store the touch.
		var touch = Input.GetTouch(0);
		
        // Get movement of the finger since last frame
		var touchDeltaPosition:Vector2 = touch.deltaPosition;
		
		//Define the dragging speed based on the field of view
		var currentDraggingSpeed : float = (camera.fieldOfView / 30.0f) * draggingSpeed;
		
		// Move object across XY plane
		if ((Mathf.Abs(touchDeltaPosition.x) + Mathf.Abs(touchDeltaPosition.y)) > 3) {
			//camera.transform.Translate (-touchDeltaPosition.x  * draggingSpeed, 0, -touchDeltaPosition.y * draggingSpeed, Space.World);
			camera.transform.Translate (-touchDeltaPosition.x  * currentDraggingSpeed, 0, -touchDeltaPosition.y * currentDraggingSpeed, Space.World);
			if (camera.transform.position.z < minimumCameraZ)
				camera.transform.position.z = minimumCameraZ;
			if (camera.transform.position.z > maximumCameraZ)
				camera.transform.position.z = maximumCameraZ;
			if (camera.transform.position.x < minimumCameraX)
				camera.transform.position.x = minimumCameraX;
			if (camera.transform.position.x > maximumCameraX)
				camera.transform.position.x = maximumCameraX;
		}
		
    } 
    // If there are two touches on the device...
    else if (Input.touchCount == 2)
    {
        // Store both touches.
        var touchZero = Input.GetTouch(0);
        var touchOne = Input.GetTouch(1);

        // Find the position in the previous frame of each touch.
        var touchZeroPrevPos = touchZero.position - touchZero.deltaPosition;
        var touchOnePrevPos = touchOne.position - touchOne.deltaPosition;

        // Find the magnitude of the vector (the distance) between the touches in each frame.
        var prevTouchDeltaMag = (touchZeroPrevPos - touchOnePrevPos).magnitude;
        var touchDeltaMag = (touchZero.position - touchOne.position).magnitude;

        // Find the difference in the distances between each frame.
        var deltaMagnitudeDiff = prevTouchDeltaMag - touchDeltaMag;

        // If the camera is orthographic...
        if (camera.isOrthoGraphic)
        {
            // ... change the orthographic size based on the change in distance between the touches.
            camera.orthographicSize += deltaMagnitudeDiff * orthoZoomSpeed;

            // Make sure the orthographic size never drops below zero.
            camera.orthographicSize = Mathf.Max(camera.orthographicSize, 0.1f);
        }
        else
        {
            // Otherwise change the field of view based on the change in distance between the touches.
            camera.fieldOfView += deltaMagnitudeDiff * perspectiveZoomSpeed;

            // Clamp the field of view to make sure it's between 0 and 180.
            camera.fieldOfView = Mathf.Clamp(camera.fieldOfView, perspectiveFieldOfViewMin, perspectiveFieldOfViewMax);
        }
    }
}

