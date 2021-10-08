import Link from "next/link"
import { FaBook } from "react-icons/fa"
import { FaCalendarAlt } from "react-icons/fa"
import { RiInboxUnarchiveFill } from "react-icons/ri"
import { AiOutlineHistory } from "react-icons/ai"
import { AiFillDashboard } from "react-icons/ai"
import { MdAccountCircle } from "react-icons/md"
import { MdGroup } from "react-icons/md"
import { GiHelp } from "react-icons/gi"
import Courses form "."


export default function SideNav() {

  return (
    <>
      <nav className="text-[#69A9D9]">
        <Link to={}><a className="block py-2.5 px-4 hover:border-l-8 border-blue-400"><MdAccountCircle className="inline mr-2" />Account</a></Link>
        <Link href="/developers"><a className="block py-2.5 px-4 hover:border-l-8 border-blue-400"><AiFillDashboard className="inline mr-2" />Dashboard</a></Link>
        <Link href="#"><a className="block py-2.5 px-4 hover:border-l-8 border-blue-400"><FaBook className="inline mr-2" />Courses</a></Link>
        <Link href="#"><a className="block py-2.5 px-4 hover:border-l-8 border-blue-400"><MdGroup className="inline mr-2" />Groups</a></Link>
        <Link href="#"><a className="block py-2.5 px-4 hover:border-l-8 border-blue-400"><FaCalendarAlt className="inline mr-2" />Calender</a></Link>
        <Link href="#"><a className="block py-2.5 px-4 hover:border-l-8 border-blue-400"><RiInboxUnarchiveFill className="inline mr-2" />Ibox</a></Link>
        <Link href="#"><a className="block py-2.5 px-4 hover:border-l-8 border-blue-400"><AiOutlineHistory className="inline mr-2" />History</a></Link>
        <Link href="#"><a className="block py-2.5 px-4 hover:border-l-8 border-blue-400"><GiHelp className="inline mr-2" />Help</a></Link>
      </nav>

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={Aboutpage} />
      </Switch>
    </>
  )
}
