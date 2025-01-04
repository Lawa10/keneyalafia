import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet,IonPage } from '@ionic/react';
import { Route, Redirect, } from 'react-router';
import Hospital from '../Hospital/Hospital';
import Home from '../Home/Home';
import HopitalDetail from '../HopitalDetail/HopitalDetail';
import './Menu.css';

export default function Menu() {
  return (
    <IonTabs>
      <IonRouterOutlet >
        <Route path="/hospital" component={Hospital}/>
        <Route path="/home" component={Home} />
        <Route path="/detail" component={HopitalDetail} />
        <Redirect exact path="/" to="/home" />
      </IonRouterOutlet>

      <IonTabBar slot="bottom" className='nav'>
        
        <IonTabButton tab='home' href='/home'> 
          <img src="./public/icon2.png" alt="" />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        
       
        
        <IonTabButton  tab='localisation' href="/localisation">
        <img src="./public/icon3.png" alt="" />
          <IonLabel>Localisation</IonLabel>
        </IonTabButton>
         
        
        <IonTabButton tab='hospital'  href="/hospital">
        <img src="./public/icon1.png" alt="" />
          <IonLabel>Hopital</IonLabel>
        </IonTabButton>

        
      
        

     
      </IonTabBar>


    </IonTabs>
  )
}
