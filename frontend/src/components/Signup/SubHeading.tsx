interface SubHeadingLabelProps{
    label:string;
}

function SubHeading({label}:SubHeadingLabelProps) {
  return (
    <div>{label}</div>
  )
}

export default SubHeading