import { useState } from "react";
import Input from "../components/input"
import Modal from "../components/modal";
import { useUserForm } from "../lib/context/signup"

const inputList = [
    [
        {
            label: 'Nom',
            name: 'name',
            field: 'name',
            type: 'text',
            placeholder: 'Entrez nom',
        },
        {
            label: 'Prénom',
            name: 'firstName',
            field: 'firstName',
            type: 'text',
            placeholder: 'Entrez prénom',
        },
    ],
    {
        label: 'Email',
        name: 'email',
        field: 'email',
        type: 'text',
        placeholder: 'Entrez email',
    },
    {
        label: 'Téléphone',
        name: 'phone',
        field: 'phone',
        type: 'text',
        placeholder: 'Entrez téléphone',
    },
    {
        label: 'Mot de passe',
        name: 'password',
        field: 'password',
        type: 'text',
        placeholder: 'Entrez mot de passe',
        button: true,
    },
]

export default function Registration() {
    const { state, dispatch } = useUserForm();
    const [open, setOpen] = useState(false)
    const handleSubmit = () => {
        dispatch({ type: 'UPDATE_FIELD', field: 'step', value: 2 })
    }
    const handleClose = () => setOpen((preState) => !preState);
    const handleAgree = () => {
        dispatch({ type: 'UPDATE_FIELD', field: 'agree', value: true })
        setOpen((preState) => !preState)
    }
    return (
        <div>
            <h1 className=" font-bold mt-10 mb-3">Inscription</h1>
            <div>
                {
                    inputList.map((field, key) => (
                        <Input values={field} key={field.name + '-' + key} value={state[field.field]} dispatch={dispatch}  />
                    ))
                }
            </div>

            <div className="flex items-center">
                <input id="link-checkbox" type="checkbox" value="" checked={state.agree} className="w-5 h-5 text-blue-600 bg-transparent border-black" onClick={handleClose} />
                <label htmlFor="link-checkbox" className="ms-2 font-medium text-black">J&apos;ai lu et j&apos;accepte de CGU/CGV.</label>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4" onClick={handleSubmit} disabled={!state.agree}>
                Valider
            </button>
            <Modal open={open} handleAgree={handleAgree} handleClose={handleClose}  />
        </div>
    )
}