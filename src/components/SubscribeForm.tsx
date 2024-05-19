import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ISubscriber } from '../types';

interface IProps {
    onFormSubmit: (subscriberData: ISubscriber) => void;
}
export const SubscribeForm = ({ onFormSubmit }: IProps) => {

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required')
            .min(2, 'Name must be at least 2 characters long'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required')
    });

    return (
        <div className="container">
            <Formik
                initialValues={{ name: '', email: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    onFormSubmit(values);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field type="text" name="name" />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div>
                            <button type="submit" disabled={isSubmitting}>
                            Register
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};