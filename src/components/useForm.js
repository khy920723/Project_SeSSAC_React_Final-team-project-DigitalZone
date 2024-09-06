import { useState, useEffect } from "react";
import validateInfo from "./validateInfo";

const useForm = (validateInfo) => {
  const [values, setValues] = useState({
    department:"",
    userid:"",
    password: "",
    password2: "",
    email: "",
    username: "",
    mobile:""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } =
      event.target; /* destructuring, name is the input prop */
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    setErrors(validateInfo(values));
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
