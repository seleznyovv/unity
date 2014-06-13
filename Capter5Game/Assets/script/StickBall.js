#pragma strict

private var myJoint : CharacterJoint;

//
public var force : float;
public var torque : float;

//
function OnCollisionEnter(col : Collision)
{
	//
	if(col.gameObject.tag == "Bullet")
	{
		if(myJoint == null)
		{
			//
			myJoint = gameObject.AddComponent("CharacterJoint") as CharacterJoint;
			myJoint.connectedBody = col.rigibody;
			
			//
			myJoint.breakForce = force;
			myJoint.breakTorque = torque;
		}
	}
}

function Start () {

}

function Update () {

}