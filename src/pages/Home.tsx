import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol,IonInfiniteScroll } from '@ionic/react';
import './Home.css';
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [hopitals, sethopitals] = useState<string[]>([])

  function listhopital(){
 const nomhopital =[
    'pasteur',
    ' gabrielToure',
    'Hopital du Mali',
    // 'IOTA',
    // 'Point G',
    // 'ADEVIS'
  ];
sethopitals(nomhopital)
  }

  useEffect(()=>{
  listhopital()
  }, [] )

  return (
    <IonPage className='plan' >
        <IonHeader>
          <img src="./public/logo.png" alt="" />
        </IonHeader>

        <IonContent className="transparent-content">

          {/* hopital start */}
          <div>
          <IonGrid>
        <IonRow>
          <IonCol className='title'>Hopital</IonCol>
        </IonRow>
    

        <IonRow>
        {hopitals.map((hopital,index) =>
          <IonCol>
          <div className='cadre'>
           <img src="./public/hospital.png" className='hospital-img' />
           <h3>{hopital}</h3>
         </div>
          </IonCol>
        )}
    
        </IonRow>
        
      </IonGrid>
          </div>

          {/* hopital end */}

          {/* publiciter start */}
        
        <div className='publiciter'>
          <IonGrid>
            <IonRow>
            <IonCol className='title'>Pour vous</IonCol>
            </IonRow>

            <IonRow>
              <div className='pub-cadre'>
                <img src="./public/pub-img.png" className='pub-img'/>
              
              </div>
            </IonRow>
          </IonGrid>
        </div>
         
          {/* publiciter end */}

           {/* specialist start */}
           <div className='specialist'>
          <IonGrid>
        <IonRow>
          <IonCol className='title'>Spécialist</IonCol>
        </IonRow>
    

        <IonRow>
       
          <IonCol>
          <div className='cadre-spc'>
           <img src="./public/spc-img.png" className='spc-img' />
           <h4>Cardio</h4>
           <p className='nbre'>27 hôpitaux </p>
         </div>
          </IonCol>

          
      
    
        </IonRow>
        
      </IonGrid>
          </div>

          {/* specialist end */}
        </IonContent>
       
      
    </IonPage>
  );
};

export default Home;
