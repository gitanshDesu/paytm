interface HeadingLabelProps{
    label:string;
}

function Heading({label}:HeadingLabelProps) {
  return (
    <div>
        {label}
    </div>
  )
}

export default Heading