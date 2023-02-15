import logo from './logo.svg';
import './App.css';

function App() {
  return (

<>

<div class="buttons">
  <button class="duplicateButton">Duplicate</button>
  <button class="deleteButton">Delete</button>
  <button class="changeNameButton">Change Name</button>
</div>

<div class="wrapper">
  
    <img class="image" src="https://cdn.dribbble.com/users/902228/screenshots/5813718/media/539d18b06ff32a69bb74f95b78cf6602.jpg?compress=1&resize=400x300"/>
  
  <div class="header">
    <h1>Charizard</h1>
  </div>
  
  <div class="details">
    <details>
      <summary>About this Pokemon</summary>
      <p>
        Charizard is a Fire/Flying type Pokémon introduced in Generation 1. It is known as the Flame Pokémon. Charizard has two Mega Evolutions available in its X & Y forms. In in Mega evolved form, Charizard is arguably the most powerful pokemon
      </p>
    </details>
    
  </div>
  
</div>  
</>
  );
}

export default App;
