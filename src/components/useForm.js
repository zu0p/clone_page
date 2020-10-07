import { useState, useEffect } from 'react';

function useForm({initialValues, onSubmit, validate}) {
    const [values, setValue] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [errname, setErrname] = useState("email_field");
    const [submitting, setSubmitting] = useState(false);

    // 변경 이벤트 처리
    const handleChange = (e) =>{
        // 이벤트 타겟의 name과 value로
        const { name, value } = e.target;
        // values값 set
        setValue({...values, [name]: value})
    }
 
    // 제출 이벤트 처리
    const handleSubmit = async (e) => {
        setSubmitting(true);

        // 이벤트 취소할 수 있는 경우, 이벤트 전파 막지 않고 그 이벤트 취소
        e.preventDefault();     
        await new Promise((r) => setTimeout(r, 1000));
        // email 형식이 올바른지 체크하고 return된 값으로 errors setting
        setErrors(validate(values).errors);
        setErrname(validate(values).classname.toString());
    }

    useEffect(()=>{
        // from submit이 되었고
        if(submitting){
            // validation 통과 되었다면
            if(Object.keys(errors).length === 0){
                onSubmit(values);
            }
            setSubmitting(false)
        }
    },[errors]) // errors 값이 바뀔 때마다 useEffect 실행

    return {
        values,
        errors,
        errname,
        submitting,
        handleChange,
        handleSubmit
    }
}

export default useForm;