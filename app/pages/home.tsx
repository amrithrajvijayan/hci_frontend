import PatientNameSearchComponent from '../components/patientNameSearch'

export default function HomePage() {
    return (
        <div className="HomePageContents">
            Welcome to Patient Records. Please use appropriate search terms for your needs.
            <ul>
                <li><PatientNameSearchComponent/></li>
            </ul>
        </div>
    )
}