import "./sidebar.scss";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2SharpIcon from '@mui/icons-material/Inventory2Sharp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'; 
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import StoreIcon from '@mui/icons-material/Store';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">smpadmin</span>
      </div>
      <hr/>
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
          <li>
            <SpaceDashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonIcon className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <StoreIcon className="icon"/>
            <span>Products</span>
          </li>
          <li>
            <Inventory2SharpIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon"/>
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <HealthAndSafetyIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <ArticleIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
