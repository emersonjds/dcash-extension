import React from 'react';
import Loading from '../../components/Loading';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
      }}>
        {/* HEADER */}
        <div
          style={{
            height: '10vh',
            width: '100vw',
            backgroundColor: '#000',
          }}
        >
          <span
            style={{
              color: '#fff',
              fontSize: '3rem',
              fontWeight: 'bold',
              marginLeft: '2rem',
            }}
          >
            Titulo - DCash
          </span>
        </div>

        <Loading />

        {/* CONTENT */}
        <div
          style={{
            height: '60vh',
            width: '100vw',
            backgroundColor: '#fff',
          }}
        >



        </div>


      </div>
    </>
  )

}

export default Home;