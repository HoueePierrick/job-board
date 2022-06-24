const description = (ele1, ele2, ele3) => {
    return `${ele1} - ${ele2} - ${ele3}`
}

const Job = (props) => {
    const classNamed=["Job", props.classIs]
    return (
        <div className={classNamed.join(" ")}>
            <div>{props.title}</div>
            <div>{description(props.contractType, props.country, props.city)}</div>
        </div>
    )
}

export default Job;