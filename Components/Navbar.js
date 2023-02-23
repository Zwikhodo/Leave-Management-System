
import Image from 'next/image';

const Navbar = () => {
    return (  
        <nav>
            <div className="logo">
                <Image src="/logo2.png" width={190} height={78} />
            </div>
        </nav>
    );
}
 
export default Navbar;