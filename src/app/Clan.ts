export class Clan {
	id: number;
	name: string;
	description: string;
	nickname: string;
	appearance: string;
	haven: string;
	background: string;
	creation: string;
	disciplines: string[];
	weaknesses: string;
	organization: string;
	quote: string;
	stereotypesSects: {
		anarchs: string,
		camarilla: string,
		sabbat: string
	};
	stereotypesClans: {
		brujah: string,
		caitiff: string,
		gangrel: string,
		malkavian: string,
		nosferatu: string,
		toreador: string,
		tremere: string,
		ventrue: string
	};
}