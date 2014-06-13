#pragma strict

function Update () {
	
	var deltaPosition:Vector2 =
		Input.GetTouch(0).deltaPosition / 100;

	var Position : Vector3 = transform.localPosition;
	Position.x = Position.x - deltaPosition.x;
	Position.y = Position.y - deltaPosition.y;
	transform.localPosition = Position;
}