# LookingFor React Front End
[View app on production](https://looking-for.herokuapp.com/)


#### About

A job search engine for developers that renders postings from  We Work Remotely, Stack Overflow and Authentic Jobs. Users can search jobs by location, tech stack, or view all jobs posted within the last two months. Job objects are served from back end Rails API at `http://lookingforme.herokuapp.com`. 

#### Example API calls to back end app

- Recent job postings:

 `https://lookingforme.herokuapp.com/api/v1/recent_jobs`
- Location by city, state, or country:

 `https://lookingforme.herokuapp.com/api/v1/recent_jobs?location=(parameter)`
- Technologies: ruby, rails, javascript, react, go, ember, clojure, angular, python

 `https://lookingforme.herokuapp.com/api/v1/recent_jobs?technology=(parameter)`


#### React project setup with npm, webpack and babel

- Tested with enzyme
- Styled with react-bootstrap
- ES6 and JSX style and syntax

![screenshot](app-screen-shot.png)

## Setup

Clone the repo:

```
$ git clone git@github.com:LookingForMe/lookingForFrontEnd.git
```

Install the dependencies:

```
$ npm install
```

To run tests:

```

$ npm run test
```

Start the dev server:

```
$ npm run dev
```
