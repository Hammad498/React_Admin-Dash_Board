import '../styles/app.scss'
import { Link, Location, useLocation } from 'react-router-dom'
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from 'react-icons/ri'
import { AiFillFileText } from 'react-icons/ai'
import { IoIosPeople } from 'react-icons/io'
import { IconType } from 'react-icons'
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from 'react-icons/fa'

const AdminSideBar = () => {

    const location = useLocation();

  return <aside>
    <h2>Logo.</h2>

    <DivOne location={location}/>
    <DivTwo location={location}/>
    <DivThree location={location}/>

  </aside>
  
};


const DivOne=({location}:{location:Location})=>(
    <div>
    <h5>Dashboard</h5>
    
    <ul>
        <Li url='/admin/dashboard' text='Dashboard' Icon={RiDashboardFill} location={location}/>
        <Li url='/admin/product' text='Products' Icon={RiShoppingBag3Fill} location={location}/>
        <Li url='/admin/customer' text='Customer' Icon={AiFillFileText} location={location}/>
        <Li url='/admin/transaction' text='Transactions' Icon={IoIosPeople} location={location}/>
    </ul>
</div>
);



const DivTwo=({location}:{location:Location})=>(
    <div>
    <h5>Charts</h5>
    
    <ul>
        <Li url='/admin/chart/bar' text='Bar' Icon={FaChartBar} location={location}/>
        <Li url='/admin/chart/pie' text='Pie' Icon={FaChartPie} location={location}/>
        <Li url='/admin/chart/line' text='Line' Icon={FaChartLine} location={location}/>
    </ul>
</div>
);




const DivThree=({location}:{location:Location})=>(
    <div>
    <h5>Apps</h5>
    
    <ul>
        <Li url='/admin/app/stopwatch' text='StopWatch' Icon={FaStopwatch} location={location}/>
        <Li url='/admin/app/coupen' text='Coupen' Icon={RiCoupon3Fill} location={location}/>
        <Li url='/admin/app/toss' text='Toss' Icon={FaGamepad} location={location}/>
    </ul>
</div>
);


interface Liprops{url:string,text:string,Icon:IconType,location:Location}
const Li=({url,text,Icon,location}:Liprops)=>(
    <li style={
        {
            backgroundColor: location.pathname.includes(url) ? 'rgb(0,115,22,0.1)' : 'white'
        }
    }>
        <Link to={url}>
        <Icon/>
        {text}
        </Link>
    </li>
);


export default AdminSideBar
