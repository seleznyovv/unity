#pragma strict

//①GUIの描画
function OnGUI()
{
	//②ボタンの作成
	if( GUI.Button( Rect ( Screen.width / 2 -100 , 200 , 200 , 30) , "GAME START"))
	{
		//③ボタンが押された後シーンを切り替え
		Application.LoadLevel("main");
	}
}



