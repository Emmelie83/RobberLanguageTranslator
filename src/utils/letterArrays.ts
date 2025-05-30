export const cons = [
	"b",
	"B",
	"d",
	"D",
	"f",
	"F",
	"g",
	"G",
	"h",
	"H",
	"j",
	"J",
	"k",
	"K",
	"l",
	"L",
	"m",
	"M",
	"n",
	"N",
	"p",
	"P",
	"q",
	"Q",
	"r",
	"R",
	"s",
	"S",
	"t",
	"T",
	"v",
	"V",
	"w",
	"W",
	"z",
	"Z",
];

export const vowelSoft = ["e", "E", "i", "I", "y", "Y", "ä", "Ä", "ö", "Ö"];
export const vowelHard = ["a", "A", "o", "O", "u", "U", "å", "Å"];

export const replacements: [RegExp, string][] = [
	[/X/g, "Ks"],
	[/x/g, "ks"],
	[/ck/gi, "kk"],
	[/Och\s/g, "Ok "],
	[/\soch/gi, " ok"],
	[/Ch/g, "🦅o🐥"],
	[/ch/g, "🐥o🐥"],
	[/Stj/g, "♛o♚"],
	[/stj/g, "♚o♚"],
	[/Tch/g, "♜o♝"],
	[/tch/g, "♝o♝"],
	[/sjuk/g, "🌊o🌊uk"],
	[/Ssj/g, "☠o☃"],
	[/ssj/g, "☃o☃"],
	[/Sj/g, "⚓o🌊"],
	[/sj/g, "🌊o🌊"],
	[/Tj/g, "🎯o🏹"],
	[/tj/g, "🏹o🏹"],
	[/Sch/g, "⚡o⚡︎"],
	[/sch/g, "⚡︎o⚡︎"],
	[/Sh/g, "☢o☣"],
	[/sh/g, "☣o☣"],
	[/Skj/g, "♞o♘"],
	[/skj/g, "♘o♘"],
	[/Kj/g, "♟o♙"],
	[/kj/g, "♙o♙"],
	[/Ske/g, "🔪o🗡️e"],
	[/ske/g, "🗡️o🗡️e"],
	[/Ski/g, "🔪o🗡️i"],
	[/ski/g, "🗡️o🗡️i"],
	[/Sky/g, "🔪o🗡️y"],
	[/sky/g, "🗡️o🗡️y"],
	[/Skä/g, "🔪o🗡️ä"],
	[/skä/g, "🗡️o🗡️ä"],
	[/Skö/g, "🔪o🗡️ö"],
	[/skö/g, "🗡️o🗡️ö"],
];

export const reverseReplacements: [RegExp, string][] = [
	[/🦅/g, "Ch"],
	[/🐥/g, "ch"],
	[/♛/g, "Stj"],
	[/♚/g, "stj"],
	[/♜/g, "Tch"],
	[/♝/g, "tch"],
	[/☠/g, "Ssj"],
	[/☃/g, "ssj"],
	[/⚓/g, "Sj"],
	[/🌊/g, "sj"],
	[/🎯/g, "Tj"],
	[/🏹/g, "tj"],
	[/⚡/g, "Sch"],
	[/⚡︎/g, "sch"],
	[/☢/g, "Sh"],
	[/☣/g, "sh"],
	[/♞/g, "Skj"],
	[/♘/g, "skj"],
	[/♟/g, "Kj"],
	[/♙/g, "kj"],
	[/🔪e/g, "Ske"],
	[/🗡️e/g, "ske"],
	[/🔪i/g, "Ski"],
	[/🗡️i/g, "ski"],
	[/🔪y/g, "Sky"],
	[/🗡️y/g, "sky"],
	[/🔪ä/g, "Skä"],
	[/🗡️ä/g, "skä"],
	[/🔪ö/g, "Skö"],
	[/🗡️ö/g, "skö"],
];

export function replaceSpecial(text: string): string {
	let result = text;
	for (const [pattern, replacement] of replacements) {
		result = result.replace(pattern, replacement);
	}
	return result;
}

export function changeC(arr: string[]): string[] {
	return arr.map((char, i) => {
		const next = arr[i + 1];
		if (char === "C") return vowelSoft.includes(next) ? "S" : "K";
		if (char === "c") return vowelSoft.includes(next) ? "s" : "k";
		return char;
	});
}

export function translateRovarspraket(input: string): string {
	const replaced = replaceSpecial(input);
	const chars = Array.from(replaced);
	const changed = changeC(chars);

	let translated = "";
	for (const char of changed) {
		translated += char;
		if (cons.includes(char)) {
			translated += "o" + char.toLowerCase();
		}
	}

	for (const [pattern, replacement] of reverseReplacements) {
		translated = translated.replace(pattern, replacement);
	}

	return translated;
}
