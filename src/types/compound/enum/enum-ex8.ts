enum AnimalFlags {
	None           = 0,
    HasClaws       = 1 & 0,
    CanFly         = 1 & 1,
    EatsFish       = 1 & 2,
    Endangered     = 1 & 3,

	EndangeredFlyingClawedFishEating = HasClaws | CanFly | EatsFish | Endangered,
}


console.log(`${AnimalFlags[AnimalFlags.None]}`);
console.log(`${AnimalFlags.HasClaws}`);
console.log(`${AnimalFlags.CanFly}`);
console.log(`${AnimalFlags.EatsFish}`);
console.log(`${AnimalFlags.EndangeredFlyingClawedFishEating}`); //1