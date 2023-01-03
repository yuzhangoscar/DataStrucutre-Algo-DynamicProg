const game = {
    init: function() {
        const playgameButton = document.querySelector('#playgame');
        playgameButton.addEventListener('click', () => {
            game.showLevelScreen();
        });
        game.canvas = document.querySelector('#gamecanvas');
        game.context = game.canvas.getContext('2d');
        levels.init();
        game.hideScreens();
        game.showScreen('gamestartscreen');
    },
    hideScreens: function() {
        const screens = document.querySelectorAll('.gamelayer');
        for (let index = screens.length - 1; index >= 0; index--) {
            let screen = screens[index];
            screen.style.display = 'none';
        }
    },
    hideScreen: function(id) {
        const screen = document.querySelector(`#` + `${id}`);
        screen.style.display = 'none';
    },
    showScreen: function(id) {
        const screen = document.querySelector(`#` +`${id}`);
        screen.style.display = 'block';
    },
    showLevelScreen: function() {
        game.hideScreens();
        game.showScreen('levelselectscreen');
    }
}

const levels = {
    data: [{
        foreground: "desert-foreground",
        background: "clouds-background",
        entities:[]
    }, {
        foreground: "desert-foreground",
        background: "clouds-background",
        entities:[]
    }],
    init: function() {
        const levelSelectScreen = document.querySelector('#levelselectscreen');
        const buttonClickHandler = function() {
            game.hideScreen('levelselectscreen');
            levels.load(this.value-1);
        };

        for (let i = 0; i < levels.data.length; i++) {
            const button = document.createElement("input");
            button.type = "button";
            button.value = (i+1);
            button.addEventListener('click', buttonClickHandler);

            levelSelectScreen.appendChild(button);
        }
    },
    load: function(number) {}
};

window.addEventListener('load', () => {
    console.log('page has been loaded.');
    game.init();
});
