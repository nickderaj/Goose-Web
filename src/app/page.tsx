import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

export default async function Index() {
    return (
        <div className="flex-1 w-full flex flex-col gap-20 items-center">
            <Navbar />
            <Footer />
        </div>
    );
}
