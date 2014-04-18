#pragma strict

public enum Category {Artillery = 'Artillery', Cavalry = 'Cavalry', HeavyArtillery = 'Heavy Artillery', Infantary = 'Infantary', BlackLancers = 'Black Lancers'}
public enum Side {Farroupilha = 'Farroupilha', Imperial = 'Imperial'}

public class Unities extends MonoBehaviour
{
	public var unitSide : Side;
	public var unitCategory : Category;
	public var attack : int;
	public var defense : int;
	public var troopSize : int;
	
	public function Unities(unitSide : Side, unitCategory : Category, attack : int, defense : int, troopSize : int)
	{
		this.unitSide = unitSide;
		this.unitCategory = unitCategory;
		this.attack = attack;
		this.defense = defense;
		this.troopSize = troopSize;
	}

	/**
	* Default values:		
		- {TroopSize: 20}
	* Other values:
	* Category.Artillery 
		- {Side: Side.Farroupilha or Side.Imperial} 
		- {Attack/Defence: 30/15}
	* Category.Cavalry 
		- {Side: Side.Farroupilha or Side.Imperial} 
		- {Attack/Defence: 60/60}
	* Category.Infantary 
		- {Side: Side.Farroupilha or Side.Imperial} 
		- {Attack/Defence: 30/30}
	* Category.HeavyArtillery 
		- {Side: Side.Farroupilha or Side.Imperial} 
		- {Attack/Defence: 45/30}
	* Category.BlackLancers 
		- {Side: Side.Farroupilha} 
		- {Attack/Defence: 80/40}
	*/
}