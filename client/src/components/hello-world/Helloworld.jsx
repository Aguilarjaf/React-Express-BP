import React, {useState, useEffect} from 'react'

function Helloworld() {
    const [state, setState] = useState(null);

    useEffect(() => {
        fetch("/helloworld")
            .then((res) => res.json())
            .then((data) => setState(data.message));
    }, [])

    return (
        <div>
            <h1>{state}</h1>
        </div>
    )
}

export default Helloworld
