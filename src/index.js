import GameState from 'states/GameState';
import Stats from 'stats.js/src/Stats.js';

class Game extends Phaser.Game {
	constructor() {
		super(500, 500, Phaser.AUTO, 'content', null);
		this.state.add('GameState', GameState, false);
		this.state.start('GameState');
		this.addStats();
	}

	addStats() {
		var stats = new Stats();

		stats.setMode(0);

		stats.domElement.style.position = 'absolute';
		stats.domElement.style.right = '0px';
		stats.domElement.style.top = '0px';

		document.body.appendChild(stats.domElement);

		setInterval(function () {
			stats.begin();
			stats.end();
		}, 1000 / 60);
	}

}

new Game();
