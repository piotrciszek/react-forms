import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState ('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState ('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.trim().includes('@');
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid=true;
  }
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };
  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = event => {
    setEnteredEmailTouched(true);
  };


  const formSubmissionHandler = event => {
    event.preventDefault();

    if(!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);
    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  }

  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} 
        onBlur={nameInputBlurHandler} value={enteredName} />
      </div>
      {nameInputIsValid && <p className="error-text">Name must not be empty.</p>}
      <div className="form-actions">
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your E-mail</label>
        <input type='text' id='name' onChange={emailInputChangeHandler} 
        onBlur={emailInputBlurHandler} value={enteredEmail} />
      </div>
      {nameInputIsValid && <p className="error-text">E-mail must not be empty and must include @.</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
