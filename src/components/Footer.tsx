import './Footer.css'
import * as yup from 'yup'
import { useFormik } from 'formik'
function Footer() {
    const schema = yup.object().shape({
        firstname: yup.string().required('Please enter your name'),
        email:yup.string().email().required('Please enter your email')
    })
    const {values,handleSubmit,handleBlur,handleChange,handleReset,errors,touched}=useFormik({
        initialValues:{
            firstname:'',
            email:''
        }, validationSchema: schema,
        onSubmit: (values) => {
            handleReset(values)
        }
    })
return (
    <div style={{backgroundColor:'black'}} className='p-md-5 p-4 container-fluid'>
        <div className='row'>
            <div className='col-12 p-2 '>
                <h5 className='col-12 text-center mb-3'>Be the first to know about new Movies.</h5>
                <form className='col-12 d-flex flex-column align-items-center' onSubmit={handleSubmit}>
                    <input
                        className='col-md-4 col-11 mb-3 p-2 rounded'
                        type='text'
                        name='firstname'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstname}
                        placeholder='Enter your name' />
                    {errors.firstname && touched.firstname ? <p style={{color:'red'}} className='col-4 text-start'>{errors.firstname}</p> : null}
                    <input
                        className='col-md-4 col-11 mb-3 p-2 rounded'
                        type='email'
                        name='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder='Enter your email' />
                    {errors.email && touched.email ? <p style={{color:'red'}} className='col-4 text-start'>{errors.email}</p> : null}
                    <input className='col-md-2 col-6 p-2 rounded' type='submit' value='Submit' />

                </form>
            </div>
        </div>
    </div>
)
}

export default Footer