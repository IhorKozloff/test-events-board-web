import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ISubscriber } from '../../types';
import { LiaUserEditSolid } from 'react-icons/lia';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { Loader } from '../Loader';

interface IProps {
    onFormSubmit: (subscriberData: ISubscriber) => void;
    isLoading: boolean;
};

export const SubscribeForm = ({ onFormSubmit, isLoading }: IProps) => {

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required')
            .min(2, 'Name must be at least 2 characters long'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required')
    });

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-[100vh] relative">
            <Loader isLoading={isLoading}/>
            <Formik
                initialValues={{ name: '', email: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    onFormSubmit(values);
                    resetForm();
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="w-1/2 px-8 py-10 bg-custom-white  rounded-md">
                        <h2 className="mb-10">Join for us!</h2>
                        <ul className="mb-12">
                            <li className="mb-16 border-b-2 border-solid border-b-custom-grey relative">
                                <div className="flex items-center justify-start gap-4">
                                    <LiaUserEditSolid/>
                                    <label htmlFor="name" className="font-medium">Name</label>
                                </div>

                                <Field type="text" name="name" className="outline-none"/>
                                <ErrorMessage name="name" component="div" className="error text-red absolute -bottom-6" />
                            </li>
                            <li className="border-b-2 border-solid border-b-custom-grey relative">

                                <div className="flex items-center justify-start gap-4">
                                    <MdOutlineAlternateEmail/>
                                    <label htmlFor="email" className="font-medium">Email</label>
                                </div>
                                <Field type="email" name="email" className="outline-none"/>
                                <ErrorMessage name="email" component="div" className="error text-red absolute -bottom-6" />
                            </li>
                        </ul>

                        <div className="w-full flex items-center justify-center">
                            <button type="submit" disabled={isSubmitting} className="px-6 py-2 rounded-lg bg-blue-md hover:bg-dark-blue hover:text-custom-white hover:scale-105 active:scale-100 font-medium">Register</button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    );
};
