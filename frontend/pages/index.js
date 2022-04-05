import Head from 'next/head';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import edit from '../assets/Icon-edit.png';
import trash from '../assets/Icon-trash.png';
import Header from '../components/header/Header';
import Workspace from '../components/workspace/Workspace';
import { DataContext } from '../provider/dataProvider';

const Home = (data) => {
	const { res, setRes } = useContext(DataContext);

	useEffect(() => {
		setRes(data.catGiphys.data);
	}, [data]);

	return (
		<div>
			<Head>
				<title>Desafio Impar</title>
				<meta name='description' content='Desafio empresa impar' />
			</Head>
			<Header />
			<Workspace />
			<div className='flex justify-center w-full pt-9'>
				<div className='flex flex-wrap w-[1056px]'>
					{res.map((each, index) => {
						return (
							<div key={index} className='mb-7'>
								<div className='w-[234px] h-[224px] rounded-t-lg bg-white drop-shadow mx-3 '>
									<Image
										src={each.images.original.url}
										width={300}
										height={180}
										className='rounded-t-lg'
									/>
									<h5 className='text-center text-[16px] text-[#263238]'>
										{each.title}
									</h5>
								</div>
								<div className='flex justify-around w-[234px] h-[43px] bg-white rounded-b-lg mx-3'>
									<button
										type='button'
										value='Excluir'
										className='flex items-center text-[15px] text-[#263238]'>
										<Image src={trash} />
										<span className='opacity-[52%] ml-2'>Excluir</span>
									</button>
									<button
										type='button'
										value='Excluir'
										className='flex items-center text-[15px] text-[#263238] '>
										<Image src={edit} />
										<span className='opacity-[52%] ml-2'>Editar</span>
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;

export async function getServerSideProps() {
	let catGiphys = await fetch(
		'https://api.giphy.com/v1/gifs/search?q=cats&api_key=im1W89xJPwYw9XkaiNxMYCS2AZGPsOzp&limit=16',
	);
	catGiphys = await catGiphys.json();
	return { props: { catGiphys } };
}
