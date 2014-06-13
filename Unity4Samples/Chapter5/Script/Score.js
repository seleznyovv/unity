#pragma strict


static public var ScorePoint:int;

function Start () {
	ScorePoint = 0;
}

function Update () {
	guiText.text = ScorePoint.ToString();
}


