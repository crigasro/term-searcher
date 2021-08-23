# TermSearcherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# frontend-interview

### Description

Welcome! This is a front-end code challenge created by Celtiberian Solutions S.L.

The repo at https://github.com/celtiberian/frontend-interview contains a 'create-react-app' template, so that you can start coding comfortably. If you 
wish you can create your own repo using other frontend technologies like Angular, Vue, etc.

We want to evaluate your coding skills as well as your creativity.

### TODO

Build an interactive web page using react and redux, or any other technology you like (Angular, Vue, Svelte, etc). 
The app will use [this public API](https://chroniclingamerica.loc.gov/about/api/) in order to fetch data. The goal 
of the app is to look for some terms using the API, and then display the results in a list. This is a sample 
request, in which we look for the titles of newspapers that contain the term 'michigan'. 

```
https://chroniclingamerica.loc.gov/search/titles/results/?terms=michigan&format=json
```

* The page must contain a search box, so that the user can introduce text.

* The data fetched from the API must be stored in a redux store.

* The data fetched should be displayed in a table or a list. That table/list component must read the data from the redux store.

* The usage of function components and hooks is preferred over class components.

### Extra

You can add some of this suggested extras. 

* Handle API pagination

* Use some beautiful UI components from a library (like [Ant Design](https://ant.design/docs/react/introduce), [React Bootstrap](https://react-bootstrap.github.io/), ...) 

* Unit test

This are just some suggestion. Feel free to add whatever you want to.

