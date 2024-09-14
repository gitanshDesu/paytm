import { Link } from "react-router-dom";

interface BottomWarningProps{
    label:string;
    to:string;
    buttonText:string
}

function BottomWarning({label,to,buttonText}:BottomWarningProps) {
  return (
    <div className="py-2 text-sm flex justify-center">
        {label}
        <Link className="pointer underline pl-1 cursor-pointer" to={to}>{buttonText}</Link>
    </div>
  )
}

export default BottomWarning