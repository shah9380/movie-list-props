
const SearchBar = ()=>{
    const center = [
        'flex', 'justify-center', 'items-center'
    ];
    return(
        <div className={`${center.join(' ')} hidden md:flex box-border rounded-md bg-white grow h-fit py-1 hover:border-2 border-blue-400`}>
            <select className="h-[100%] w-16 text-center border-r border-gray-400 rounded-l-lg font-medium outline-none">
                <option>All</option>
                <option>Titles</option>
                <option>TV Episodes</option>
                <option>Celebs</option>
                <option>Companies</option>
                <option>Keywords</option>
                <option>Advanced Search</option>
            </select>
            <input placeholder="Search IMDb" className="h-[100%] border-none outline-none px-4 grow"></input>
            <span className="pr-2 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#000205" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></span>
        </div>
    )
};

export default SearchBar;