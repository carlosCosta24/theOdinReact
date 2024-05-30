function Button({ text, color, fontSize }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + "px"

    }

    return <button style={buttonStyle}>{text}</button>

}
Button.defaultProps = {
    text: "click me ",
    color: "blue",
    fontSize: 12
}
export default Button

