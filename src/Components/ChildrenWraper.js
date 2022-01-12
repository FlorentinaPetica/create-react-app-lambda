import React, {useState} from 'react'

const ChildrenWraper = (props) => {
    const {children} = props
    const [bg, setBg] = useState('none')
    const appStyles = {
        background: `${bg}`,
      };
    const randomColor = "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    const onMouseEnter = () => {
        setBg(randomColor)
    }
    const onMouseLeave = () => {
        setBg('none')
    }
    return (
        <div className="ChildrenWraper" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
        style={appStyles}>
        {children}
        </div>
    )
}

export default ChildrenWraper
