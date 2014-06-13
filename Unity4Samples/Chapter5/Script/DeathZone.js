#pragma strict

function OnTriggerEnter( col : Collider)
{
	DeathCounter.DeathCount++;
	Score.ScorePoint--;
	GameObject.DestroyObject(col.gameObject);
}

