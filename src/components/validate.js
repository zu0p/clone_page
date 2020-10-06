export default function validate({ email }) {
    const errors = {}
  
    if (!email) {
      errors.email = "Please write a email"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Please provide a valid email"
    }
  
    return errors
}