import React from 'react';
import "./App.css";
import Header from "./Header";
import AddCotact from "./AddContact";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

function App() {
  return (
    <div>
      <Header/>
      <AddCotact/>
      <ContactList/>
    </div>
  );
}

export default App;
