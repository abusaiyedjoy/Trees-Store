import GoogleMapReact from 'google-map-react';

// eslint-disable-next-line react/prop-types
const AnyReactComponent = ({ text }) => (
    <div style={{
        color: 'green',
        background: 'white',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
);

const SimpleMap = () => {
    const defaultProps = {
        center: { lat: 59.95, lng: 30.33 },
        zoom: 11
    };

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <GoogleMapReact
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="Trees Store"
                />
            </GoogleMapReact>
        </div>
    );
};

export default SimpleMap;
