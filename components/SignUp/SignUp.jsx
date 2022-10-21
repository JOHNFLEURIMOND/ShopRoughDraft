import React, { useContext, useState, useCallback } from 'react';
import { MainContainer, Title, StyledButton } from './index';
import axios from 'axios';
import TextInput from '../Form/TextInput.jsx';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { Animated } from 'react-animated-css';
const FantasyFootballRanking = () => {
  return (
    <MainContainer>
      <Title>Sign Up</Title>
      <div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }}
          validationSchema={yup.object().shape({
            firstName: yup
              .string()
              .required('Your First Name Is Required!')
              .min(2, 'Your First Name Needs To Be Valid'),
            lastName: yup
              .string()
              .required('Your Last Name Is Required!')
              .min(2, 'Your Last Name Needs To Be Valid'),
            email: yup.string().email().required('Your Email Is Required!'),
            password: yup.string().required('Your Password Is Required!'),
          })}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              axios
                .post('http://localhost:8080/users/users', values, actions) // no try/catch here
                .then(response => {
                  console.log(response);
                })
                .catch(error => {
                  console.log(error.response);
                });
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              actions.resetForm({
                values: {
                  // the type of `values` inferred to be Blog
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: '',
                },
                // you can also set the other form states here
              });
            }, 400);
          }}
        >
          {({
            errors,
            touched,
            isSubmitting,
            dirty,
            handleSubmit,
            values,
            handleBlur,
            handleChange,
          }) => (
            <Form onSubmit={handleSubmit}>
              <label htmlFor='firstName'>First Name</label>
              <TextInput
                id='firstName'
                name='firstName'
                placeholder='First Name'
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
              <label htmlFor='lastName'>Last Name</label>
              <TextInput
                id='lastName'
                name='lastName'
                placeholder='Last Name'
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastName && touched.lastName ? (
                <div>{errors.firstName}</div>
              ) : null}
              <label htmlFor='email'>Email</label>
              <TextInput
                id='email'
                name='email'
                placeholder='Valid@email.com'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type='email'
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <label htmlFor='password'>Password</label>
              <TextInput
                id='password'
                name='password'
                placeholder='Password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type='password'
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <StyledButton type='submit' disabled={!dirty || isSubmitting}>
                Submit
              </StyledButton>
            </Form>
          )}
        </Formik>
      </div>
    </MainContainer>
  );
};

export default FantasyFootballRanking;
