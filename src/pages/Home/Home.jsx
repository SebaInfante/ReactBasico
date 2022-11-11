import './Home.css'
import Aside from '../../components/Aside/Aside'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Navbar></Navbar>
            <div className='container'>
                <Aside></Aside>
                <Main text='Home Page' color="green"></Main>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home