import Card from './components/Card';
import SpecialCard from './components/SpecialCard';
import './App.css';

function App() {
  return (
    <div className='card-container'>
      <SpecialCard 
        title={'Card title'}
        text={'Some quick example text to build on the card title and make up the bulk of the cards content.'}
        src={'../src/images/remove.svg'}
      />
      <Card 
        title={'Special title treatment'}
        text={'With supporting text below as a natural lead-in to additional content.'}
      />
    </div>
  );
}

export default App;
