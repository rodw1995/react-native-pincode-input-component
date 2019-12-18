# react-native-pincode-component
A cross-platform customizable PIN code input component for React Native.

Original from https://github.com/xamous/react-native-smooth-pincode-input but improved and changed in some ways.

- Checkout the [example/](https://github.com/rodw1995/react-native-pincode-input-component/tree/master/example) for demo app.

## Features

- Smooth typing without losing inputs
- Customizable cell style
- Customizable text style
- Password mode
- Customizable password mask and placeholder characters
- Built in animations (Credit to [react-native-animatable](https://github.com/oblador/react-native-animatable))

## Installation

```sh
# yarn
yarn add react-native-smooth-pincode-input

# npm
npm i react-native-smooth-pincode-input
```

## Available props

**Other props are passed down to react-native TextInput!**

|          Name         |          Type         | Default | Description                                                                                                                                                                                                                                                        |
|:---------------------:|:---------------------:|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| containerStyle        | React View StyleSheet | {}      | View style for whole container                                                                                                                                                                                                                                     |
| contentContainerStyle | React View StyleSheet | {}      | View style for the content container                                                                                                                                                                                                                               |
| cellStyle             | React View StyleSheet | {}      | View style for each cell                                                                                                                                                                                                                                           |
| cellFocusedStyle      | React View StyleSheet | {}      | View style for the focused cell                                                                                                                                                                                                                                    |
| cellFilledStyle       | React View StyleSheet | {}      | View style for the cell if filled                                                                                                                                                                                                                                  |
| textStyle             | React Text StyleSheet | {}      | Text style for the cell                                                                                                                                                                                                                                            |
| textFocusedStyle      | React Text StyleSheet | {}      | Text style for the focused cell                                                                                                                                                                                                                                    |
| value                 | String                | ''      | The value for the input                                                                                                                                                                                                                                            |
| onValueChange         | Function              | null    | Callback function that's called when the value changes. Called with: `onValueChange(value : string, { isFulfilled: boolean });`                                                                                                                                    |
| codeLength            | Number                | 4       | Length of the pin input                                                                                                                                                                                                                                            |
| password              | Boolean               | false   | Mask the input value. Each cell masked with `mask` prop                                                                                                                                                                                                            |
| placeholder           | String                | ''      | Placeholder for each cell                                                                                                                                                                                                                                          |
| restrictToNumbers     | Boolean               | false   | Restrict input to numbers only                                                                                                                                                                                                                                     |
| cellSize              | Number                | 48      | Size for each cell in input                                                                                                                                                                                                                                        |
| cellSpacing           | Number                | 4       | Space between each cell                                                                                                                                                                                                                                            |
| mask                  | String                | '*'     | Value to mask the input with                                                                                                                                                                                                                                       |
| maskDelay             | Number                | 200     | The delay in milliseconds before a character is masked                                                                                                                                                                                                             |
| animationType         | String, Object        | 'pulse' | The animation of the focused cell. This can be a preset animation in the form of a [string](https://github.com/oblador/react-native-animatable#animations-2) or a [custom animation](https://github.com/oblador/react-native-animatable#custom-animations) object. |
