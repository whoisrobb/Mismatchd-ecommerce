import { ModeToggle } from "../ui/mode-toggle"
import Container from "./container"

const Footer = () => {
  return (
    <Container>
        <div className="flex justify-between border-t py-2 max-h-24">
            <p>Footer</p>
            <ModeToggle />
        </div>
    </Container>
  )
}

export default Footer