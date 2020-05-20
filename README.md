# GitSearch
#### By jimmy-oss
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

## Description
This project allows the user to search for github users and view their profile and all their repisitories once the search request is complete. Users should then be able to navigate to the actual profiles by clicking on their names and repositories by clicking on their titles.

#### Expected output
| Actions  | Result        |
| :-------------: |:--------------:|
| Search User      | display user profile details & repositories |
| Click on username      | Redirected to github profile for the user      |
| click on repository title | Redirected to repository link on github      |

## Pre-requisites
* An up-to-date browser
* Git
* Angular CLI
* npm
* A text editor of your preference such as VS Code/Atom

## Setup Instructions
1. Copy the repository link : *https://github.com/jimmy-oss/gitsearch.git*
2. Navigate to the desired folder where you want to store your project
3. Clone the repository into your computer by running the command  
`git clone https://github.com/jimmy-oss/gitsearch.git`
4. Change the original remote repository to point to your repository from using the terminal by running the following command in the terminal.  
`git remote set-url origin "newRepository.git.url/here"` 
5. *(Skip if angular is installed)*  Run `npm install -g @angular/cli` - in the terminal to install angular CLI. 
6. Edit the files using your favourite text editor.

## Technologies Used
* HTML
* CSS
* Bootstrap
* TypeScript

## Live Demo

The live demo to the project can be found [by clicking here](https://jimmy-oss.gitsearch.com)

## License

This website is under the MIT license which can be found [HERE](LICENSE)
  
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
