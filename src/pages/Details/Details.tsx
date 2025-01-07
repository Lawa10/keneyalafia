import { IonContent, IonPage,IonHeader,IonToolbar,IonButtons,IonBackButton,IonGrid,IonRow,IonCol, IonItem, IonLabel, IonIcon, IonPopover, IonList,IonSegment,IonSegmentButton,IonSegmentView, IonSegmentContent} from '@ionic/react'
import React from 'react'
import './Details.css'
export default function Details() {
  return (
  <IonPage className='plan'>
     <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        
        <IonGrid>
          <IonRow>
            <IonCol style={{ textAlign: 'center',  justifyContent: 'center' }}>
              <h1>Pasteur</h1>
            </IonCol>
          </IonRow>
        </IonGrid>
        {/* <div className="ligne"></div> */}
      </IonToolbar>
    </IonHeader>
    <IonContent className="transparent-content">
        {/* titre description */}
        <div className='titre-cadre'>
        <div className='cont'>
        <h1 className='title'>Titre</h1>
        <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        </div>

        {/* prix */}
 

      <br />
        
        <div className='prix'> 
        <div className='cadre-prix'>
         <h2>Prix</h2>
        </div>

        <br />
        <br />
        <br />
        <br />
           

        <IonSegment value="first">

        <IonSegmentButton value="amo" contentId="amo">
          <IonLabel>AMO</IonLabel>
        </IonSegmentButton>

        <IonSegmentButton value="normal" contentId="normal">
          <IonLabel>Normal</IonLabel>

        </IonSegmentButton>
      </IonSegment>

      <IonSegmentView>
        <IonSegmentContent id="amo">3000 cfa</IonSegmentContent>
        <IonSegmentContent id="normal">6000 cfa</IonSegmentContent>
      </IonSegmentView>

        </div>

{/* avertissement  */}


<div className='aver'>
<img src="./public/attention.png" alt="" className='att'/>
<p className='texte'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus incidunt quia eaque necessitatibus quis dicta! Pariatur possimus porro adipisci iusto, fugiat expedita, sint animi perspiciatis aliquam repellendus, ipsam molestiae.
</p>
</div>

    </IonContent>
  </IonPage>
  )
}
