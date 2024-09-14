import React from "react";

interface InputProps{
    label:string;
    placeholder:string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void
}

function Input({label,placeholder,onChange}:InputProps) {
  return (
    <div className="text-sm font-medium text-left py-2">
        {label}
        <input onChange={onChange} type="text" placeholder= {placeholder} className="w-full px-2 py-1 border rounded border-slate-200"/>
    </div>
  )
}

export default Input