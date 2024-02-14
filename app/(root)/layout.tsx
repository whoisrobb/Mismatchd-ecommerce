import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import { ReactNode } from 'react';

type LobbyLayoutProps = {
    children: ReactNode;
}
const LobbyLayout: React.FC<LobbyLayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col items-center'>
        <Navbar />
        <section>
            {children}
        </section>
        <Footer />
    </div>
  )
};

export default LobbyLayout;