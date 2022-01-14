import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText('First Name:');
    const lastNameInput = screen.getByLabelText('Last Name:');
    const addressInput = screen.getByLabelText('Address:');
    const cityInput = screen.getByLabelText('City:');
    const stateInput = screen.getByLabelText('State:');
    const zipInput = screen.getByLabelText('Zip:');
    userEvent.type(firstNameInput, "John");
    userEvent.type(lastNameInput, "McClane");
    userEvent.type(addressInput, "2121 Avenue of the Stars");
    userEvent.type(cityInput, "Los Angeles");
    userEvent.type(stateInput, "California");
    userEvent.type(zipInput, "90067");

    const submitButton = screen.getByTestId('checkout-button');
    userEvent.click(submitButton);

    const successMessage = screen.getByTestId('successMessage');
    expect(successMessage).toBeInTheDocument();

});
