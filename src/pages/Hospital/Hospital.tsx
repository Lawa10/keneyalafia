import { IonCol, IonGrid, IonHeader, IonPage, IonRow } from '@ionic/react';
import React from 'react';
import './Hospital.css'; // Fichier CSS pour le style

export default function Hospital() {
  return (
    <IonPage>
      <IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
            <h1>Liste des Hôpitaux</h1>
              <div className='ligne'>

              </div>
            </IonCol>
           

          </IonRow>
        </IonGrid>
      </IonHeader>
    </IonPage>
  );
}
