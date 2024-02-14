import Container from '@/components/layouts/container';
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
        <section className='w-full flex-grow max-w-[1440px]'>
            {children}
        </section>
        <Footer />
    </div>
  )
};

export default LobbyLayout;