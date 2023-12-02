import Input from "../components/input"
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
    const handleSubmit = () => {
        dispatch({ type: 'UPDATE_FIELD', field: 'step', value: 2 })
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
                <input id="link-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-transparent border-black" />
                <label htmlFor="link-checkbox" className="ms-2 font-medium text-black">J&apos;ai lu et j&apos;accepte de CGU/CGV.</label>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4" onClick={handleSubmit}>
                Valider
            </button>
            <div className="w-50">
            </div>
        </div>
    )
}