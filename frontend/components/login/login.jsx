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
      lis.push(
        <li key={i} className='errors-li'>
          {error}
        </li>
      );
    });
    return lis;
    
  }

  render() {
    return(
      <div className='login-container'>
        <ul className='errors-ul'>
          {this.renderErrors()}
        </ul>
        <form className='login-form'>
          <div className='input-container'>
            <input type='text' placeholder='username' onChange={this.update('username')} value={this.state.username}/>
            <input type='password' placeholder='password' onChange={this.update('password')} value={this.state.password}/>
          </div>
          <div className='login-button-div'>
            <input type='submit' value='Login' onClick={this.handleLogin} />
            <input type='submit' value='Signup' onClick={this.handleSignup} />
          </div>
        </form>
      
      </div>

    )
  }
}

export default Login;
