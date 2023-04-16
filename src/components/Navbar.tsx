import { Navbar, Button, Link, Text, Image } from "@nextui-org/react";
import { useState, useEffect } from "react";

export function MainNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0 && !isScrolled) {
        setIsScrolled(true);
      } else if (scrollTop === 0 && isScrolled) {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <>
    
    <Navbar isBordered variant="sticky" bg={isScrolled ? "white" : "none"}>
        <Navbar.Brand>
          <Image src="https://svgshare.com/i/sA3.svg" alt="j" width={50} height={50}></Image>

          <Text h3>Ethereum Ecuador</Text>
          <Link href="/" />
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link href="#about">Sobre Nosotros</Navbar.Link>
          <Navbar.Link href="https://www.eventbrite.com">Tickets</Navbar.Link>
          <Navbar.Link href="#schedule">Calendario</Navbar.Link>  
        </Navbar.Content>
      </Navbar>

      
    </>
  );
  //"schedule"
}