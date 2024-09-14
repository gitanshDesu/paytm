interface HeadingLabelProps{
    label:string;
}

function Heading({label}:HeadingLabelProps) {
  return (
    <div className="text-bold pt-6 font-bold text-4xl">
        {label}
    </div>
  )
}

export default Heading