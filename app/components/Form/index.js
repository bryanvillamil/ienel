// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{
        email: '',
        nombre: '',
        apellidos: '',
        telefono: '',
        mensaje: '',
      }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="nombre" placeholder="Nombre" />
          <ErrorMessage name="nombre" component="div" />
          <Field type="text" name="apellidos" placeholder="Apellidos" />
          <ErrorMessage name="apellidos" component="div" />
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
          <Field type="text" name="telefono" placeholder="Telefono" />
          <Field
            component="textarea"
            name="mensaje"
            placeholder="Mensaje"
            rows="4"
          />
          <ErrorMessage name="mensaje" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
