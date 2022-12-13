class Game {
	score = 0;

	roll(pinsDown: number): number {
		return (this.score += pinsDown);
	}
}

describe('Kata Bowling', () => {
	function rolls(game: Game, pinsDown: number, rolls: number): void {
		for (let i = 0; i < rolls; i++) {
			game.roll(pinsDown);
		}
	}

	it('Gutter Game', () => {
		const game = new Game();
		rolls(game, 0, 20);
		expect(game.score).toBe(0);
	});

	it('One pin down on each rolls', () => {
		const game = new Game();
		rolls(game, 1, 20);
		expect(game.score).toBe(20);
	});

	it('Spare case', () => {
		const game = new Game();
		game.roll(3);
		game.roll(7);

		game.roll(2);
		rolls(game, 0, 17);

		expect(game.score).toBe(7 + 3 + 2 + 2);
	});
});
