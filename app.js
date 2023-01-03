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
    },
    start: function() {
        game.hideScreens();
        game.showScreen('gamecanvas');
        game.showScreen('scorescreen');
        game.mode = "intro";
        game.currentHero = undefined;
        game.offsetLeft = 0;
        game.ended = false;
        game.animationFrame = window.requestAnimationFrame(game.animate, game.canvas);
    },
    animate: function() {
        game.context.drawImage(game.currentLevel.backgroundImage, game.offsetLeft / 4, 0, game.canvas.width, game.canvas.height, 0, 0, game.canvas.width, game.canvas.height);
        game.context.drawImage(game.currentLevel.foregroundImage, game.offsetLeft / 4, 0, game.canvas.width, game.canvas.height, 0, 0, game.canvas.width, game.canvas.height);
        if (!game.ended) {
            game.animationFrame= window.requestAnimationFrame(game.animate, game.canvas);
        }
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
    load: function(number) {
        game.currentLevel={number:number};
        game.score=0;

        document.querySelector('#score').innerHTML = 'score: '+ game.score;
        let level = levels.data[number];

        game.currentLevel.backgroundImage = loader.loadImage('resources/icons/backgrounds/' + level.background + '.png');
        game.currentLevel.foregroundImage = loader.loadImage('resources/icons/backgrounds/' + level.foreground + '.png');
        
        loader.onload = game.start;
    }
};

const loader = {
    loaded: false,
    loadedCount: 0,
    totalCount: 0,
    init: function() {
    },
    loadImage: function(url) {
        this.loaded = false;
        this.totalCount++;
        game.showScreen('loadingscreen');
        let image = new Image();
        image.addEventListener('load', loader.itemLoaded, false);
        image.src = url;

        return image;
    },
    loadSound: function(url) {
        this.loaded = false;
        this.totalCount++;
        game.showScreen('loadingscreen');
        let audio = new Audio();
        audio.addEventListener('canplaythrough', loader.itemLoaded, false);
        audio.src = url + '.mp3';

        return audio;
    },
    itemLoaded: function(ev) {
        loader.loadedCount++;
        document.querySelector('#loadingmessage').innerHTML = 'Loaded' + loader.loadedCount + ' of' + loader.totalCount;
        if(loader.loadedCount === loader.totalCount) {
            loader.loaded = true;
            loader.loadedCount = 0;
            loader.totalCount = 0;

            game.hideScreen('loadingscreen');
            if(loader.onload) {
                loader.onload();
                loader.onload = undefined;
            }
        }
    }
}

window.addEventListener('load', () => {
    console.log('page has been loaded.');
    game.init();
});
