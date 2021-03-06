import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import TodoPage from './Pages/TodoPage';
import Profile from './Pages/Profile';
import Pomodoro from './Pages/Pomodoro';
import Error from './Pages/Error';
import NavBar from './components/Navbar/Navbar';
import Signup from './Pages/Signup';
import HabitTracker from './Pages/HabitTracker';


function App() {
  return (
   
   <Router>
     <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ToDoPage" element={<TodoPage/>} />
          <Route path="/pomodoro" element={<Pomodoro/>} />
          <Route path="/Habit-tracker" element={<HabitTracker/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/profile/:username" element={<Profile/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
    </Router>
  );
}

export default App;