import React from 'react';
import Baner from '../../components/Baner';
import Footer from '../../components/Footer';
import Forma from '../../components/Forma';
import Galerea from '../../components/Galerea';
import Header from '../../components/Header';

function Home() {
    return (
        <>
        <Header/>
        <main>
            <Baner/>
            <Galerea/>
            <Forma/>
        </main>
        <Footer/>
        </>
    );
}

export default Home;
