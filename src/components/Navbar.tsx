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
            <Link href="/" className="nav-link">
             Sobre Nosotro
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
            Calendario
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link">
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
          max-width: 1000px;
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
        @media screen and (max-width: 50px) {
          .logo-container {
            flex-direction: column;
            align-items: center;
          }
          h3 {
            margin-top: 10px;
          }
          ul {
            flex-direction: column;
            align-items: center;
            margin-top: 10px;
          }
          li {
            margin: 0;
            margin-bottom: 10px;
          }
        }
        @media only screen and (max-width: 500px) {
          .nav-container {
            flex-direction: column;
            align-items: flex-start;
          }
          .logo-container {
            margin-bottom: 10px;
          }
          h3 {
            margin: 0;
          }
        }
      `}</style>

    </nav>
  )
}

export default Nav;
