import React, { Component } from 'react'

class Register extends Component {

    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:'',
            password2:'',
            errors:{}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name ]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();

        const newUser={
            name: this.state.name,
            email:this.state.email,
            password:this.state.password,
            password2:this.state.password2
        }
        console.log(newUser)
    }




    render() {
        return (
            <div className="register  ">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Sign Up</h1>
                  <form onSubmit={this.onSubmit}>
                   
                   
                    <div className="form-group">
                      <input type="text"
                       className="form-control form-control-lg" 
                       placeholder="Name" name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                         />
                    </div>
                    <div className="form-group">
                      <input type="email" 
                      className="form-control form-control-lg" 
                      placeholder="Email Address"
                      value={this.state.email}
                      onChange={this.onChange}
                      name="email" />
                
                    </div>
                    <div className="form-group">
                      <input type="password" 
                      className="form-control form-control-lg"
                       placeholder="Password" 
                       value={this.state.password}
                       onChange={this.onChange}
                       name="password" />
                    </div>
                    <div className="form-group">
                      <input type="password" 
                      className="form-control form-control-lg"
                       placeholder="Confirm Password" 
                       value={this.state.password2}
                       onChange={this.onChange}
                       name="password2" />
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-2" value="submit"/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
    }
}


export default  Register