import React from 'react';

const Navbar = (props) => {
  const logoutButton = () => {
    if (props.loggedIn) {
      return(
        <input type='submit' value='logout' onClick={props.logout} />
      )

    }
  }
  return (
    <header className='navbar'>
        <div className='title-div'>
          <h1>PDF</h1>
        </div>
        <div className='logout-div'>
          {logoutButton()}
        </div>
    </header>
  )
}

export default Navbar;
