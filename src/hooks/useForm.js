import {useState} from 'react'

const useForm = (init) => {
    const [values, setValues] = useState(init);
  
    const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
    return [values, handleChanges]
  }

  export default useForm;