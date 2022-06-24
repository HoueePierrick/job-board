import './App.css';
import Job from './Job';

function App() {
  return (
    <div>
      <header>
        <div>The Job Board</div>
      </header>
      <main>
        <div>
        <Job classIs="Red" title="Full Time Sales Associate - Sydney Boutique" contractType="CDI" country="Australie" city="Sydney"/>
        <Job classIs="Green" title="Agent de Sécurité - Pantin" contractType="CDI" country="France" city="Pantin"/>
        <Job classIs="Yellow" title="Responsable d'Atelier (H/F)" contractType="CDD" country="France" city="Paris"/>
        <Job classIs="Blue" title="Chef de Projets" contractType="CDD" country="France" city="Paris"/>
        <Job classIs="Beige" title="Développeur React.js" contractType="CDI" country="France" city="Paris"/>
        <Job classIs="Red" title="Sales Associate Stockholm" contractType="CDI" country="Suède" city="Stockholm"/>
        <Job classIs="Green" title="Vendeur/se - Crans Montana" contractType="CDI" country="Suisse" city="Crans-Montana"/>
        <Job classIs="Yellow" title="CRM & Data Quality Analyst" contractType="CDI" country="USA" city="New York"/>
        <Job classIs="Blue" title="Infirmier (H/F)" contractType="CDI" country="France" city="Pantin"/>
        </div>
      </main>
      <footer>
        <p>
          <span>Made with </span>
          <span className='Bold'>React</span>
          <span> at </span>
          <span className='Bold'>Le Reacteur</span>
          <span> By </span>
          <span className='Bold'>Nono</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
