interface InputProps{
    label:string;
    placeholder:string;
}

function Input({label,placeholder}:InputProps) {
  return (
    <div>
        {label}
        <input type="text" placeholder= {placeholder} />
    </div>
  )
}

export default Input