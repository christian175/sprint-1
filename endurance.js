async function startProgram() {
	setMainLed({ r: 255, g: 2, b: 240 });
	await speak('Ready, Set, Go', false);
	await delay(1);
	await roll(0, 97, 10);
	stopRoll();
	setHeading(90);
	await fade({ r: 255, g: 0, b: 237 }, { r: 5, g: 0, b: 255 }, 0);
	await roll(0, 106, 5);
	stopRoll();
	setHeading(90);
	await fade({ r: 5, g: 0, b: 255 }, { r: 0, g: 255, b: 255 }, 0);
	await roll(0, 97, 5);
	stopRoll();
	setHeading(90);
	await fade({ r: 2, g: 235, b: 255 }, { r: 12, g: 255, b: 13 }, 0);
	await roll(0, 106, 5);
	setMainLed({ r: 255, g: 8, b: 10 });
	await Sound.play(true);
	exitProgram();
}

				.