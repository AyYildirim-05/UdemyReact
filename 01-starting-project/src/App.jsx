import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
          {/* 
            <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description} 
              image={CORE_CONCEPTS[0].image}
            /> 
            long way of setting the CoreConcept
            */ } 

            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
            {/*
            This is a much shorter way of setting up props  
            the prop field must have the same field name as the objects 
            */}

          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
