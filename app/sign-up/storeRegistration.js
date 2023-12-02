import Input from "../components/input"
import Scheduale from "../components/schedule";
import StoreImageUploder from "../components/storeImageUploder";
import { useUserForm } from "../lib/context/signup"

const inputList = [
    {
        label: 'Nom du magazin',
        name: 'storeName',
        field: 'storeName',
        type: 'text',
        placeholder: 'Entrez nom du magazin',
    },
    {
        label: 'Adresse',
        name: 'address',
        field: 'address',
        type: 'text',
        placeholder: 'Entrez Adresse',
    },
    [
        {
            label: 'Ville',
            name: 'city',
            field: 'city',
            type: 'text',
            placeholder: 'Entrez ville',
        },
        {
            label: 'Code postale',
            name: 'zipCode',
            field: 'zipCode',
            type: 'text',
            placeholder: 'Entrez code postale',
        },
    ],
    {
        label: 'Téléphone',
        name: 'storePhone',
        field: 'storePhone',
        type: 'text',
        placeholder: 'Entrez mot de passe',
    },
]

export default function StoreRegistration() {
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
                        <Input values={field} key={field.name + '-' + key} value={state[field.field]} dispatch={dispatch} />
                    ))
                }
            </div>

            <div className="flex items-center">
                <input id="link-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-transparent border-black" />
                <label htmlFor="link-checkbox" className="ms-2 font-medium text-black">J&apos;ai lu et j&apos;accepte de CGU/CGV.</label>
            </div>

            <StoreImageUploder state={state} dispatch={dispatch} />
            <Scheduale />

            <Input
                values={
                    {
                        label: 'Description',
                        name: 'storePhone',
                        field: 'storeDescription',
                        type: 'description',
                        placeholder: 'Entrez mot de Description',
                    }
                }
                value={state.storeDescription}
                dispatch={dispatch}
            />

            <button className="w-full bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4" onClick={handleSubmit}>
                Valider
            </button>
        </div>
    )
}