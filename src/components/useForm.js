import { useState, useEffect } from 'react';

function useForm({initialValues, onSubmit, validate}) {
    const [values, setValue] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setValue({...values, [name]: value})
    }
 
    const handleSubmit = async (e) => {
        setSubmitting(true);
        e.preventDefault();
        await new Promise((r) => setTimeout(r, 1000));
        setErrors(validate(values));
    }

    useEffect(()=>{
        if(submitting){
            if(Object.keys(errors).length === 0){
                onSubmit(values);
            }
            setSubmitting(false)
        }
    },[errors]) 

    return {
        values,
        errors,
        submitting,
        handleChange,
        handleSubmit
    }
}

export default useForm;