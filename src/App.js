import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Import pages (we'll create these next)
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Onboarding from './pages/Onboarding';
import LearningPlan from './pages/LearningPlan';
import Dashboard from './pages/Dashboard';
import Course from './pages/Course';
import JoinTeam from './pages/JoinTeam';
import Competition from './pages/Competition';
import TeacherDashboard from './pages/TeacherDashboard';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/plan" element={<LearningPlan />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="/join-team" element={<JoinTeam />} />
          <Route path="/compete" element={<Competition />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
