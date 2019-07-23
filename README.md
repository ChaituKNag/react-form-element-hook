# React form-element hook

## Introduction

This is a Custom Hook created in React to be used as a helper to improve handling of input fields.

Using this, you will be free from the complex implementations that are required to create input fields, listen to changes, do stylings and other manipulations based on validity of the field, among a few.

## Installation

```
npm install --save react-form-element-hook
```
or
```
yarn add react-form-element-hook
```

## Usage

Just use the custom hook to create variables that you can pass on the actual input fieds and in other ways to fulfil your form input fields' functionalities.

```javascript
import { useReactFormElement } from 'react-form-element-hook';

function Component() {
    const [ref, value, isValid] = useReactFormElement();

    const handleSubmit = e => {
        e.preventDefault();
        console.log(value); // latest updated value.
    }

    return (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            ref={ref} 
            style={{
              border: isValid ? '1px solid blue' : '1px solid red'
            }}
          />
        </form>
    )
}
```