import * as Yup from "yup";

const signupschema = Yup.object({
    name:Yup.string().min(2).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(6).required("Password must be  6 charcters long")
})

export default signupschema;