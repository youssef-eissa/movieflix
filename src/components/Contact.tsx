import './contact.css'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
function Contact() {
    const schema = yup.object().shape({
        firstname: yup.string().required('Please enter your first name'),
        lastname: yup.string().required('Please enter your last name'),
        email: yup.string().email().required('Please enter your email'),
        message: yup.string().required('Please enter your message')
    })
    const {values,handleSubmit,handleBlur,handleChange,handleReset,errors,touched}=useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            message:''
        }, validationSchema: schema,
        onSubmit: (values) => {
            handleReset(values)
        }
    })
return (
    <div className='container contactPage'>
        <div className='row'>
            <div className='col-12 d-flex  justify-content-center p-0 flex-wrap'>
                <Link reloadDocument onClick={() => window.scrollTo({top:0,behavior:'smooth'})} className='col-10 text-start' style={{textDecoration:'none',color:'gray'}} to='/'>Back to home</Link>
                <h1 className='col-12 text-center title my-md-5 my-2'>Contact Us</h1>
                <form onSubmit={handleSubmit} className='col-10 d-flex justify-content-between flex-wrap p-3'>
                    <div className='col-md-5 col-12'>
                        <div className='col-12 d-flex flex-column mb-md-3 mb-0'>
                        <label htmlFor='firstname' className='col-12'>First Name</label>
                        <input
                        className='col-12 rounded p-2'
                        type='text'
                        name='firstname'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstname}
                        placeholder='Enter your first name'
                        id='firstname'
                    />
                    {errors.firstname && touched.firstname ? <p style={{ color: 'red' }} className='col-md-6 col-12 text-start my-2'>{errors.firstname}</p> : null}
                </div>
                    <div className='col-12 d-flex flex-column mb-md-3 mb-0'>
                        <label htmlFor='lastname' className='col-12'>Last Name</label>
                        <input
                        type='text'
                        name='lastname'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastname}
                        placeholder='Enter your last name'
                        id='lastname'
                        className='col-12 rounded p-2'
                        />
                        {errors.lastname && touched.lastname ? <p style={{ color: 'red' }} className='col-md-6 col-12 text-start my-md-2 mb-0'>{errors.lastname}</p> : null}
                    </div>
                    <div className='col-12 d-flex flex-column mb-md-3 mb-0'>
                        <label htmlFor='email' className='col-12'>Email</label>
                        <input
                        type='text'
                        name='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder='Enter your last name'
                        id='email'
                        className='col-12 rounded p-2'
                        />
                        {errors.email && touched.email ? <p style={{ color: 'red' }} className='col-md-6 col-12 text-start my-md-2 mb-0'>{errors.email}</p> : null}
                </div>
                    </div>
                    <div className='col-md-6 col-12 d-flex justify-content-center flex-wrap '>
                        <label htmlFor='message' className='col-12 d-flex align-self-start'>Message</label>
                        <textarea
                            name='message'
                            onChange={handleChange}
                            className='col-12 h-75 p-2 rounded'
                            placeholder='Enter your message'
                            id='message'
                            onBlur={handleBlur}
                            value={values.message}
                        />
                        {errors.message && touched.message ? <p style={{ color: 'red' }} className='col-12 text-start my-md-2 mb-0'>{errors.message}</p> : null}
                        <input type='submit' className='col-md-12 col-6 mt-2  p-2 rounded' value='Submit' />
                    </div>
                   
                </form>
            </div>
</div>
    </div>
)
}

export default Contact