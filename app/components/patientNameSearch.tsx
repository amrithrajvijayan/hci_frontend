'use client';
import { validateHeaderValue } from "http";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function PatientNameSearchComponent() {

    const [searchText, setSearchText] = useState('');
    const router = useRouter()

    const [searchType, setSearchType] = useState('name');
 
    const searchTypeOptions = [
        {text: "Patient Name", value: 'name'},
        {text: "Patient Id", value: 'id'},
    ];

    const searchTypeChangeHandler = (event: any) => {
        setSearchType(event.target.value);
    };    

    function handleSearch() {
        const url = '/search?searchType=' + searchType + '&searchValue=' + searchText;
        router.push(url);
    }

    const selectTypes = searchTypeOptions.map((type) => {
        return <option key={type.value} value={type.value}>{type.text}</option>
    })


    return (
        <div className="grid-container">
            <div className="grid-item">
                <select onChange={searchTypeChangeHandler} >
                    {selectTypes}
                </select>
            </div>
            <div className="grid-item">
                <input type="text" id="first_name" onChange={function (v) { setSearchText(v.target.value) }} value={searchText} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></input>
            </div>
            <div>
                <button onClick={handleSearch} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </div>
    )
}