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
    ceilsArr[startPosY][startPosX].style.background = 'red';

    moveRight(startPosX, startPosY);
    // console.log(ceilsArr);
  }


  // Движение вправо

  function moveRight(x, y) {

    let timeInterval = 1000;

    setInterval(() => {

      timeInterval = 1000;
      ceilsArr[y][x].style.background = 'transparent';
      ceilsArr[y][x+1].style.background = 'red';
      x++;

      if(x == 9) {
        setTimeout(() => {
          ceilsArr[y][9].style.background = 'transparent';
          ceilsArr[y][0].style.background = 'red';
          x = 0;
        }, timeInterval);

        timeInterval = 2000;
      }

    }, timeInterval);

  }



  document.addEventListener('keydown', (e) => {
    if(e.code == 'ArrowRight') {
      console.log('Нажата клавиша вправо');
    }

    if(e.code == 'ArrowDown') {
      console.log('Нажата клавиша вниз');
    }

    if(e.code == 'ArrowLeft') {
      console.log('Нажата клавиша влево');
    }

    if(e.code == 'ArrowUp') {
      console.log('Нажата клавиша вверх');
    }

  });


  // Начало игры

  function startGame() {

    setPlayer();


  }


  document.querySelector('.btn__newgame').addEventListener('click', startGame);



});