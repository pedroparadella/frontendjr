import Image from 'next/image';
import logo from '../../assets/logo-teste.png';
import Search from '../search/Search';

const Header = () => {
	return (
		<div className='flex flex-col items-center h-[261px] w-full lg:bg-fundo-busca'>
			<div className='w-full h-16 bg-gradient-to-r from-[#5F1478] to-[#AE276F]'>
				<div className='pl-6 pt-[14px] h-[37px] w-[192px]'>
					<Image src={logo} />
				</div>
			</div>
			<div className='lg:mt-20'>
				<Search />
			</div>
		</div>
	);
};

export default Header;
