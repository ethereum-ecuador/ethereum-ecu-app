import { Navbar, Button, Link, Text } from "@nextui-org/react";

export function MainNavbar(){
    return(
        <>
         <Navbar isBordered variant="sticky">
         <Navbar.Brand>
        <Text h3>Ethereum Ecuador</Text>
          <Link href="/"/>
         </Navbar.Brand>
            <Navbar.Content>
            <Navbar.Link href="#">Sobre Nosotros</Navbar.Link>
            <Navbar.Link href="#">Involucrarse</Navbar.Link>
            <Navbar.Link href="#">Tickets</Navbar.Link>
        </Navbar.Content>
         </Navbar>
        </>
    )

}