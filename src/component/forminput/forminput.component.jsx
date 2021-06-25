import React from 'react';

import './forminput.scss';

const Forminput =({handler,label, ...otherprops})=>(
    <div className="group">
          <input className="form-input" onChange={handler} {...otherprops} />
          {label ? (
              <label 
              className={`${
                  otherprops.value.length ? 'shrink': ''
                  } form-input-label`}>
                {label}
              </label>)
               : null}
    </div>
)

export default Forminput;