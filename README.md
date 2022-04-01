# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Julian Pulido

Time spent: 5 hours spent in total

Link to project: https://glitch.com/edit/#!/jagged-creative-asiago?path=README.md%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://i.imgur.com/fIFdxK4.gif) 
![](https://i.imgur.com/JWGbtxJ.gif)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

Math.random() - JavaScript | MDN (mozilla.org)  
CSS color codes & names (rapidtables.com)  
JavaScript Events (w3schools.com)  
What is blocked scoped variables ES6 ? - GeeksforGeeks

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
 
  While coding in CSS, HTML, and JavaScript was new and exciting at first, I struggled to understand all the new terms and how each language interacts with one another. Additionally, each language has its own unique – though familiar – syntax which took time to learn. In HTML, it was odd to not have anything in between each event handler attribute inside the opening tags. I kept making the mistake of adding “+” in between each attribute since I am accustomed to doing so, like in Java. Though, with enough practice and tinkering, it became natural to write in this format. I tried my best to code based on the descriptions rather than looking at the pictures to conceptualize topics rather than just copying code. Throughout the project, I jotted down notes for each new term and compared them to other programming languages that I have more experience with. For example, after learning about Document Object Model I noticed it is identical to Java and how objects can be modified using their own methods. By far the topics that confused me the most were the difference between IDs and classes because I thought they were identical; I was occasionally using the wrong selector for some rules. Using wrong selectors didn’t explicitly state that there was an error in the code, but my web page looked incorrect. After re-reading and researching, IDs are unique to each element whereas classes can identify multiple elements. Since syntax and key terms are the fundamentals of any programming language it is crucial to understand through practice and studying. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

-Considering I just created a fairly simple website that simulates a Simon Game, I wonder how much code and experience does it take to create a website like Facebook or Reddit?  

-How does a website interact with users in saving their progress or data? For example, how does a website save and store inputted information and display new information each time? 

-What are some common mistakes that beginner web developers make?

-To what extent does the style of a web page affect the user's behavior? For example, do certain features and/or styles maintain the user for a longer time or influence purchasing decisions? 

-Do web developers consider color psychology when developing a web page?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

  If I had more hours to work on this project I would want to implement a high score chart that records the users’ highest progress over time. A method to achieve this is by creating a variable titled “highScoreCounter” that records the longest sequential correct guesses by the user, which can be posted on the chart along with the date at which it was achieved. This can be extended by playing a special animation and audio whenever the user beats their previous high score. An exceptional yet long-term feature can include importing high scores to a global leaderboard that connects and compares high scores between the user and friends across the world. This requires extra features such as creating accounts to record high scores and the ability for the user to modify personal information. While creating the high score counter seems feasible, creating the interactive leaderboard is the real obstacle; I would be interested in learning which functions inside JavaScript can make that happen.




## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.youtube.com/watch?v=tOoZ6xulg2Q)


## License

    Copyright [Julian Pulido]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
