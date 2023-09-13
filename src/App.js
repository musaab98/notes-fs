import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { Component } from 'react';
import { NoteContent } from './components/NoteContent';
import { SideBar } from './components/SideBar';


function App() {
  return (
    <div className="App">
      <h1 className="header">Notes-fs App</h1>
      <header className="App-header">
        <SideBar />
        <div className="content"><NoteContent /></div>
      </header>
    </div>
  );
}

export default App;
