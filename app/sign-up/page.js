'use client'
import Input from "../components/input";
import Stepper from "../components/stepper";

export default function SignUp() {
    return (
        <div className="w-full">
            <Stepper />
            <h1>Inscription</h1>
            <div className="flex justify-between">
                <Input />
                <div className="px-3"></div>
                <Input />
            </div>
            <Input />
            <Input />
            <Input />
        </div>
    )
}