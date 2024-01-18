'use client'


export default function SearchResults() {
    return (
        <div className="searchResults">
            <div>
                <h1>
                    Patient Search Results
                </h1>
            </div>
            <div>
                <table>
                    <th>
                        Patient ID
                    </th>
                    <th>
                        Patient Name
                    </th>
                    <th>
                        Date of Visit
                    </th>
                    <tr>
                        <td>
                            1
                        </td>
                        <td>
                            P1
                        </td>
                        <td>
                            11/23/223
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}