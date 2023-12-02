import { useState } from "react"
import Input from "../input"

const defaultInputs = [
    [
        {
            label: 'Jour',
            name: 'schedules',
            field: 'schedules',
            type: 'text',
            placeholder: 'Lundi',
        },
        {
            label: 'Créneaux',
            name: 'schedules',
            field: 'schedules',
            type: 'text',
            placeholder: '10h-12h',
        },
    ]
]
export default function Scheduale() {
    const [InputList, setInputList] = useState(defaultInputs)

    const handleAddScheduale = () => {
        if (InputList.length > 6) return
        setInputList([...InputList, defaultInputs[0]])
    }
    return (
        <div className="w-full border-gray-300 border-2 p-5 mb-5">
            {
                InputList.map((field, key) => (
                    <Input values={field} key={"schedules-" + key} />
                ))
            }
            <button
                type="button"
                className="w-full text-blue-600 font-bold py-2 px-4 border-blue-600 border-2 my-2 hover:bg-blue-600 hover:text-white"
                onClick={handleAddScheduale}
            >
                Ajouter
            </button>
        </div>
    )
}