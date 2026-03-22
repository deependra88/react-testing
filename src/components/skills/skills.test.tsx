import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", ()=>{
    const skills = ["html", "css", "js"];

    test("renders correctly",()=>{
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    })

    test("render a list of skills",()=>{
        render(<Skills skills={skills} />);
        const listItemElement = screen.getAllByRole("listitem");
        expect(listItemElement).toHaveLength(skills.length); 
    })

})