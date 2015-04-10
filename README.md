# MobileForm

## Principle

MobileForm is a tool allowing to:
- define a form through a web interface
- generate a mobile application (Android/iOS) embedding the defined

## Technologies

The back-office (allowing to define forms) will be a single-page app based on Moondash https://github.com/MoonshotProject/moondash.
Moondash is not finished for now, and we want to take the opportunity to test it in a real business case with MobileForm.
It relies on the following bricks:
- Angular
- Browserify
- Gulp

The backend (allowing to store the form definitions and the user entries) will be Daybed https://github.com/spiral-project/daybed.

The mobile app generation will be performed with Ionic/Cordova. We will consider React Native if an Android version is released.

The mobile app by itself will be implemented with Angular (or ReactJS if we use React Native).