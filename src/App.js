import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { Component } from 'react';
import { NoteContent } from './components/NoteContent';
import { NoteList } from './components/NoteList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NoteList />
        <div className="asdjke"><NoteContent /></div>
      </header>
    </div>
  );
}

export default App;
