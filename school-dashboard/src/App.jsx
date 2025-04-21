import './App.css'
import DashboardCard from './components/Dashboard/Dashboard'
import ProfileCard from './components/ProfileCard/ProfileCard'
import ProfileForm from './components/ProfileForm/ProfileForm'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <>
      <Sidebar />
      <section className="flex flex-wrap " style={{ gap: "50px" }}>
          <div>
            <DashboardCard title="Enrolled Courses" value="3" /> <br />
            <DashboardCard title="Completed Lessons" value="12" />
          </div>
          <div className="flex flex-wrap gap-4 h-35   ">
            <h1 className="font-bold text-xl " style={{ position: "absolute", top: "35px" }}>
              Instructor Dashboard
            </h1>
            <DashboardCard title="My Courses" value="5"/>
            <DashboardCard title="Students Enrolled" value="20" />
          </div>
        </section>
        <ProfileCard />
        <ProfileForm />
    </>
  )
}

export default App
