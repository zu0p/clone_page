# Clone page 

## HTML/CSS/Javascript/ReactJS

<hr />

### React Hook
이메일 유효성 판단에 커스텀 React Hook을 사용했다.

##### useForm
```
function useForm({initialValues, onSubmit, validate}) {
    const [values, setValue] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [errname, setErrname] = useState("email_field");
    const [submitting, setSubmitting] = useState(false);

    return {
        values,
        errors,
        errname,
        submitting,
        handleChange,
        handleSubmit
    }
}
```
    입력 input의 초기값, submit후 처리 로직, 입력 값 검증 로직을 파라미터로 받고
    useState를 사용하여 입력값, 에러, 에러발생한 input의 className, submit상태를 관리했다.

##### 변경이벤트 처리
```
    const handleChange = (e) =>{
        const { name, value } = e.target;
        setValue({...values, [name]: value})
    }
```
    입력값이 변경되는 이벤트를 처리하고
    해당 input에 onChange={handleChange} 연결해준다.

##### 제출이벤트 처리
```
    const handleSubmit = async (e) => {
        setSubmitting(true);

        // 이벤트 취소할 수 있는 경우, 이벤트 전파 막지 않고 그 이벤트 취소
        e.preventDefault();     
        await new Promise((r) => setTimeout(r, 1000));
        // email 형식이 올바른지 체크하고 return된 값으로 errors setting
        setErrors(validate(values).errors);
        setErrname(validate(values).classname.toString());
    }
```
    올바른 형식의 입력이 아닐 경우 input의 css를 변경하기 위해 setErrname으로 errname을 유지했다.
    input 태그의 className={errname}으로 변경사항을 반영하도록 했다.

##### useEffect
```
    useEffect(()=>{
        if(submitting){
            if(Object.keys(errors).length === 0){
                onSubmit(values);
            }
            setSubmitting(false)
        }
    },[errors]) 
```
    erros의 변경이 있을때 useEffect 실행되면 form이 submit되었는지 확인 후 유효성 판단 통과되면 onSubmit하게 한다.

    위의 코드들을 useForm.js파일로 묶어 관리하니 훨씬 간결하고 깨끗해서 좋았다.

    도움이 된 링크는 <https://www.daleseo.com/react-forms-with-hooks/>


<hr />

### 주어진 이미지
* Desktop image   
<img src="https://user-images.githubusercontent.com/30032840/95212264-7899ee00-0828-11eb-99c6-897b68c48cdf.jpg" width="90%" />   

* Mobile image   
<img src="https://user-images.githubusercontent.com/30032840/95212271-79cb1b00-0828-11eb-845a-271f3fec3359.jpg" width="30%" />   

* Active-states       
<imb src="https://user-images.githubusercontent.com/30032840/95306087-e0504780-08c1-11eb-85a3-567dd5f9136c.jpg" width="90%" />      

<hr />

### 이미지를 토대로 작성한 페이지
* Desktop에서 작동하는 페이지   
<img src="https://user-images.githubusercontent.com/30032840/95304881-358b5980-08c0-11eb-8561-80cc1dc5d8e1.JPG" width="90%" />   

* 이메일을 정상적으로 작성한 경우   
    <img src="https://user-images.githubusercontent.com/30032840/95304989-5e135380-08c0-11eb-81ee-a518beda26dd.JPG" width="90%"/>   

* 이메일 형식이 잘못된 경우   
    <img src="https://user-images.githubusercontent.com/30032840/95305370-d5e17e00-08c0-11eb-9a1b-0c84277e7d19.JPG" width="90%" />   
        > 주어진 이미지의 [Active-states]처럼 빨간색 느낌표 처리를 못했다

* 모바일 페이지   
    <img src="https://user-images.githubusercontent.com/30032840/95305677-47213100-08c1-11eb-91fc-6e86ac0ee958.JPG" width="40%" />   
        > ~~미완의 모습이다 :(~~

<hr />