import { IonPage,IonList,IonItem,IonLabel,IonHeader,IonGrid,IonRow,IonCol, IonContent } from '@ionic/react'
import React from 'react'
import './HopitalDetail.css'
export default function HopitalDetail() {
  return (
    <IonPage>
         <IonHeader>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                    <h1>Clinique Pasteur</h1>
                      <div className='ligne'>
        
                      </div>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonHeader>
        <IonContent className='content'>
        <IonList lines="full" className='container'>
        <IonItem >
          <IonLabel className='list'> Consultations</IonLabel>
        </IonItem>
        <br />
        <IonItem >
          <IonLabel className='list'>Echo</IonLabel>
        </IonItem>
        <br />
        <IonItem >
          <IonLabel className='list'>Analyses</IonLabel>
        </IonItem>
      </IonList>
        </IonContent>
      
    </IonPage>
    
  )
}
