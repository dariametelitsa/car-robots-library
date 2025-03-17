# Car Robots Library

[![npm version](https://img.shields.io/npm/v/car-robots-library.svg?color=blue)](https://www.npmjs.com/package/car-robots-library)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/dariametelitsa/car-robots-library/main/LICENSE)


A collection of reusable React components for building car-related user interfaces.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Styling](#styling)

## Installation

To install the `car-robots-library`, you can use npm or yarn:

```sh
pnpm install car-robots-library
```

## Usage

Import the components you need from the library and use them in your React application:

```jsx
import React from 'react';
import { Button, AnotherComponent } from 'car-robots-library';

const App = () => {
    return (
        <div>
            <Button>Click me</Button>
            <AnotherComponent />
        </div>
    );
};

export default App;
```

## Components
- Modal
- Button
- Calendar
- Card
- Checkbox
- Loaders (circle, line)
- Go to top button
- Overlay
- Icon set
- Pagination
- Tabs
- Slider
- Popover
- Tooltip
- Radio group
- Scrollbar
- Select
- Skeleton
- Slider
- Table
- Textarea
- Text unfolding
- Toast
- Typography

## Hooks
- useDebounce
- useClickOutside
- useModal
- useToggle

## Styling

The car-robots-library uses Tailwind CSS for styling. You don't need to install Tailwind CSS separately; the library includes all necessary styles.

To ensure the styles are applied correctly, import the CSS file from the library in your main entry file:
```jsx
import 'car-robots-library/dist/style.css'; 
```

## Project Contributors
| Name            | Role                 | GitHub Profile|
|-----------------|----------------------|----------|
| Tatiana Kostecki | Frontend Developer   | @tanya-kostecki   |
| Alexander Kvashnin | Frontend Developer   | @KvashninAlexander2023   |
| Bair Ochirov    | Frontend Developer   | @OchirovBair   |
| Stanislav Petrov | Frontend Developer   | @Sun-ny11   |
| Vladislav Beliaev | Frontend Developer   | @jocker-py  |
| Daria Metelitsa | Frontend Developer   | @dariametelitsa   |


## Contact

For any questions or issues, please open an issue on the GitHub repository.

Thank you for using car-robots-library!
