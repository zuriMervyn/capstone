import { render, screen } from "@testing-library/react";
import BookingForm, { initializeTimes, updateTimes } from './BookingForm';

// Test for initializeTimes function
test('initializeTimes returns the expected initial value', () => {
    const expectedValue = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    const initialValue = initializeTimes();
    expect(initialValue).toEqual(expectedValue);
});

// Test for updateTimes function
test('updateTimes returns the same value as the provided state', () => {
    const state = ["17:00", "18:00", "19:00"];
    const updatedTimes = updateTimes(state);
    expect(updatedTimes).toEqual(state);
});