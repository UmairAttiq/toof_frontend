'use client'
import { UserFormProvider } from "../lib/context/signup";
import Form from "./form";

export default function SignUp() {
    return (
        <UserFormProvider>
            <Form />
        </UserFormProvider>
    )
}