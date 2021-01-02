# Minimalistic Todo App

> I created a Todo App that can help users complete daily tasks. By integrating a calender feature the app allows users to visualise and manage tasks on a daily basis.

![Todo-img](https://github.com/JoshHaokip/todo-list-react/blob/master/README-IMG/todo-screenshot2.png)

# Contents

The strucuture of this page is as follows:

- [Introduction](#introduction)
- [Running the App](#running-the-app)
- [Project Overview](#project-overview)
  - [Brief](##brief)
  - [Problem](##problem)
  - [Solution](##solution)
  - [Tools/Technologies](##tools-and-technologies)
- [Product Backlog](#product-backlog)

# Introduction :wave:

Since, learning React, I figured it would be good to start putting some of the newly acquired knowledge into good use. This is my first React Project, which utilised key aspects of React such as:

- Create-React-App
- Hooks
- Inline CSS
- Component structure
- Destructuring
- React libraries

# Running the app :running:

Clone this repo:

```
$ git clone https://github.com/JoshHaokip/todo-list-react.git
```

Install all dependancies:

```
$ npm install
```

Start the server:

```
$ npm start
```

And open the app in your browser at <http://localhost:3000/>.

# Project Overview :fire:

## Brief

> I want to create an app that can help me with managing daily tasks.

My idea is to take the traditional Todo App and redesign it so that it is fit for purpose. There are many todo apps out there, however, they tend to follow the same design and functionality patterns, which tend not to help with managing tasks. My goal is to come up with a better todo app that can actually help with getting things done.

## Problem

> Apps currently are either too simple or offer to many distracting features.

The main problem I see with many Todo Apps is that they tend to follow the same pattern:

- Create a new task
- Create a list of task
- Mark tasks as complete
- Delete tasks

Don't get me wrong, I don't think there is a problem with this flow, my issue is that there is no conception of time or urgency involved in with simple todo apps. There are however productivity tools such as Asana, Trello and Monday. The problem with these tools is that they offer many features that distract away from the simplicity of creating a simple list of todos, which can lead to being less productive.

## Solution

> Create an app with acknowledgement of time to help direct the completion of daily tasks

My solution to this was to design and build an app that would offer a sense of time to aid in the completion of tasks. By which I mean showing the date and time to offer the user the ability to associate the tasks within a certain time frame, in this case - 24hr period.

In order for this to work, I needed to create a mockup of the app as well as deciding on the layout. As the main feature is to help visualise the date and time, my initial focus was to find a way to incorporate it onto the app whilst maintaining a minimalistic design.

After spending time on the design, I finally came up with an idea that utilised the feature requirements that I wanted for this app.

![Todo-gif](https://github.com/JoshHaokip/todo-list-react/blob/master/README-IMG/todogif.gif)

The design itself stays in line with the minimalistic feel whilst offering the user the ability to associate time with their tasks. An exciting feature that I designed is the Daily Countdown on the top right of the app, this updates every hour, which notifies the user how many hours they have left until the end of the day. My thinking was that this could help motivate the user to complete the task by indicating how long they have left till the end of the day.

## Tools and Technology

> A list of the tools and technology I used

### Technologies

- React
- React Icons
- React UUID
- Moment.js
- GitHub Pages

### Design Tools

- Sketch
- Whiteboard
- Pen & Paper

# Product Backlog :hammer:

> A list of a couple of changes I'm looking to make in order of priority

### High-Priority

- ~~Make it mobile responsive~~ (updated on 2nd Jan)
- Add local storage so users can save their tasks
- Create Dark Mode

### Medium-Priority

- When at the end of the day (midnight) remove all items from local storage
- Include user auth
- Create a database to store user tasks
- Switch CSS to Styled Components

### Low-Priority

- Change colour of Daily Countdown depending on hours left
- Fix the date component so when date is in double figure the margin changes
