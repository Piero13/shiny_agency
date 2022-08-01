import Card from "./Card"
import { render, fireEvent, screen } from "@testing-library/react"
import { ThemeProvider } from "../../utils/context/Context"

describe('Card', () => {
    test('Should render title and picture', async () => {
        render(
            <ThemeProvider>
                <Card
                    title="Dark vador"
                    label="Black dev"
                    picture="/picture.png"
                />
            </ThemeProvider>
        )
        const cardPicture = screen.getByRole('img')
        const cardTitle = screen.getByText(/Dark/i)
        expect(cardPicture.src).toBe('http://localhost/picture.png')
        expect(cardTitle.textContent).toBe(' Dark vador ')
    })
    test('Should add stars around title', async () => {
        render(
            <ThemeProvider>
                <Card
                    title="Dark vador"
                    label="Black dev"
                    picture="/picture.png"
                />
            </ThemeProvider>
        )
        const cardTitle = screen.getByText(/Dark/i)
        const parentNode = screen.getByTitle('Dark vador')
        fireEvent.click(parentNode)
        expect(cardTitle.textContent).toBe('⭐️ Dark vador ⭐️')
    })
})
