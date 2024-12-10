import React from "react";
import UserEmail from './UserEmail'
import '@testing-library/jest-dom'
import {render} from '@testing-library/react'
test('third  component test', () => {
   const {getByText}=render (<UserEmail/>);
   const userEmailText = getByText(/Click the button to see all emails/i)
expect (userEmailText).toBeInTheDocument();
});
