# React-bluescren

This library displays a blue screen when an error occurs in React.

<img src="./screenshot.png" width="640" height="auto" />

## Demo

[https://trkbt10.github.io/react-bluescreen/]()

## Usage

```jsx
import { BluescreenErrorBoundary } from "@trkbt10/react-bluescreen";

export const App: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <BluescreenErrorBoundary variant="windows9x">
      {children}
    </BluescreenErrorBoundary>
  );
};
```

### Install

```bash
npm install git@github.com:trkbt10/react-bluescreen.git
```
