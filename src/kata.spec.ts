class Game {
	totalScore: number[] = [];

	roll(pinsDown: number): void {
		this.totalScore.push(pinsDown);
	}

	score(): number {
		let frameIndex = 0;
		let result = 0;
		for (let frame = 0; frame < 10; frame++) {
			if (this.totalScore[frameIndex] == 10) {
				result += 10 + this.totalScore[frameIndex + 2];
			} else if (this.totalScore[frameIndex] + this.totalScore[frameIndex + 1] == 10) {
				result += 10 + this.totalScore[frameIndex + 2];
			} else {
				result += this.totalScore[frameIndex] + this.totalScore[frameIndex + 1];
			}
			frameIndex += 2;
		}
		return result;
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
		expect(game.score()).toBe(0);
	});

	it('One pin down on each rolls', () => {
		const game = new Game();
		rolls(game, 1, 20);
		expect(game.score()).toBe(20);
	});

	it('Spare case', () => {
		const game = new Game();
		game.roll(3);
		game.roll(7);

		game.roll(2);

		rolls(game, 0, 17);

		expect(game.score()).toBe(7 + 3 + 2 + 2);
	});

	it('Strike case', () => {
		const game = new Game();
		game.roll(10);

		game.roll(2);
		game.roll(3);

		rolls(game, 0, 16);

		expect(game.score()).toBe(10 + 2 + 3 + 2 + 3);
	});
});
