#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(col : Collider)
{
	GameObject.DestroyObject(Color.gameObject);
}