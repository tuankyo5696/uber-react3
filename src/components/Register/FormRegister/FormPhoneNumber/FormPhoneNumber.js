import React from 'react'
import {Field} from 'formik'
import logoArr from './../../../../assets/img/rightArrow.png'
import './FormPhoneNumber.scss';

const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null;

const Checkbox = ({
    field: { name, value, onChange, onBlur },
    form: { errors, touched, setFieldValue },
    id,
    label,
    className,
    ...props
  }) => {
    return (
      <div>
        <input
          name={name}
          id={id}
          type="checkbox"
          value={value}
          checked={value}
          onChange={onChange}
          onBlur={onBlur}
          className = {className}
        />
        <label htmlFor={id} className = "agree" >{label}</label>
        {touched[name] && <InputFeedback error={errors[name]} />}
      </div>
    );
  };


  const Step1 = ({nextStep, handleChange, values,errors,touched}) => (
    <div >  
        <div className = "coverRegister">
              <div className = "Form">
                <div className="moving">
                    <p>Get moving with Uber</p>
                </div>
              
                   <div className="group-inline">
                      <label className = "tel"> +84</label>
                        <input
                        type="tel"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange} 
                        className = "coverFormInput"
                        placeholder="Enter your mobile number"
                        />
                      </div> 
                    <div> 
                              {errors && <div id="feedback">{errors.phone}</div>}
                    </div>

                   <div className="input-group-text">
                          <Field
                                  component={Checkbox}
                                  name="singleCheckbox"
                                  id="singleCheckbox"
                                  label="Agree Terms and conditions"
                                  className = "item3"
                              />
                     </div>
                     <div className="rightArrow">
                                    <button type="button" onClick = {nextStep} className="nextBtn" disabled = {values.singleCheckbox && values.phone !== '' ? false: true}>
                                      <img src={logoArr} alt= "logoArr" className="rightArrImg"/>
                                    </button> 
                      </div>
              </div>
              </div>    
        </div>          
    )

  



export default Step1