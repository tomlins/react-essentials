import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { timesTwo, Checkbox } from "./functions";

test("Multiples by two", () => {
    expect(timesTwo(4)).toBe(8);
})

test("select checkbox", () => {
    const { getByLabelText } = render(<Checkbox />);
    const checkbox = getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
});
