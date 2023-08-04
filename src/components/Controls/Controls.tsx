import {ChangeEvent, useContext, useState} from "react";
import {ProductContext} from "../../contexts/ProductContext/ProductContext.ts";

type sortType = 'desc' | 'asc'
function Controls() {
    const {sortCategory, findProducts} = useContext(ProductContext)
    const [sort, setSort] = useState<sortType>('asc');
    const [query, setQuery] = useState('');

    const onSelectType = (e: ChangeEvent<HTMLSelectElement>) => {
        setSort(e.target.value as sortType)
        console.log(e.target.value)
        sortCategory(sort);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        findProducts(query);
        setQuery('')
    };

    // @ts-ignore
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className={"m-4 flex items-center gap-x-8"}>
            <div className={"flex items-center gap-x-2"}>
                <label>Sort by:</label>
                <select value={sort} onChange={(e) => onSelectType(e)}>
                    {['desc', 'asc'].map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div className={"flex items-center gap-x-2"}>
                <input
                    className={"px-5 py-1 w-[250px] border border-gray-500 rounded-lg"}
                    type="text"
                    placeholder="Search..."
                    value={query} onChange={handleInputChange} />
                <button
                    className={"px-5 py-1 bg-black text-white rounded-lg"}
                    onClick={handleSearch}
                    onKeyDown={handleKeyPress}
                >Search</button>
            </div>
        </div>
    );
}

export default Controls;