import React from "react";
import HeaderPage from './HeaderPage'
import '@testing-library/jest-dom'
import {render} from '@testing-library/react'
test('first component test', () => {
   const {getByText}=render (<HeaderPage/>);
   const headerText = getByText(/My React Lab App/i)
expect (headerText).toBeInTheDocument();
});
