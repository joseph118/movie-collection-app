# Movies Application - Demo

## Summary

An Angular Web Application utilizing Angular redux to manage the application state.

The application consists of 3 Web pages, all of which are being lazy loaded and contains an NgRx feature.

A service has been created to Mock HTTP requests which serves the static content, while also demonstrating the use
of NgRx Effects.

This application can also be used with a keyboard while tabbing through the page.

PostCSS is also being used to change pixels to rem, which makes the website responsive.

### Pages

- Page 1 - Home

Consist of a simple movie list, limited by 5 and sorted by ratings. Clicking on any
of the movies will take you to the movie detail page.

- Page 2 - Movies

Consist of the entire movie collection together with search and genre filters. Clicking on any
of the movies will also take you to the movie detail page.

- Page 3 - Movie Detail

Consist of movie details, together with a back button which takes you back to the previous location.

## Development Environment

The Angular environment has been configured to utilize prettier and webpack together with other plugins.

Configs can be found in the <u>**root and configs folder**</u>.

### Webpack

Webpack is configured to add the PostCSS loader which allows us to execute _autoprefixer_ and _postcss-pxtorem_
on CSS. For production builds, this would also include _cssnano_.

The plugins' description is in the _Development server_ below;

### Development server

The development server comes configured with BrowserSync which proxies the DEV environment, and as well as HMR.

To run the dev environment, execute;

- `npm start`
- or `npm run serve:dev`.

The application will automatically reload if you change any of the angular files, while it will hot reload if you change the
global styles.

## Build

Run `npm run build` to build the project.

Run `npm run build:production` to build the project in production configuration.

The artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests using [Karma](https://karma-runner.github.io).

## Other

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.
