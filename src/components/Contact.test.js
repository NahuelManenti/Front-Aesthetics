import React from "react";
import {screen, render} from '@testing-library/react'
import Contact from "./Contact";

describe('Contact', () => {
    it('must display the mail @aesthetic.com', () => {
        render(<Contact />);
        expect(screen.queryByText(/^\S+@aesthetic+\.com/)).toBeInTheDocument();
    });
});