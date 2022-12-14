function Wrapper(props) {
  const style = {
    backgroundColor: props.color,
    maxWidth: props.maxWidth,
    display: props.display,
    margin: props.margin,
  }
  return <div style={style}>{props.children}</div>
}

export default Wrapper
