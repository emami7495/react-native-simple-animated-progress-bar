## React Native Simple Animated Progress Bar

simple animated progress bar in react native work on both android & ios

<img width="60%" alt="image" src="https://user-images.githubusercontent.com/23563595/188492330-f2ff2752-ca9a-4dd8-a4ab-79625ce829e0.png">


## Install

```npm install react-native-simple-animated-progress-bar --save```

or

```yarn add react-native-simple-animated-progress-bar```

## Usage

 ```jsx
import AnimatedProgressBar from 'react-native-simple-animated-progress-bar';

<AnimatedProgressBar
    size={8}
    duration={500}
    progress={currentProgress}
/>
 ```
## props

| name          | type            | default                     | description                                                               |
| ------------- | --------------- | --------------------------- | --------------------------------------------------------------------------|
| `size`      | number          | 4                        | progress bar height                                                      |
| `isRtl`       | boolean          | true                        | by this prop you can select progress bar style rtl or ltr                                                    |
| `bgColor`  | string         | '#c8e6c9'                       | progress bar background color                                     |
| `barColor`   | string | '#43a047'                        | progress bar color                                                      |
| `duration`     | number        | 500                        | animation duration in progress changing                                                         |
| `progress`      | number        | none                        | number between 0 - 1 |
| `barStyle`      | object or array        | none                        | if you want override progress bar style use this prop  |
| `rootStyle`      | object or array        | none                        | if you want override progress bar root style use this prop |
| `barWidth`      | number        | screen width                        | if you want change progress bar width use this prop |
