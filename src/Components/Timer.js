import React, {useState, useEffect} from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const startTimer = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
        return () => clearTimeout(startTimer)
    }, [])

    return (
        <div>
            <p>You have used {timer} seconds on this app.</p>
        </div>
    )
}

export default Timer
