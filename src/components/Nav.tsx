
import Link from 'next/link';




const Nav = () => {


  return (
    <nav className="navbar" style={{  
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      backgroundColor: 'white', 
      color: 'black',
      position: 'fixed', 
      top: '0', 
      width: '100%', 
      height: 'auto',
      zIndex: '1',
      fontSize: '1.5vw', 
      padding: '1vw' 
    }}>
      <div className="navbar__left" style={{ display: 'flex', alignItems: 'center' }}>
        <h3 style={{ marginLeft: '20px' }}>MBVACA Expeditions</h3>
        <ul style={{ display: 'flex', listStyle: 'none', marginLeft: '20px' }}>
          <li style={{ marginRight: '20px' }}>
            <Link to="/" style={{ color: 'black' }}>Inicio</Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link to="/about" style={{ color: 'black' }}>Nosotros</Link>
          </li>
          <li style={{ marginRight: '20px' }} >
          <Link to="/galapagos" style={{ color: 'black' }}>Galápagos</Link>
     
            <ul className="dropdown">
              <li><Link to="/high">Treasure</Link></li>
              <li><Link to="/standard">Solaris</Link></li>
              <li><Link to="/promotional">Archipel I</Link></li>
              <li><Link to="/aqua">Aqua</Link></li>
            </ul>
      
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/amazon" style={{ color: 'black' }}>Ecuador</Link>
      
            <ul className="dropdown">
              <li><Link to="/quito">Quito</Link></li>
              <li><Link to="/guayaquil">Guayaquil</Link></li>
              <li><Link to="/cuenca">Cuenca</Link></li>
            </ul>
         
        </li>
     
          <li style={{ marginRight: '20px' }}>
      
          </li>
        </ul>
      </div>
      <div className="navbar__right">
      <ul style={{ display: 'flex', listStyle: 'none', marginRight: '20px' }}>
 

        <li>
  

        </li>
        <div>
 
        </div>
        
      </ul>
      </div>
    </nav>
  );
};

export default Nav