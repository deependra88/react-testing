type GreetProps = {
    name?: string
}

export const Greet1 = (props: GreetProps) => {
  return (
    <div>Hello {props.name}</div>
  )
}
