import { createContext, useState } from 'react';

export const DataContext = createContext([]);

export const DataProvider = (props) => {
	const [res, setRes] = useState([]);

	return (
		<DataContext.Provider value={{ res, setRes }}>
			{props.children}
		</DataContext.Provider>
	);
};
