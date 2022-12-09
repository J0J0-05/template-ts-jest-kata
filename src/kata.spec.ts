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
			game.roll(1)
		}
		expect(game.score).toBe(20);
	});

	it('spare case', () => {
		const game = new Game();
		game.roll(3);
		game.roll(7);
		game.roll(2);
		game.roll(0);
		for(let i = 0;i<16;i++){
			game.roll(0);
		}
		expect(game.score).toBe(14);
	});
});
