import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar';

const Header = ()=>{
    const center = [
        'flex', 'justify-center', 'items-center'
    ];
    return(
        <header className='bg-gray-900 py-2'>
            <nav className='flex justify-between items-center max-w-[1300px] gap-4 mx-auto px-4'>
                <div className={`${center.join(' ')} md:grow gap-4`}>
                    <div className={`${center.join(' ')} gap-4 lg:flex-row-reverse`}>
                        <div className={`gap-2 cursor-pointer hover:bg-gray-800 p-1 rounded-sm ${center.join(' ')} cursor-pointer text-white`}>
                            <FontAwesomeIcon icon={faBars} />
                            <strong className='hidden lg:block'>Menu</strong>
                        </div>
                        <h1 className='cursor-pointer bg-amber-400 hover:bg-amber-500 p-1 font-bold rounded-sm'>MH</h1>
                    </div>
                    <SearchBar></SearchBar>
                    <h1 className='cursor-pointer p-1 font-bold rounded-sm text-white hover:bg-gray-800 hidden lg:block'>MH<span className='text-blue-400'>Pro</span></h1>
                    <span className='border border-gray-600 h-10 hidden md:block'></span>
                    <div className={`gap-2 ${center.join(' ')} cursor-pointer hover:bg-gray-800 p-1 rounded-sm text-white hidden lg:block`}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path fill="#ffffff" d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/></svg>
                        <strong>Watchlist</strong>
                    </div>
                </div>
                <div className={`${center.join(' ')} gap-4`}>
                    <span className="md:hidden pr-2 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></span>
                    <strong className='text-white cursor-pointer hover:bg-gray-800 p-1 rounded-sm'>Sign in</strong>
                    <div className={`text-white gap-1 cursor-pointer hover:bg-gray-800 p-1 rounded-sm ${center.join(' ')} hidden lg:block`}><span>EN</span><svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#ffffff" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></div>
                    <div className='lg:hidden cursor-pointer bg-amber-400 hover:bg-amber-500 p-1 font-bold rounded-sm'>Use app</div>
                </div>
            </nav>
        </header>
    )
};
export default Header;