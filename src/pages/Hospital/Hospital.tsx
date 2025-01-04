import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow,IonItem,IonAvatar, IonLabel,IonList,IonSearchbar} from '@ionic/react';
import React from 'react';
import './Hospital.css'; // Fichier CSS pour le style
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'; 

export default function Hospital() {
     const [hopitals, sethopitals] = useState<string[]>([])
     const [specialist, setspecialist] = useState <string[]>([])
     const  history = useHistory()

     const godetail = () =>{
        history.push('/detail')

     }
    function listhopital(){
        const nomhopital =[
          'Pasteur',
          'GabrielToure',
          'Hôpital du Mali',
          'IOTA',
          'Point G',
          'ADEVIS'
        ];
      sethopitals(nomhopital)
        }
        useEffect(()=>{
            listhopital()
            }, [] )
  return (
    <IonPage className='plan'>
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

      <IonContent className="transparent-content">
        <br />
        <br />
      <IonSearchbar animated={true} placeholder="Rechercher" ></IonSearchbar>
       {/* hopital start */}
       <div>
          <IonGrid> 

        <IonRow>
        {hopitals.map((hopital,index) =>
          <IonCol size="4">
          <div className='cadre' onClick={godetail}>
           <img src="./public/hospital.png" className='hospital-img' />
           <h3>{hopital}</h3>
         </div>
          </IonCol>
        )}
        </IonRow>
        
      </IonGrid>
          </div>

          {/* hopital end */}
    
      </IonContent>
    </IonPage>
  );
}
