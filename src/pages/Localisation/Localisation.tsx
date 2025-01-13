import React, { useEffect, useState } from 'react';
import './Localisation.css';
import { IonContent, IonPage } from '@ionic/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Localisation() {
  const position = [51.505, -0.09];
  const [renderMap, setRenderMap] = useState(false);

  useEffect(() => {
    setTimeout(() => setRenderMap(true), 100); // Donne le temps à Ionic de charger le conteneur
  }, []);

  return (
    <IonPage>
      <IonContent className="transparent-content">
        {renderMap && (
          <MapContainer
            style={{ height: '100vh', width: '100%' }}
            center={position}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
            </Marker>
          </MapContainer>
        )}
      </IonContent>
    </IonPage>
  );
}
