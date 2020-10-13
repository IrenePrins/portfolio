class List extends React.Component {
    render(props) {
        return(
            <div>
                {props.map(item => (
                    <span key={item}>{item}</span>
                ))}
            </div>
        )
    }
}