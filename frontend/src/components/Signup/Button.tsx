interface ButtonProps{
    label:string;
    onClick?: ()=>void;
}

function Button({label,onClick}:ButtonProps) {
  return (
    <div>
        <button onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button