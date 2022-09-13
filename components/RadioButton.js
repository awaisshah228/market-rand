import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function RadioButtons (props) {
  const { label, name, options, ...rest } = props
  return (
    <div className='form-control flex gap-4 flex-col '>
      <label>{label}</label>
      <Field name={name} >
        {({ field }) => {
          return options.map(option => {
            return (
              <div key={option.key} className=" gap-4 flex   " >
                <input
                  type='radio'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                  className=''
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            )
          })
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default RadioButtons