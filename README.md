# React Native Shapes

[![Build Status](https://travis-ci.org/pavinthan/react-native-shapes.svg?branch=master)](https://travis-ci.org/pavinthan/react-native-shapes)

This mobile application will generate different shapes by using users natural language.

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).
Below you'll find information about performing common tasks.

## Table of Contents

- [Getting Started](#getting-started)
  - [Download and Setup](#download-and-setup)
  - [Run the application](#run-the-application)
  - [Hint](#hint)
  - [Examples](#examples)
  - [Supporting shapes](#supporting-shapes)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run ios](#npm-run-ios)
  - [npm run android](#npm-run-android)
  - [npm run eject](#npm-run-eject)
- [Writing and Running Tests](#writing-and-running-tests)

## Getting Started

This code will run using Expo without rebuilding on Android or IOS

### Download and Setup:

Download or clone the project.

```
git clone git@github.com:pavinthan/react-native-shapes.git
```

You can use git to clone the project.

```
https://github.com/pavinthan/react-native-shapes/archive/master.zip
```

Download the project as [zip](https://github.com/pavinthan/react-native-shapes/archive/master.zip).

```
npm install
# or
yarn
```

Install dependencies, you can use [npm](http://npmjs.com) or [yarn](https://yarnpkg.com) to install node modules.

### Run the application:

Open project in react native compatible IDE
Some basic commands to use in Command Prompt or Terminal

```
npm start
# or
yarn start
```

Starts the development server so you can open your app in the Expo app on your phone.

```
yarn run ios
# or
yarn run ios
```

Starts the development server and loads your app in an iOS simulator. (Mac only, requires Xcode)

```
npm run android
# or
yarn run android
```

Starts the development server and loads your app on a connected Android device or emulator. (Requires Android build tools)

```
npm run test
# or
yarn test
```

Starts the test runner

### Hint

Hint to get a best result.

```
Draw a(n) <shape> with a(n) <measurement> of <amount> (and a(n) <measurement> of <amount>)
```

### Examples

```
Draw an isosceles triangle with a height of 200 and a width of 100
Draw a square with a side length of 200
Draw a Scalene Triangle with a height of 200 and a width of 100
Draw a Parallelogram with a width of 250 and a height of 400
Draw a equilateral triangle with a length of 300
Draw an pentagon with a side length of 200
Draw a rectangle with a width of 250 and a height of 400
Draw an hexagon with a side length of 200
Draw an octagon with a side length of 200
Draw a circle with a radius of 100
Draw a Oval with a width of 300 and a height of 150
```

### Supporting shapes

- [x] Isosceles Triangle
- [x] Square
- [x] Scalene Triangle
- [x] Parallelogram
- [x] Equilateral Triangle
- [x] Pentagon
- [x] Rectangle
- [x] Hexagon
- [x] Heptagon
- [x] Octagon
- [x] Circle
- [x] Oval

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start --reset-cache
# or
yarn start --reset-cache
```

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native Root:

##### Using Android Studio's `adb`

1.  Make sure that you can run adb from your terminal.
2.  Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1.  Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2.  Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3.  Make sure that you can run adb from your terminal.

#### `npm run eject`

This will start the process of "ejecting" from Create React Native Root's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a permanent action (aside from whatever version control system you use). An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.

## Writing and Running Tests

This project is set up to use [jest](https://facebook.github.io/jest/) for tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called `__tests__` or with the `.test` extension to have the files loaded by jest. See the [the template project](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/App.test.js) for an example test. The [jest documentation](https://facebook.github.io/jest/docs/en/getting-started.html) is also a wonderful resource, as is the [React Native testing tutorial](https://facebook.github.io/jest/docs/en/tutorial-react-native.html).
