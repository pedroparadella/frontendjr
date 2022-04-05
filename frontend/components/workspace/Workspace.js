const Workspace = () => {
	return (
		<div className='flex justify-center w-full pt-9'>
			<div className='flex justify-between w-[1056px]'>
				<div className='text-[#5F1478] text-[32px] h-10'>
					Resultado de busca
				</div>
				<input
					type='button'
					value='Novo Card'
					className='bg-[#E76316] w-[173px] h-12 text-white rounded-lg text-[18px]'
				/>
			</div>
		</div>
	);
};

export default Workspace;
