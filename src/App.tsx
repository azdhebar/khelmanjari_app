import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.css'


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home/home';
import Schedule from './pages/Schedule/schedule';
import Game from './pages/Game/game';
import Result from './pages/Result/result';
import News from './pages/News/news';
import Rule from './pages/Rule/rule';
import Coordinator from './pages/Coordinator/coordinator';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact={true}>
              <Home />
            </Route>
            <Route path="/schedule" exact={true}>
              <Schedule />
            </Route>
            <Route path="/games" exact={true}>
              <Game />
            </Route>
            <Route path="/result" exact={true}>
              <Result/>
            </Route>
            
            <Route path="/news" exact={true}>
              <News/>
            </Route>

            
            <Route path="/rules" exact={true}>
              <Rule/>
            </Route>

            
            <Route path="/coordinators" exact={true}>
              <Coordinator/>
            </Route>
            

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
