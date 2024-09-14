import { Link } from "react-router-dom";

interface BottomWarningProps{
    label:string;
    to:string;
    buttonText:string
}

function BottomWarning({label,to,buttonText}:BottomWarningProps) {
  return (
    <div>
        {label}
        <Link to={to}>{buttonText}</Link>
    </div>
  )
}

export default BottomWarning