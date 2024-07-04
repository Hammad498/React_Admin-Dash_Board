import { BsSearch } from "react-icons/bs";
import AdminSideBar from "../components/AdminSideBar";
import '../styles/app.scss';
import { FaRegBell } from "react-icons/fa";
import userImg from '../assets/userpic.png';
import { HiTrendingUp } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* SideBar */}
      <AdminSideBar />

      {/* Main rightbar */}
      <main className="dashboard">


        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users & docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>




        <section className="widgetcontainer">
          <WidgetItem heading='Revenue' value={3400000} percent={40} color='rgb(0,115,255)' amount={true} />
          <WidgetItem heading='Revenue' value={3400000} percent={40} color='rgb(0,115,255)' amount={true} />
          <WidgetItem heading='Revenue' value={3400000} percent={40} color='rgb(0,115,255)' amount={true} />
          <WidgetItem heading='Revenue' value={3400000} percent={40} color='rgb(0,115,255)' amount={true} />
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({ heading, value, percent, color, amount = false }: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>

      {percent > 0 ? (
        <span className="green"><HiTrendingUp /> + {percent}%</span>
      ) : (
        <span className="red"><HiTrendingUp /> {percent}%</span>
      )}
    </div>



    <div className="widgetCircle">
      <span color={color }>{percent}%</span>
    </div>
  </article>
);

export default Dashboard;
