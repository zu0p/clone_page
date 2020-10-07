export default function validate({ email }) {
    const errors = {}
    var classname = "email_field"
  
    if (!email) {
      errors.email = "Please write a email"
      classname = "email_field_invalidate"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Please provide a valid email"
      classname = "email_field_invalidate"
    }
   
    return {errors, classname}
} 