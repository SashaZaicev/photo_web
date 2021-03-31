import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent: React.FC<any> = ({text}) => <div>{text}</div>;

class SimpleMap extends React.Component<any> {
    static defaultProps = {
        center: {
            lat: 53.902227,
            lng: 27.561807
        },
        zoom: 15
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{height: '80vh', width: '70%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key:"AIzaSyA_ynGwhNnciutLcSuOEgAPmzXmIoGsnSY"}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={53.902227}
                        lng={27.561807}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;