import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import '../../../public/assets/styles/index.css';
import '../../../public/assets/styles/tailwind.css';
import BgHeading from '@/Components/BgHeading';
export default function AdminLayout({ children }) {
    return (
    <div>
        <Navbar/>
        <div className="relative md:ml-64 bg-blueGray-50">

                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    {children}
                    <Footer/>
                </div>
        </div>
    </div>

    );
}
