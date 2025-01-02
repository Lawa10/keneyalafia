import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { playCircle, radio, library, search } from 'ionicons/icons';
import Hospital from '../Hospital/Hospital';
import './Menu.css';

export default function Menu() {
  return (
    <IonReactRouter>
    <IonTabs >
      <IonRouterOutlet >
        <Redirect exact path="/" to="/home" />
        {/*
        Use the render method to reduce the number of renders your component will have due to a route change.

        Use the component prop when your component depends on the RouterComponentProps passed in automatically.
      */}
        <Route path="/hospital" render={() => <Hospital />} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom" className='nav'>
        <IonTabButton  href="/home">
          <img src="./public/icon2.png" alt="" />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton  href="/localisation">
        <img src="./public/icon3.png" alt="" />
          <IonLabel>Localisation</IonLabel>
        </IonTabButton>

        <IonTabButton  href="/hospital">
        <img src="./public/icon1.png" alt="" />
          <IonLabel>Hopital</IonLabel>
        </IonTabButton>

        

     
      </IonTabBar>


    </IonTabs>
  </IonReactRouter>
  )
}
