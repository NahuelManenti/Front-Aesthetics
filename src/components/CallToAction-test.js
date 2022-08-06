import React from "react";
import {screen, render} from '@testing-library/react'
import DetailsProducts from "./DetailsProducts";


describe('CallToAction', () => {
    it('must display the mail @aesthetic.com', () => {
        render(<DetailsProducts />);
        expect(screen.getByText(/Aesthetic/i)).toBeInTheDocument();
    });
});

