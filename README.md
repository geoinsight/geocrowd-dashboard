# geocrowd

*Dashboard for Geocrowd: Peatfire Project*

This repo serves as Geocrowd Intelligence Support System Dashboard for the geocrowd project. The dashboard provides RESTFull API 
to be used in [Geocrowd: Peatfire App](github.com/ppids-ugm/geocrowd) as well as to provide platform for data analytics collected 
from the App, social media mining and AVHRSS-MODIS Hotspot API.

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 4.1.0.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 4.x.x, npm >= 2.x.x
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build` for building and `gulp serve` for preview.

Deploying cycle to Heroku:

Build the Dashboard App: `gulp build`

Push to Heroku: `gulp buildcontrol:heroku`

Open the App: `heroku open`

## Testing

Running `npm test` will run the unit tests with karma.
