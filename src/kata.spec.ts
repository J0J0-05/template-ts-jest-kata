class Game {
	score: number = 0;
	
	Roll(pinsDown: number) {
		return this.score += pinsDown;
	}

}

describe('Kata Bowling', () => {
	it('Gutter Game', () => {
		const game = new Game();
		for(let i = 0; i<20;i++){
			game.Roll(0)
		}
		expect(game.score).toBe(0);
	});

	it('One pin down on each rolls', () => {
		const game = new Game();
		for(let i = 0; i<20;i++){
			game.Roll(1)
		}
		expect(game.score).toBe(20);
	});

});
