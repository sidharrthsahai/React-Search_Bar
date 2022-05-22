import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  beforeEach(() => {
    render(<SearchBar placeholder="Choose Manager" />);
  });

  it("should check if the placeholder text is rendered correctly", async () => {
    const placeholder = await screen.findByPlaceholderText(/Choose Manager/i);
    expect(placeholder).toBeInTheDocument;
  });

  it("should be able to type in the searchbar", async () => {
    const input = await screen.findByPlaceholderText(/Choose Manager/i);
    fireEvent.change(input, { target: { value: "Harriet" } });
    expect(input.value).toBe("Harriet");
  });

  it("should be able find the button display block when clicking the searchbar", async () => {
    const input = await screen.findByPlaceholderText(/Choose Manager/i);
    fireEvent.click(input);
    const button = await screen.findAllByRole("button");
    expect(button).toBeInTheDocument;
  });

  it("should be able find all the 9 display buttons after clicking on the searchbar", async () => {
    const input = await screen.findByPlaceholderText(/Choose Manager/i);
    fireEvent.click(input);
    const button = await screen.findAllByRole("button");
    expect(button.length).toBe(9);
  });

  it("should be able to get 2 elements after typing har", async () => {
    const input = await screen.findByPlaceholderText(/Choose Manager/i);
    fireEvent.change(input, { target: { value: "har" } });
    const button = await screen.findAllByRole("button");
    expect(button.length).toBe(2);
  });

  it("should be able to select the search value on click", async () => {
    const input = await screen.findByPlaceholderText(/Choose Manager/i);
    fireEvent.change(input, { target: { value: "eu" } });
    const button = await screen.findByRole("button");
    fireEvent.click(button);
    expect(input.value).toBe("Eugene Wong");
  });

  it("should not be able to find the button block after a value has been selected", async () => {
    const input = await screen.findByPlaceholderText(/Choose Manager/i);
    fireEvent.change(input, { target: { value: "eu" } });
    const button = await screen.findByRole("button");
    fireEvent.click(button);
    expect(button).not.toBeInTheDocument;
  });
});
