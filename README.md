![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)
# Project 1 v2: Game - Frogger
###### Play Game [Here](https://github.com/Iamshola/project-01-v2)

### Brief
* The idea of Frogger is to guide a family of frogs across a road, and a river to their homes at the top of the screen.
* To make things more challenging there are numerous moving obstacles that the frogs must avoid to reach their destination.
* The game should be playable for one player.
* The obstacles should be auto generated.

### Languages and Technologies Used:
* HTML5
*	CSS3
*	JavaScript
*	Git
*	GitHub
*	Google Fonts
*	Font Awesome

#### Timeframe
5 days


### Approach Taken:

#### Overview & concept of the project
This project was completed as a extra task based on my previous rendition of this game. 

######  Project plan

| Time      | Tasks         |
| ------------- |-------------|
| **2 days**    | Basic MVP   |
| **2  days**     | Styling and working on Additional features     |
| **1 day** | Bug fixes and deployment  |

### Features

> **All Features:**

  - Frog should avoid the obstacles and get to lilypads within 3 lives.

### Preview of game

![Screenshot 2019-07-19 at 10 43 21](https://user-images.githubusercontent.com/43203736/61526285-0e720f00-aa12-11e9-9f68-b0c19e194119.png)

<br> </br>
![ezgif com-video-to-gif](https://user-images.githubusercontent.com/43203736/61530367-c35cf980-aa1b-11e9-9c30-9cf744b2b92f.gif)


### Wins and Blockers

##### Wins
For my first solo project, I am quite proud of what I have managed to produce yet I know there's a lot more work required to make it the perfect game. I have a better understanding how to think like a developer and with more exposure and practice, I know it will make my code and workflow more efficient

One win which I really like was my character ability to change depending on the veg collected which I used data-type attribute.

This is the approach that I decided to use in order to detect collision. Each of the obstacles would be assigned an index value which would be compared against the characters position. Once collision is detected, the characters would be placed back into the 'safe zone'.

``` js
function collision(){
  if(characterPosition === collisionCheckFirstRow ||
    characterPosition === collisionCheckSecondRow || characterPosition === collisionCheckThirdRow
    || characterPosition === collisionCheckFourthRow ||
    characterPosition === collisionCheckFifthRow||
     characterPosition === collisionCheckSixthRow){
    squares[currentIndex].classList.remove(sarah)
    currentIndex = 56
    audio.play()
    if(sarah === 'sarahWithVegetables'){
      getGoals()
    }
    sarah = 'sarah'
    return squares[currentIndex].classList.add(sarah)
  } if (vegIndex === characterPosition){
    squares[currentIndex].classList.remove(sarah)
    sarah = 'sarahWithVegetables'
    squares[currentIndex].classList.remove('vegetable')
    squares[currentIndex].classList.add('sarahWithVegetables')
    squares[currentIndex].setAttribute('data-type', sarahWithVegetables)
  }
}
```

This is the method that I used to generate new versions of my character and to apply the new class to the plate ('lilypads').

``` js
function sarahOnPlate(){
  if(squares[currentIndex].classList.contains('home') && squares[currentIndex].classList.contains('sarahWithVegetables')) {
    squares[currentIndex].classList.remove('home')
    squares[currentIndex].classList.remove('vegetable')
    squares[currentIndex].classList.remove('sarahWithVegetables')
    squares[currentIndex].classList.add('homeWithGem')
    squares[currentIndex].setAttribute('data-type', homeWithGem)
    gameChallenge()
    if(home === 'homeWithGem'){
      squares[currentIndex].classList.remove('sarahWithVegetables')
    }
    sarahNewPoistion()
    getGoals()
    currentIndex = 57
    sarah = 'sarah'
    squares[currentIndex].classList.remove('vegetable')
    squares[currentIndex].classList.add('sarah')
  } else if (squares[currentIndex].classList.contains('home') && !squares[currentIndex].classList.contains('sarahWithVegetables')) {
    squares[currentIndex].classList.remove('sarah')
    currentIndex = 59
    squares[currentIndex].classList.add('sarah')
  }
}

```

##### Blockers
On reflection, I wish I had planned better my days and clearly outlined my objectives.
I had hoped to have more time to refactor my code and make it understandable to others reading it. From speaking to my peers and instructors, I feel it would have been suitable for me to have broken my functions into little function so they can be used in different places to prevent repeat code.


#### Future features
Prior to selecting this game, I knew it would be a challenge so I decided to ensure that I had a basic MVP and would go back and make any amendments required. I would have loved to have a working log function, the ability to record high score and include multiple levels.

#### What you have learned
I have learned the best ways to understand concepts is through practice. I believe I have a good understanding of the theory but will definitely need more practice to understand the best approach to complete projects in future.  I feel this week has made more comfortable but not perfect with JavaScript particularly.


### Course Curriculum
  Details of my training and links to more projects whilst at General Assembly -  12 Week Immersive.

> **Week 1-3 | Module One - Fundamentals**

  - HTML5
  - CSS3
  - Sass
  - JavaScript


> **Week 4**

  Project 1 : Frogger  | [GitHub](https://github.com/Iamshola/project-01) | [gh-Pages](https://iamshola.github.io/project-01/)

>**Week 5 | Module Two - React**

  - React.js
  - Routing
  - RESTFUL API
  - Third-party APIs

>**Week 6**

  Project 2 : CocktailBored  | [GitHub](https://github.com/Iamshola/Project3) | [gh-Pages](https://iamshola.github.io/Project-2/#/)

>**Week 7-8 | Module Three - Node and Express**

  - RESTFUL Routing
  - Node.js
  - Express
  - Token Authentication & Session Authentication
  - API Creation
  - Mocha and Chai

>**Week 9**

  Project 3 : Date-a-base | [GitHub](https://github.com/Iamshola/Project3) | [Herouku](https://datingexp.herokuapp.com/#/)

>**Week 10-11 | Module Four - Python and Django**

  - Python
  - SQL
  - Django
  - Token Authentication

>**Week 12**

  Project 4 : Space | [GitHub](https://github.com/Iamshola/project-04) | [Herouku](https://date-a-base-aos.herokuapp.com/#/)


  ### Contact
  Adesola Oni-Shogbonyo\
  Email : s.oni-shogbonyo@hotmail.co.uk\
  [Portfolio](https://iamshola.github.io/) | [Linkedin](https://www.linkedin.com/in/adesola-oni-shogbonyo/) | [GitHub](https://github.com/Iamshola)
