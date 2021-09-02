import React from 'react'
const RippleButton = ({ children, onClick, color,isSelected, setIsSelected }) => {
    const [coords, setCoords] = React.useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = React.useState(false);

    React.useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 300);
        } else setIsRippling(false);
    }, [coords]);

    React.useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);

    return (
        <button
            className="ripple-button"
            style={{ 'background-color': color }}
            onClick={e => {
                setTimeout(() => setIsSelected(true), 300);
                const rect = e.target.getBoundingClientRect();
                setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                onClick && onClick(e);
            }}
        >
            <div style={{ opacity: isSelected ? 0.5 : 1 }} className="image">
            <h1 className="title">{isSelected ? '49 %' : children}</h1>
            </div>
            {/* <img alt="" style={{ opacity: isSelected ? 0.5 : 1 }} src="https://images2.minutemediacdn.com/image/fetch/w_500,h_500,c_fit/https%3A%2F%2Fdairylandexpress.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1328249149.jpeg"></img> */}

            {
                isRippling ? (
                    <span
                        className="ripple"
                        style={{
                            background: color,
                            left: coords.x,
                            top: coords.y
                        }}
                    />
                ) : (
                    ''
                )
            }

        </button >
    );
};

export default RippleButton