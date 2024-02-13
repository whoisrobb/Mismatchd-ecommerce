import Link from "next/link"
import Container from "./container"
import DesktopNav from "./desktop-nav"
import MobileNav from "./mobile-nav"
import CartSheet from "../checkout/cart-sheet"

const Navbar = () => {
  return (
    <Container>
        <div className="border-b py-2 flex items-center justify-between">
            <div className="flex items-center">
                <Link href={'/'}>Mismatchd</Link>
                <DesktopNav />
            </div>
            <div className="">
                <CartSheet />
                <MobileNav />
            </div>
        </div>
    </Container>
  )
}

export default Navbar