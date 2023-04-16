import Link from 'next/link'
import Image from 'next/image';

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <Image src={"https://svgshare.com/i/sA3.svg"} width={50} height={50} />
          <h3>Ethereum Ecuador</h3>
        </div>
        <ul>
          <li>
            <Link href="/">
          Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link href="/about">
              Calendario
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Tickets
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        nav {
          background-color: white;
          color: #333;
          height: 50px;
          padding: 0 20px;
          display: flex;
          justify-content: center;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1200px;
        }
        .logo-container {
          display: flex;
          align-items: center;
        }
        ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        li {
          margin-right: 20px;
        }
        a {
          color: #333;
          text-decoration: none;
          font-size: 18px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  )
}

export default Nav;
