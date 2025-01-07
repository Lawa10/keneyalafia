import React, { useEffect, useState } from 'react'
import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonPage,IonHeader,IonGrid,IonRow,IonCol,IonSearchbar,IonToolbar,IonButtons,IonBackButton} from '@ionic/react'
import './Analyse.css'

interface ListItem {
    title: string;
    description: string;
  }
export default function Analyse() {
   const [item, setItem] = useState<ListItem[]>([])
    
        function ListConsult(){
            const items= [
                {
                  title: 'List item',
                  description: 'Supporting line text lorem ipsum dolor sit amet, consectetur.'
                },
                {
                    title: 'List item',
                    description: 'Supporting line text lorem ipsum dolor sit amet, consectetur.'
                  },
                  {
                    title: 'List item',
                    description: 'Supporting line text lorem ipsum dolor sit amet, consectetur.'
                  },
                   
              ];
              setItem(items)
    
        }
        useEffect(() =>{
            ListConsult()
         },[])
        
      return (
        <IonPage>
             <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        
        <IonGrid>
          <IonRow>
            <IonCol style={{ textAlign: 'center',  justifyContent: 'center' }}>
              <h1>Pasteur Echo</h1>
            </IonCol>
          </IonRow>
        </IonGrid>
        {/* <div className="ligne"></div> */}
      </IonToolbar>
    </IonHeader>
    
        
            <IonContent className='container'>
    
          <IonSearchbar animated={true} placeholder="Rechercher" ></IonSearchbar>
        <br />
        <IonList>
      {item.map((items, index) => (
        <IonItem  key={index}>
          <div className="u">
          <i className="fas fa-pen" style={{ marginRight: '10px', fontSize: '25px'}}></i>
          <IonLabel>
            <h2>{items.title}</h2>
            <p>{items.description}</p>
          </IonLabel>
          </div>
          
        </IonItem>
      ))}
    </IonList>
    
        
      
           
        
       
    
            </IonContent>
     
    
    
        </IonPage>
      )
}
