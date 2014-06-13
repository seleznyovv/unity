#pragma strict

static public var DeathCount:int;

//①文字のパラメータ
var style : GUIStyle ;
function Start () {
	
	DeathCount = 0;

	style.fontSize = 40;
	style.normal.textColor = Color.red;
}

function Update () {
	guiText.text = DeathCount.ToString();
}

//②条件を満たしたら「GAME　OVER」の文字を出す
function OnGUI(){
	if( DeathCount >= 20 )
	{
	
		GUI.Label( Rect( Screen.width / 2 - 100 , 250 , 200 , 80 ) , "GAME OVER" , style );

		if( GUI.Button( Rect( Screen.width / 2 - 100 , 200 , 200 , 30 ), "Go Title"))
		{
			Application.LoadLevel("Title");
		}
	}
}

