interface InputProps{
    label:string;
    placeholder:string;
}

function Input({label,placeholder}:InputProps) {
  return (
    <div className="text-sm font-medium text-left py-2">
        {label}
        <input type="text" placeholder= {placeholder} className="w-full px-2 py-1 border rounded border-slate-200"/>
    </div>
  )
}

export default Input