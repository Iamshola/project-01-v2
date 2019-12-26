document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const livesLeft = document.querySelector('.livesLeft')
  const scoreBoard = document.querySelectorAll('.score')
  const endMessage = document.querySelector('.endMessage')
  const startMessage = document.querySelector('.startMessage')
  let hiScore = localStorage.getItem('hiScore') || 0
  const hiScoreval = document.querySelector('.hiScore')
  const infoBox = document.querySelector('.infoBox')

  const reset = document.querySelector('.reset')
  const start = document.querySelector('.start')


  hiScoreval.innerHTML = hiScore

  let cells = []
  const dells = []
  const fells = []
  const width = 8
  let odd = true
  let even = false
  let frogsHome = 0

  let forward = true
  let backward = false
  let logIndices = [23, 24, 25]
  let logIndices2 = [22, 23]
  let logIndicesTop = [8, 9, 10]
  let forwardTop = true
  let backwardTop = false
  let forward1 = false
  let backward1 = true

  // ===========================Scores and Lives===========================
  let lives = 3
  let score = 0
  let currentIndex = width ** 2 - Math.ceil(width / 2)
  // ========================================Creating the DIVS/Grid  ===========================================================
  for (let i = 0; i < width * width; i++) {
    const cell = document.createElement('DIV')
    cell.setAttribute('id', i)

    if (i === currentIndex) cell.classList.add('frog')
    if ([1, 3, 5, 7].includes(i)) cell.classList.add('lilypad')

    if (i >= 8 && i <= 31) cell.classList.add('water')
    if (i >= 40 && i <= 55) cell.classList.add('road')

    cells.push(cell)
    grid.appendChild(cell)
  }


  function moveFrog(dir) {
    cells[currentIndex].classList.remove('frog')
    currentIndex += dir
    cells[currentIndex].classList.add('frog')
  }

  // ========================================DRIVE LOG=========================================================
  function driveLogTop() {
    if (forwardTop === true) {
      if (logIndicesTop.length === 3) {
        logIndicesTop.map(indx => cells[indx].classList.remove('log'))
      }
      logIndicesTop = logIndicesTop.map(indx => indx + 1)
      logIndicesTop.map(indx => cells[indx].classList.add('log'))

      if (logIndicesTop[2] === 16) {
        forwardTop = false
        backwardTop = true
      }
    }
    if (backwardTop === true) {
      if (logIndicesTop.length === 3) {
        logIndicesTop.map(indx => cells[indx].classList.remove('log'))
      }
      logIndicesTop = logIndicesTop.map(indx => indx - 1)
      logIndicesTop.map(indx => cells[indx].classList.add('log'))
      if (logIndicesTop[0] === 8) {
        backwardTop = false
        forwardTop = true
      }
    }
    if (logIndicesTop.some(indx => cells[indx].classList.contains('frog')) && currentIndex !== 16) {
      moveFrog(1)
      score = score + 50
      scoreBoard.forEach(function (element) {
        element.innerHTML = score
      })
    }
  }

  function driveLogBackward() {
    if (backward1 === true) {
      if (logIndices2.length === 2) {
        logIndices2.map(indx => cells[indx].classList.remove('log'))
      }
      logIndices2 = logIndices2.map(indx => indx - 1)
      logIndices2.map(indx => cells[indx].classList.add('log'))

      if (logIndices2[0] === 15) {
        backward1 = false
        forward1 = true
      }
    }

    if (forward1 === true) {
      if (logIndices2.length === 2) {
        logIndices2.map(indx => cells[indx].classList.remove('log'))
      }
      logIndices2 = logIndices2.map(indx => indx + 1)
      logIndices2.map(indx => cells[indx].classList.add('log'))

      if (logIndices2[1] === 23) {
        forward1 = false
        backward1 = true
      }
    }
    if (logIndices2.some(indx => cells[indx].classList.contains('frog')) && currentIndex !== 24) {
      moveFrog(1)
      score = score + 50
      scoreBoard.forEach(function (element) {
        element.innerHTML = score
      })
    }

  }

  function driveLogThird() {
    if (forward === true) {
      if (logIndices.length === 3) {
        logIndices.map(indx => cells[indx].classList.remove('log'))
      }
      logIndices = logIndices.map(indx => indx + 1)
      logIndices.map(indx => cells[indx].classList.add('log'))
      if (logIndices[2] === 32) {
        forward = false
        backward = true
      }
    }
    if (backward === true) {
      if (logIndices.length === 3) {
        logIndices.map(indx => cells[indx].classList.remove('log'))
      }
      logIndices = logIndices.map(indx => indx - 1)
      logIndices.map(indx => cells[indx].classList.add('log'))
      if (logIndices[0] === 24) {
        backward = false
        forward = true
      }
    }

    if (logIndices.some(indx => cells[indx].classList.contains('frog')) && currentIndex !== 32) {
      moveFrog(1)
      score = score + 50
      scoreBoard.forEach(function (element) {
        element.innerHTML = score
      })
    }
  }
  // ========================================DRIVE LOG=========================================================
  // ========================================DRIVE CAR=========================================================

  function addCarToEven() {
    if (odd === true) {
      for (let j = 0; j < width * width; j++) {
        const dell = document.querySelectorAll('DIV')

        if ([46, 48, 50, 52, 54, 56, 58, 60].includes(j)) dell[j].classList.add('car')
        if ([45, 47, 49, 51, 53, 55, 57, 59].includes(j)) dell[j].classList.remove('car')

        dells.push(dell)
      }
      even = true
    }
    if (even === false && odd === false) {
      endGame()
    }
  }

  function addCarToOdd() {
    if (even === true) {
      for (let k = 0; k < width * width; k++) {
        const fell = document.querySelectorAll('DIV')

        if ([45, 47, 49, 51, 53, 55, 57, 59].includes(k)) fell[k].classList.add('car')
        if ([46, 48, 50, 52, 54, 56, 58, 60].includes(k)) fell[k].classList.remove('car')

        fells.push(fell)
      }
      odd = true
    }
    if (even === false && odd === false) {
      endGame()
    }
  }

  // ========================================COLLISION CHECKER AND GAME==========================================================
  function collision() {
    if (cells[currentIndex].classList.contains('car') ||
      (cells[currentIndex].classList.contains('water') && !cells[currentIndex].classList.contains('log'))) {
      lives--
      livesLeft.textContent = lives
      endGame()
      cells[currentIndex].classList.remove('frog')
      currentIndex = 59
      cells[currentIndex].classList.add('frog')
    }
  }
  // ========================================END GAME==========================================================

  function endGame() {
    if (lives === 0) {
      even = false
      odd = false
      scoreBoard.forEach(function (element) {
        element.innerHTML = score
      })
      // currentIndex 

      if (score > hiScore) {
        hiScore = score
        hiScoreval.innerHTML = hiScore
        window.localStorage.setItem('hiScore', hiScore)
      }
      cells = []

      startMessage.classList.add('hidden')
      endMessage.classList.remove('hidden')
      reset.classList.remove('hidden')
      grid.classList.add('hidden')
      infoBox.classList.add('hidden')

    }
  }
  // ========================================MouseUP Function===========================================================
  function moveMyCharacter(e) {
    switch (e.keyCode) {
      case 37:
        if (currentIndex % width !== 0) moveFrog(-1)
        break
      case 38:
        if (currentIndex - width >= 0) moveFrog(-width)
        score = score + 10
        scoreBoard.forEach(function (element) {
          element.innerHTML = score
        })
        break
      case 39:
        if (currentIndex % width < width - 1) moveFrog(1)
        break
      case 40:
        if (currentIndex + width < width * width) moveFrog(width)
        break
    }
    if (cells[currentIndex].classList.contains('lilypad')) {
      frogsHome++
      score = score + 50
      scoreBoard.forEach(function (element) {
        element.innerHTML = score
      })
      if (frogsHome === 4) {
        score = score + 800
        scoreBoard.forEach(function (element) {
          element.innerHTML = score
        })
      }

      currentIndex = 59
      cells[currentIndex].classList.add('frog')
    }
  }
  document.addEventListener('keyup', moveMyCharacter)


  function resettingGame() {
    endMessage.classList.add('hidden')
    startMessage.classList.add('hidden')
    reset.classList.add('hidden')
    grid.classList.remove('hidden')
    infoBox.classList.remove('hidden')

    cells = []
    grid.innerHTML = ''
    lives = 3
    livesLeft.textContent = lives
    score = 0
    scoreBoard.forEach(function (element) {
      element.innerHTML = score
    })
    frogsHome = 0
    currentIndex = width ** 2 - Math.ceil(width / 2)
    for (let i = 0; i < width * width; i++) {
      const cell = document.createElement('DIV')
      cell.setAttribute('id', i)

      if (i === currentIndex) cell.classList.add('frog')
      if ([1, 3, 5, 7].includes(i)) cell.classList.add('lilypad')

      if (i >= 8 && i <= 31) cell.classList.add('water')
      if (i >= 40 && i <= 55) cell.classList.add('road')

      cells.push(cell)
      grid.appendChild(cell)

    }
    odd = true
    even = false
  }
  // ========================================Time Events===========================================================
  // function cars() {
  //   setInterval(addCarToEven, 2000)
  //   setInterval(addCarToOdd, 4000)
  // }


  function playGame() {
    setInterval(collision, 200)
    setInterval(driveLogThird, 2000)
    setInterval(driveLogBackward, 1500)
    setInterval(driveLogTop, 1000)

    setInterval(addCarToEven, 2000)
    setInterval(addCarToOdd, 3000)

    start.classList.add('hidden')
    grid.classList.remove('hidden')
    infoBox.classList.remove('hidden')
    grid.classList.remove('hidden')
    startMessage.classList.add('hidden')

  }

  reset.addEventListener('click', resettingGame)
  start.addEventListener('click', playGame)

  // Need these Braces
})
