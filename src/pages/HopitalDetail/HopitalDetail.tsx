import { IonPage,IonList,IonItem,IonLabel,IonHeader,IonGrid,IonRow,IonCol, IonContent } from '@ionic/react'
import React from 'react'
import { useHistory } from 'react-router';
import './HopitalDetail.css'
export default function HopitalDetail() {
  const history = useHistory();

  const golist =() => {

   history.push('/consultation')
 
  }
  
  const goecho =() => {

    history.push('/echo')
  
   }
   const goanalyse =() => {

    history.push('/analyse')
  
   }
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
        <IonContent className="transparent-content" style={{top:'40px'}}>
        <IonList lines="full" className='container'>
        <IonItem >
          <IonLabel className='list' onClick={golist}> Consultations</IonLabel>
        </IonItem>
        <br />
        <IonItem >
          <IonLabel className='list' onClick={goecho}>Echo</IonLabel>
        </IonItem>
        <br />
        <IonItem >
          <IonLabel className='list' onClick={goanalyse}>Analyses</IonLabel>
        </IonItem>
      </IonList>
        </IonContent>
      
    </IonPage>
    
  )
}
