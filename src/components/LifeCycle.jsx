import React, {useEffect } from 'react'

const LifeCycle = () => {
    const [text, setText] = React.useState("");
    // componentDidMount
    useEffect(() => {
        console.log("Component mounted");
    }, []);

    // componentDidUpdate
    useEffect(() => {
        console.log("Component updated");
    }, [text]);

    // componentWillUnmount
    useEffect(() => {
        return () => {
            console.log("Component will unmount");
        };
    }, []);

    // montar, actualizar
    useEffect(() => {
        console.log("Component mounted or updated");
    });

    return (
        <div>
        <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        {text}
        </div>
    )
}

export default LifeCycle