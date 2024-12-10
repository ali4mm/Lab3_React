import React from "react";
import Socialmedia from './Socialmedia'
import '@testing-library/jest-dom'
import {render} from '@testing-library/react'
test('second component test', () => {
   const {getByText}=render (<Socialmedia/>);
   const buttonText = getByText(/Facebook/i)
expect (buttonText).toBeInTheDocument();
});
