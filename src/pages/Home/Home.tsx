import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol,IonInfiniteScroll } from '@ionic/react';
import './Home.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Home: React.FC = () => {
  const [hopitals, sethopitals] = useState<string[]>([])
  const [specialist, setspecialist] = useState <string[]>([])
  const history = useHistory()

  const godetail =() =>{
    history.push('./detail')
  }

  const gohopi =() =>{
    history.push('./listehopi')
  }

  const goconsulte =() =>{
    history.push('./listeconsulte')
  }

  function listhopital(){
  const nomhopital =[
    'Pasteur',
    'GabrielToure',
    'Hôpital du Mali',
    // 'IOTA',
    // 'Point G',
    // 'ADEVIS'
  ];
sethopitals(nomhopital)
  }

  function listspecialist(){
    const nomspecialist =[
      'Médicales',
      'Chirurgicales',
      'Pédiatriques',
      

    ]
    setspecialist(nomspecialist)
  }
 
  useEffect(()=>{
  listhopital()
  listspecialist()
  }, [] )

  return (
    <IonPage className='plan' >
        {/* <IonHeader> */}
          <img src="./public/logo.png" alt="" className='logo'/>
        {/* </IonHeader> */}

        <IonContent className="transparent-content">

          {/* hopital start */}
          <div>
          <IonGrid>
        <IonRow>
          <IonCol className='title'>Hôpital</IonCol>
        </IonRow>
    

        <IonRow>
        {hopitals.map((hopital,index) =>
          <IonCol>
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
    <IonRow className='custom-row'>
      <IonCol className='title'>Consultations</IonCol>
      <IonCol className='title'></IonCol>
      <IonCol className='title' onClick={goconsulte}>voir plus</IonCol>
    </IonRow>

    <IonRow>
      {specialist.map((specialists, index) => (
        <IonCol key={index} onClick={gohopi}>
          <div className='cadre-spc'>
            <img src="./public/spc-img.png"  alt="specialist" />
            <h4>{specialists}</h4>
            <p className='nbre'>27 hôpitaux</p>
          </div>
        </IonCol>
      ))}
    </IonRow>
  </IonGrid>
</div>
{/* specialist end */}

        </IonContent>
       
      
    </IonPage>
  );
};

export default Home;
