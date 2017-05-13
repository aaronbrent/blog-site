import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    // const { meta: { touched, error } } = field;
    // const className = `form-group ${ field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
    renderField(field){
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                { field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values){
        console.log(values);
    }


    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="tags"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate (values){
    const errors = {};

    if(!values.title){
        errors.title = "Enter a title";
    }

    if(!values.categories){
        errors.categories = 'Enter Some categories';
    }
    if(!values.content){
        errors.content = 'Enter Some content please';
    }

    return errors;
}

export default reduxForm ({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost }) (PostsNew)
);