import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBarMenu from './components/sidebar-menu';
import { SidebarInset, SidebarProvider } from './components/ui/sidebar';
import Dashboard from './pages/dashboard';
import RecordRoomAudio from './pages/record-room-audio';
import { Room } from './pages/room';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="h-screen w-screen">
          <SidebarProvider>
            <SideBarMenu />
            <SidebarInset className="w-full">
              <Routes>
                <Route element={<Dashboard />} index />
                <Route element={<Room />} path="/room/:roomId" />
                <Route
                  element={<RecordRoomAudio />}
                  path="/room/:roomId/audio"
                />
              </Routes>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
