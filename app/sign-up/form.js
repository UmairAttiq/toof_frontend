'use client'
import Stepper from "../components/stepper";
import { useUserForm } from "../lib/context/signup";
import Registration from "./registration";
import StoreRegistration from "./storeRegistration";

const stepOfList = [
    {
        name: 'Inscription',
        no: 1
    },
    {
        name: 'Informations',
        no: 2
    }
]

export default function Form() {
    const { state, dispatch } = useUserForm();

    const getComponentByStep = () => {
        switch (state.step) {
            case 1:
                return <Registration />
            case 2:
                return <StoreRegistration />
            default:
                break;
        }
    }
    console.log("State-----> ", state)
    return (
        <div className="w-full px-5 py-10 mt-10 sm:px-10">
            <Stepper steps={stepOfList} current={state.step} />
            {getComponentByStep()}
        </div>
    )
}