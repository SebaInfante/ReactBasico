import './Contact.css'

import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Aside from '../../components/Aside/Aside'
import Main from '../../components/Main/Main'

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Navbar></Navbar>
            <div className='container'>
                <Aside></Aside>
                <Main text='Contact Page' color="blue"></Main>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home