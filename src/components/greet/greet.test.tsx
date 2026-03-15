import {render,screen} from '@testing-library/react'
import { Greet } from './greet'


test('Greet render correctly',()=>{
    render(<Greet />)
    // const textElement = screen.getByText('Hello')
    // or 
    const textElement =screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
})