import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application",()=>{
    test("render correctly", ()=>{
        render(<Application />);
        const pageHeading = screen.getByRole("heading",{
            level: 1,
        });
        expect(pageHeading).toBeInTheDocument();
        const sectionHeading = screen.getByRole("heading",{
            level:2,
        })
        expect(sectionHeading).toBeInTheDocument();


        const nameElement = screen.getByRole("textbox",{
            name: "Name"
        });
        expect(nameElement).toBeInTheDocument();

        const bioElement = screen.getByRole("textbox",{
            name: "Bio"
        });
        expect(bioElement).toBeInTheDocument();

        const joblocElement = screen.getByRole("combobox");
        expect(joblocElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const submitbtnElement = screen.getByRole("button");
        expect(submitbtnElement).toBeInTheDocument();
    })
})