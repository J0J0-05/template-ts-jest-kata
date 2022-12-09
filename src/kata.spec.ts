class Game {
	score: number = -1;
	roll(point: number) {
		return null;
	}
}

describe('describe todo', () => {
	it('test todo', () => {
		
		const game = new Game();
		
		for(var i = 0;i<20;i++){
			game.roll(0)
		}
		
		expect(game.score).toBe(0);
	});
});
