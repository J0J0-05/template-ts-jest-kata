class Game {
	totalScore : number[] = [];

	roll(pinsDown: number): void {
		this.totalScore.push(pinsDown);
	}

	score(): number {
		let frameIndex = 0;
		let result = 0;
		for(let i = 0;i<10;i++){
			if(this.totalScore[frameIndex] + this.totalScore[frameIndex+1] == 10){

			}
		}
		return this.totalScore;
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
});
