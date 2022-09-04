# React Native Simple Animated Progress Bar

Install
=======
```npm install react-native-simple-animated-progress-bar --save```

```yarn add react-native-simple-animated-progress-bar```

Usage
=====

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
| `size`      | number          | 4                        | -                                                      |
| `isRtl`       | boolean          | true                        | -                                                    |
| `bgColor`  | string         | '#c8e6c9'                       | -                                     |
| `barColor`   | string | '#43a047'                        | -                                                   |
| `duration`     | number        | 500                        | -                                                         |
| `progress`      | number        | none                        | - |
| `barStyle`      | object or array        | {}                        | - |
| `rootStyle`      | object or array        | {}                        | - |
| `barWidth`      | number        | screen width                        | - |
