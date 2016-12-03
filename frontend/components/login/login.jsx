import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.update = this.update.bind(this);
  }


  handleSignup(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user);
    this.resetFields();
  } 

  resetFields(){
    this.setState({username:'', password:''});
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({[field]: e.currentTarget.value});
    }
  }

  handleLogin(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user);
    this.resetFields();
  }

  renderErrors() {
    let lis = [];
    this.props.errors.forEach((error, i) => {
        <li key={i}>
          {error}
        </li>
    });
    return (
      <ul>
        {lis}
      </ul>
    )
  }

  render() {
    return(
      <div>
        <form className='login-form'>
          {this.renderErrors()}
          <div>
            <input type='text' placeholder='username' onChange={this.update('username')} />
            <input type='password' placeholder='password' onChange={this.update('password')} />
          </div>
          <input type='submit' value='Login' onClick={this.handleLogin} />
          <input type='submit' value='Signup' onClick={this.handleSignup} />
        </form>
      
      </div>

    )
  }
}

export default Login;
