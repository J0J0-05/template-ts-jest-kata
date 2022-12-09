class Game {
	score = 0;
	roll(pins: number): void  {
		this.score += pins;
	}
}

describe('Kata Bowling', () => {
	it('gutter game', () => {
		const game = new Game();
		for(let i = 0;i<20;i++){
			game.roll(0)
		}
		expect(game.score).toBe(0);
	});

	it('1 pin for each try', () => {
		const game = new Game();
		for(let i = 0;i<20;i++){
			game.roll(0)
		}
		expect(game.score).toBe(0);
	});
});
