import React from 'react';
import {withFormik} from 'formik';


import Step1 from './FormPhoneNumber/FormPhoneNumber';
import Step2 from './FormVerifyNumber/FormVerifyNumber';
import Step3 from './FormProfile/FormProfile';
import { withRouter } from "react-router";
import {compose,withState,withHandlers} from 'recompose';


const enhance = compose (
    withState('step','setStep',1),
    withHandlers({
        nextStep: ({setStep,step}) => () => setStep(step + 1),
        prevStep: ({setStep,step}) => () => setStep(step - 1)
    }),
    withFormik({
        mapPropsToValues : ({form: {
            phone ,
            fullname,
            singleCheckbox
         
        }}) => ({
            phone ,
            fullname ,
           singleCheckbox
        }),
        handleSubmit(
            values,
            { props, setErrors, setSubmitting }
          ) {
            setTimeout(() => {

              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              localStorage.setItem('auth',JSON.stringify(values));
              localStorage.setItem('fullname',values.fullname)
              props.history.push("/book")
            }, 100);
            
          },
     
          validate: values => {
            const errors = {};
      
            if (!values.phone) {
              errors.phone= "Phone is Required";
            }
            else {
              let pattern = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
              if(!values.phone.match(pattern)){
                errors.phone = "Phone number is invalid";
              }
            }
            if(!values.fullname){
              errors.fullname = "Full Name is Required"
            }
            console.log(errors);
            return errors;
          },
        // validationSchema: ({registerSchema})
    })
   
)
const FormRegister = ({
    handleSubmit,
    step,
    nextStep,
    prevStep,
    ...props
  }) => (
      <form onSubmit={handleSubmit}>
        {{
          1: <Step1 nextStep={nextStep} {...props} />,
          2: <Step2 prevStep={prevStep} nextStep={nextStep} {...props} />,
          3: <Step3 {...props} />
        }[step] || <div />}
      </form>
    )
  
  export default withRouter(enhance((FormRegister)));