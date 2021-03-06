import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { addTodo } from '../../actions/todoActions';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
        content : '',
        completed :false ,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }



  componentWillReceiveProps(nextProps) {
    
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const todoData = {
      content: this.state.content,
    };

    this.props.addTodo(todoData , this.props.router);
    this.setState({content :''})

    window.location.reload();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="TodoForm">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add TODO</h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.todo
                    })}
                    placeholder="new todo"
                    name="content"
                    value={this.state.content}
                    onChange={this.onChange}
                  />
                  
                  {errors.content && (
                    <div className="invalid-feedback">{errors.content}</div>
                  )}
                </div>
                <input type="submit" value="Add todo" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
     </div>

    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addTodo })(TodoForm);