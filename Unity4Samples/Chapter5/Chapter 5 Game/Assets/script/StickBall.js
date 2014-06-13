#pragma strict

private var myJoint : CharacterJoint;

//①くっつく強さを設定
public var force:float;
public var torque:float;

private var timer:float;

//②物体同士が触れたときの処理
function OnCollisionEnter(col: Collision)
{

	//③タグの参照処理
	if( col.gameObject.tag == "Bullet" )
	{
		if( myJoint == null )
		{
			//④オブジェクトにCharacterJointを設定する
			myJoint = gameObject.AddComponent("CharacterJoint");
			myJoint.connectedBody = col.rigidbody;
			
			//⑤固定化の強さを設定する
			myJoint.breakForce = force;
			myJoint.breakTorque = torque;

		}
	}
}
