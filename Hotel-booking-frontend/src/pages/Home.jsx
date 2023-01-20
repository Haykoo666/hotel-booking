import Hotels from '../components/Hotels';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Search from '../components/Search';
import HomeBanner from "../components/banners/HomeBanner";
import About_us from './../components/About_us';

const Home = () => {
  return (
    <>
    <HomeBanner />
    <div className="container mb-5 mt-5">
      <hr />
        <About_us />
      <hr />
    </div>

    <Container>
      {/* <Row>
        <Search />
        <hr />
      </Row> */}
      <Row>
        <Hotels />
      </Row>
      
    </Container>
    </>
  );
};

export default Home;
