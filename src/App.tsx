import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import { BarberLayout } from "@/components/barber/BarberLayout";
import { UserLayout } from "@/components/user/UserLayout";
import BarberDashboard from "./pages/BarberDashboard";
import BarberAppointments from "./pages/BarberAppointments";
import BarberStaff from "./pages/BarberStaff";
import BarberServices from "./pages/BarberServices";
import BarberProducts from "./pages/BarberProducts";
import BarberDeals from "./pages/BarberDeals";
import BarberGallery from "./pages/BarberGallery";
import BarberFinance from "./pages/BarberFinance";
import BarberWorkingHours from "./pages/BarberWorkingHours";
import BarberNotifications from "./pages/BarberNotifications";
import BarberCustomers from "./pages/BarberCustomers";
import BarberSettings from "./pages/BarberSettings";
import UserHome from "./pages/UserHome";
import SalonDetail from "./pages/SalonDetail";
import UserProducts from "./pages/UserProducts";
import UserBookings from "./pages/UserBookings";
import UserProfile from "./pages/UserProfile";
import UserNotifications from "./pages/UserNotifications";
import UserChat from "./pages/UserChat";
import UserSearch from "./pages/UserSearch";
import UserRewards from "./pages/UserRewards";
import AppointmentBooking from "./pages/AppointmentBooking";
import AppointmentDetail from "./pages/AppointmentDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import AccountSettings from "./pages/AccountSettings";
import HelpCenter from "./pages/HelpCenter";
import SavedAddresses from "./pages/SavedAddresses";
import BookingHistory from "./pages/BookingHistory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/user" replace />} />
          
          {/* Barber Admin Routes */}
          <Route path="/barber" element={<BarberLayout><BarberDashboard /></BarberLayout>} />
          <Route path="/barber/dashboard" element={<BarberLayout><BarberDashboard /></BarberLayout>} />
          <Route path="/barber/appointments" element={<BarberLayout><BarberAppointments /></BarberLayout>} />
          <Route path="/barber/staff" element={<BarberLayout><BarberStaff /></BarberLayout>} />
          <Route path="/barber/services" element={<BarberLayout><BarberServices /></BarberLayout>} />
          <Route path="/barber/products" element={<BarberLayout><BarberProducts /></BarberLayout>} />
          <Route path="/barber/deals" element={<BarberLayout><BarberDeals /></BarberLayout>} />
          <Route path="/barber/gallery" element={<BarberLayout><BarberGallery /></BarberLayout>} />
          <Route path="/barber/finance" element={<BarberLayout><BarberFinance /></BarberLayout>} />
          <Route path="/barber/hours" element={<BarberLayout><BarberWorkingHours /></BarberLayout>} />
          <Route path="/barber/notifications" element={<BarberLayout><BarberNotifications /></BarberLayout>} />
          <Route path="/barber/customers" element={<BarberLayout><BarberCustomers /></BarberLayout>} />
          <Route path="/barber/settings" element={<BarberLayout><BarberSettings /></BarberLayout>} />
          
          {/* User Routes */}
          <Route path="/user" element={<UserLayout><UserHome /></UserLayout>} />
          <Route path="/user/salon/:id" element={<UserLayout><SalonDetail /></UserLayout>} />
          <Route path="/user/products" element={<UserLayout><UserProducts /></UserLayout>} />
          <Route path="/user/bookings" element={<UserLayout><UserBookings /></UserLayout>} />
          <Route path="/user/book-appointment" element={<UserLayout><AppointmentBooking /></UserLayout>} />
          <Route path="/user/appointment-detail" element={<UserLayout><AppointmentDetail /></UserLayout>} />
          <Route path="/user/profile" element={<UserLayout><UserProfile /></UserLayout>} />
          <Route path="/user/profile/account" element={<UserLayout><AccountSettings /></UserLayout>} />
          <Route path="/user/profile/help" element={<UserLayout><HelpCenter /></UserLayout>} />
          <Route path="/user/profile/addresses" element={<UserLayout><SavedAddresses /></UserLayout>} />
          <Route path="/user/profile/history" element={<UserLayout><BookingHistory /></UserLayout>} />
          <Route path="/user/notifications" element={<UserLayout><UserNotifications /></UserLayout>} />
          <Route path="/user/chat" element={<UserLayout><UserChat /></UserLayout>} />
          <Route path="/user/search" element={<UserLayout><UserSearch /></UserLayout>} />
          <Route path="/user/rewards" element={<UserLayout><UserRewards /></UserLayout>} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
