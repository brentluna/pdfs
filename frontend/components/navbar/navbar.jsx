import React from 'react';

const Navbar = (props) => {
  debugger
  const logoutButton = () => {
    debugger
    if (props.loggedIn) {
      return(
        <input type='submit' value='logout' onClick={props.logout} />
      )

    }
  }
  return (
    <header>
      <div>
        <div>
          <h1>PDF</h1>
        </div>
        <div>
          {logoutButton()}
        </div>
      </div>
    </header>
  )
}

export default Navbar;
