import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import SubmitTicket from './components/client/SubmitTicket';
import TrackTickets from './components/client/TrackTickets';
import TicketDetail from './components/client/ticketdetail';
import TicketHistory from './components/client/TicketHistory';
import ManageTickets from './components/helpdesk/ManageTickets';
import TechnicianTicketDetail from './components/helpdesk/TechnicianTicketDetail';
import HelpdeskDashboard from './components/helpdesk/HelpdeskDashboard';
import Notifications from './components/helpdesk/Notifications';
import SuperviseTickets from './components/admin/SuperviseTickets';
import ManageUsers from './components/admin/ManageUsers';
import AdminDashboard from './components/admin/AdminDashboard';
import Reports from './components/admin/Reports';
import ManageKnowledgeBase from './components/admin/ManageKnowledgeBase';

import './i18n/i18n';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/unauthorized" element={<div>Accès non autorisé</div>} />
          <Route
            path="/client"
            element={
              <ProtectedRoute allowedRoles={[3]}>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="submit-ticket" element={<SubmitTicket />} />
            <Route path="track-tickets" element={<TrackTickets />} />
              <Route path="ticket-detail/:id" element={<TicketDetail />} />
            <Route path="TicketHistory" element={<TicketHistory />} />
          
            <Route index element={<Navigate to="track-tickets" />} />
          </Route>

          <Route
            path="/helpdesk"
            element={
              <ProtectedRoute allowedRoles={[2]}>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<HelpdeskDashboard />} />
            <Route path="manage-tickets" element={<ManageTickets />} />
            <Route path="/helpdesk/tickets/:id" element={<TechnicianTicketDetail />} />
            <Route path="notifications" element={<Notifications />} />
            <Route index element={<Navigate to="dashboard" />} />
          </Route>

          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={[1]}>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="AdminDashboard" element={<AdminDashboard />} />
            <Route path="supervise-tickets" element={<SuperviseTickets />} />
            <Route path="manage-users" element={<ManageUsers />} />
            <Route path="manage-knowledge-base" element={<ManageKnowledgeBase />} />
            <Route index element={<Navigate to="AdminDashboard" />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;