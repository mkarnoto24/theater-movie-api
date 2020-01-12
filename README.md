# theater-movie-api
This is the REST API of Theater Movie Web Application

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [End Point](#end-point)
- [Built With](#built-with)
- [Author](#author)
- [License](#license)

## Getting Started

Before starting to install the project, there're some things that need to be done first:

### Prerequisites

Make sure all of these are properly installed in your system.

| Application  | Download                                                                            |
| ------------ | ----------------------------------------------------------------------------------- |
| Git          | [Windows](https://gitforwindows.org/) / [Linux](https://git-scm.com/download/linux) |
| Node.js      | [Link](https://nodejs.org/en/download/)                                             |

### End Point
- https://theater-movie-api.herokuapp.com/api/v1/movies or http://localhost:8000/api/v1/movies (if you use localhost) => get all movies
- https://theater-movie-api.herokuapp.com/api/v1/movie/14 or http://localhost:8000/api/v1/movie/id (if you use localhost) => get movie   by id movie
- https://theater-movie-api.herokuapp.com/api/v1/theaters or http://localhost:8000/api/v1/theaters (if you use localhost) => get all theater 

### Installation

First, clone this repository into your system.

```
https://github.com/noto90/theater-movie-api.git
```

Then, install all the packages that described in `package.json` `server` directories. Before you install the package you must go to folder where you clone it's repo

```
npm install
```

And now you can run server with 
```
npm start
```

## Built With

- [Express JS](https://expressjs.com) - Back-end
- [Sequelize](https://sequelize.org) - ORM

## Author

**Moh. Karnoto** -- (https://github.com/noto90)


