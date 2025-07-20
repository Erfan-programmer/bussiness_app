import Spinner from '../modules/Spinner/Spinner'
import TopBarLight from '../modules/TopBar/TopBarLight'
import NavBarLight from '../modules/Navbar/NavBarLight'
import BreadCrumb from '../modules/BreadCrumb'
import TeamPageTeam from '../templates/Team/TeamPageTeam'

const Team = () => {
  const link = {
    title:"Our Teams",
    route:"team"
  }
  return (
    <>
    <Spinner />
    <TopBarLight />
    <NavBarLight />
    <BreadCrumb link={link}/>
    <TeamPageTeam />
    </>
  )
}

export default Team