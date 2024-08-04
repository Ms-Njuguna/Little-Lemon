import Logo from './Logo .svg';

function Nav(){
    return(
        <>
          <img src={Logo} alt="logo"/>
          <Nav>
              <ul>
                  <li><a href="/">Home</a></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </Nav>
        </>
    )
}

export default Nav;