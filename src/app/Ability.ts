export class Ability {
	id: number;
	name: string;
	description: string;
	levels: {
		one: string,
		two: string,
		three: string,
		four: string,
		five: string
	};
	possessedBy: string;
	specialties: string;
}