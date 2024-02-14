import Link from "next/link";
import Container from "./container";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";
import CartSheet from "../checkout/cart-sheet";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <Container>
        <div className="border-b py-2 flex items-center justify-between">
            <div className="flex items-center">
                <Link href={'/'}>Mismatchd</Link>
                <DesktopNav />
            </div>
            <div className="flex items-center gap-2">
                <MobileNav />

                <SignedIn>
                  <Button>
                    <Link href={'/dashboard/stores'}>Dashboard</Link>
                  </Button>
                  <UserButton />
                </SignedIn>
                
                <CartSheet />

                <SignedOut>
                  <Button>
                    <Link href={'/sign-in'}>Sign in</Link>
                  </Button>
                </SignedOut>
            </div>
        </div>
    </Container>
  )
}

export default Navbar