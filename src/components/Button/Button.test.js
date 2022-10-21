import Button from './Button'
import {render,screen, cleanup} from '@testing-library/react'

test("render button",()=>{
    render(<Button/>)
    const button = screen.getByTestId("button")
    expect(button).toBeInTheDocument();
})