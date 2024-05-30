function ConditionRender() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
    return (
        <ul>
            {animals.map(a => (
                a.startsWith('L') ? <li key={a} style={{ listStyle: "none", color: "white" }}>{a}</li> : null

            ))}
        </ul>
    )
}
export default ConditionRender