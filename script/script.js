document.addEventListener('DOMContentLoaded', () => {

  let gameWrap = document.querySelector('.game__wrap'),
      ceilsArr = [];

  newGamePopup();

  // Окно приветствия

  function newGamePopup() {

    let newGamePopup = document.createElement('div');
    gameWrap.textContent = '';
    newGamePopup.innerHTML = "<h1>Добро пожаловать!!!</h1><span class='btn__newgame btn'>Начать игру</span>";
    newGamePopup.style.textAlign = 'center';
    newGamePopup.style.position = 'relative';
    newGamePopup.style.top = '100px';
    newGamePopup.querySelector('.btn__newgame').style.border = '2px solid green';
    newGamePopup.querySelector('.btn__newgame').style.padding = '10px 20px';

    gameWrap.append(newGamePopup);

  }

  // Отрисовка ячеек поля

  function setSeil() {

    gameWrap.textContent = '';

    for(let iterVer = 0; iterVer < 10; iterVer++) {

      ceilsArr[iterVer] = [];

      for(let iterHor = 0; iterHor < 10; iterHor++) {
        let ceil = document.createElement('span');
        ceil.style.display = 'inline-block';
        ceil.style.width = '60px';
        ceil.style.height = '60px';
        ceil.style.boxSizing = 'border-box';
        ceil.style.border = '1px solid green';
        ceil.setAttribute('posX', iterHor);
        ceil.setAttribute('posY', iterVer);
        ceilsArr[iterVer][iterHor] = ceil;
        gameWrap.append(ceil);
      }
    }

  }




  // Установка положения персонажа

  function setPlayer() {

    setSeil();
    let startPosX = Math.floor(Math.random() * Math.floor(10));
    let startPosY = Math.floor(Math.random() * Math.floor(10));
    ceilsArr[startPosY][startPosX].classList.add('active');

    move(startPosX, startPosY, direction);
    // console.log(ceilsArr);
  }


  // Движение персонажа

  let direction = 'right';
  let interval;

  function move(x, y, direction) {

    clearInterval(interval);

    interval = setInterval(() => {

      if(direction == 'right') {
        ceilsArr[y][x].classList.remove('active');
        x++;
        if(x == 10) {
          x = 0;
        }
        ceilsArr[y][x].classList.add('active');
      }
      else if(direction == 'left') {
        ceilsArr[y][x].classList.remove('active');
        x--;
        if(x == -1) {
          x = 9;
        }
        ceilsArr[y][x].classList.add('active');
      }
      else if(direction == 'up') {
        ceilsArr[y][x].classList.remove('active');
        y--;
        if(y == -1) {
          y = 9;
        }
        ceilsArr[y][x].classList.add('active');
      }
      else if(direction == 'down') {
        ceilsArr[y][x].classList.remove('active');
        y++;
        if(y == 10) {
          y = 0;
        }
        ceilsArr[y][x].classList.add('active');
      }

    }, 100);

  }



  document.addEventListener('keydown', (e) => {

    let posX,
        posY;

    if(e.code == 'ArrowRight' || e.code == 'ArrowDown' || e.code == 'ArrowLeft' || e.code == 'ArrowUp') {
      posX = document.querySelector('.active').getAttribute('posx');
      posY = document.querySelector('.active').getAttribute('posy');
    }

    if(e.code == 'ArrowRight') {
      direction = 'right';
      move(posX, posY, direction);
    }

    if(e.code == 'ArrowDown') {
      direction = 'down';
      move(posX, posY, direction);
    }

    if(e.code == 'ArrowLeft') {
      direction = 'left';
      move(posX, posY, direction);
    }

    if(e.code == 'ArrowUp') {
      direction = 'up';
      move(posX, posY, direction);
    }

  });


  // Начало игры

  function startGame() {

    setPlayer();


  }


  document.querySelector('.btn__newgame').addEventListener('click', startGame);



});