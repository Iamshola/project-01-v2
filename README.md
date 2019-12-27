![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)
# Project 1 v2: Game - Frogger
###### Play Game [Here](https://iamshola.github.io/project-01-v2/)

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




### Wins and Blockers

##### Wins
Compared to my first edition of this game. I am truly proud. Although my code is completely concise, it is defintely more elegant than last time 

``` js
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
```

##### Blockers
I had hoped to have more time to refactor my code and make it understandable to others reading it. It would have been ideal if I just one function for my log movement rather than multiple functions.


#### Future features
I would love to expand on this game and create multiple levels.

#### What you have learned
I have learned the practice is the best way to consolidate my knowledge. Through using things like codewars and ediabit I have become much more comfortable as a javascript developer. 


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
