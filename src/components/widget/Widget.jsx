import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonIcon from '@mui/icons-material/Person';


const Widget = () => {
  return (
    <div className="widget">
        <div className="left">
            <span className="title">USERS</span>
            <span className="counter">12312</span>
            <span className="link">see all users</span>
        </div>
        <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpOutlinedIcon/>20%</div>
            <PersonIcon className="icon"/>
        </div>
        
    </div>
  )
}

export default Widget