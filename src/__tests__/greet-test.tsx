/*
This is called TEST DRIVEN DEVELOPMENT
* Greet should render the text Hello and if a name is passed into the component 
* it should render hello followed by name
* One file means one Suite of test.
 */

import { render, screen } from "@testing-library/react";
import { Greet1 } from "../components/greet/greet1";

describe("Greet", () => {
  it("Greet render correctly", () => {
    render(<Greet1 />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
  describe("Nested", () => {
  it("Greet render with a name", () => {
    render(<Greet1 name="Gaurav" />);
    const textElement = screen.getByText("Hello Gaurav");
    expect(textElement).toBeInTheDocument();
  });
});

});


