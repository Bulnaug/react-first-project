import './css/App.css';
import './css/styles.css';
import Header from './Header/header';
import Content from './Content/content';
import Footer from './Footer/footer';

const App = (props) => {

  return (
      <div className="App">
        <Header />
        <Content 
          dialogs={props.appState.dialogs} 
          profile={props.appState.profile}
        />
        <Footer />
      </div>
  );
}

export default App;