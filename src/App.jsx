import { Header } from "./components/Header";
import {Search } from "./components/Search";
import { GlobalStyle } from "./styles/global";

export function App() {   
    return (
        <>
            <Header />
            <Search placeholder="Digite aqui sua busca..." />
            <GlobalStyle />
        </>
    )
}