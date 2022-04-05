import Image from 'next/image';
import { useContext, useState } from 'react';
import lupa from '../../assets/lupa.png';
import { DataContext } from '../../provider/dataProvider';

const Search = () => {
	const [formInputs, setFormInputs] = useState({});
	const [searchTerm, setSearchTerm] = useState('cats');
	const { setRes } = useContext(DataContext);

	const handleInputs = (event) => {
		const { name, value } = event.target;
		setFormInputs({ ...formInputs, [name]: value });
	};

	const search = async (event) => {
		event.preventDefault();
		let giphys = await fetch(
			`https://api.giphy.com/v1/gifs/search?q=${formInputs.searchTerm}&api_key=bLCdCpBlUB3zXvpXDlxocARhV919eZvP&limit=16`,
		);
		giphys = await giphys.json();
		setRes(giphys.data);
		setSearchTerm(formInputs.searchTerm);
	};

	return (
		<form onSubmit={search} className='flex'>
			<input
				placeholder='Digite aqui sua busca...'
				type='text'
				onChange={handleInputs}
				name='searchTerm'
				className='outline-none pl-7 h-[75px] w-screen lg:w-[980px] lg:rounded-l-lg placeholder-[#757575] placeholder:text-[24px]'
			/>
			<button className='bg-white h-[75px] lg:rounded-r-lg  pr-6 '>
				<Image src={lupa} />
			</button>
		</form>
	);
};

export default Search;
