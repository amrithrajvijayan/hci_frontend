'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'

interface PatientVisit {
    id: string,
    name: string,
    date: string,
}

export default function SearchResults() {

    const router = useRouter()


    const [data, setData] = useState([]);

    useEffect(() => {
        const search = window.location.search;

        const params = new URLSearchParams(search);
        const searchType = params.get('searchType');
        const searchValue = params.get('searchValue');

        console.log('value read inside useeffect is ' + searchValue);
    
        fetch('http://localhost:5103/patientVisits?searchType=' + searchType+'&searchValue=' + searchValue)
        .then(response => response.json())
        .then(json => {
            console.log("obtained " + JSON.stringify(json));
            setData(json)
        })
        .catch(error => console.error(error));
    }, []);

    function goBack() {
        router.push('/');
    }


    const tableData = data.map((obj: PatientVisit) => {
        return (
                <tr key={obj.id}>
                    <td>{obj.id}</td>
                    <td>{obj.name}</td>
                    <td>{obj.date}</td>
                </tr>
        );
    })

    return (
        <div className="searchResults">
            <div>
                <h1>
                    Patient Search Results 
                </h1>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                        <th>
                            Patient ID
                        </th>
                        <th>
                            Patient Name
                        </th>
                        <th>
                            Date of Visit
                        </th>
                        </tr>
                        </thead>
                    <tbody>
                    {tableData}
                    </tbody>
                </table>
            </div>
            <div className="buttonStyle">
                <button onClick={goBack} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back</button>
            </div>
        </div>
    )
}