import NaveItem from './NavItem/NaveItem';
import {render,screen, cleanup} from '@testing-library/react'

test("render button",()=>{
    render(<NaveItem/>)
    const button = screen.getByTestId("button")
    expect(button).toBeInTheDocument();
})