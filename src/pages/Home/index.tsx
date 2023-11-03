import React from 'react';
// import Loading from '../../components/Loading';
import Logo from '../../assets/images/deco.png';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <div
        style={{

          height: '480px',
          width: '480px',

        }}
        className="flex flex-col"
      >
        {/* HEADER */}
        <div
          style={{

            width: '100vw',
            backgroundColor: '#1c2d34',

          }}
          className='flex flex-row items-center p-x-4 p-y-2'
        >
          <div
            style={{
              height: 80,
              width: 80,
            }}

            className=' pl-2 pt-2'
          >
            <img src={Logo} alt="Logo" />
          </div>
          <div
            className='flex flex-col'
          >
            <span
              style={{
                color: '#fff',
                fontSize: '2rem',
                fontWeight: 'bold',
                marginLeft: '2rem',
              }}
            >
              DCash
            </span>
            <span
              className='ml-8 text-white text-sm'
            >
              Seus cashbacks em 1 unico lugar
            </span>
          </div>

        </div>

        {/* <Loading /> */}

        {/* CONTENT */}
        <div
          style={{
            height: '60vh',
            width: '100vw',
            backgroundColor: '#fff',
            padding: '1rem',
          }}
        >

          <p className="text-slate-700 text-lg">Veja algumas lojas parceiras</p>

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            // height: '100%',
            // width: '100%',

          }}>

            {/* CARD STORE */}
            <div
              className='h-24 w-24 border-2 border-black bg-neutral-400 rounded'
            >
              <div className='h-1/4'>
                <span>
                  <h1>Nome Loja</h1>
                </span>
              </div>

              <div className='h-2/4 bg-orange-600' >
                <p>logo Loja</p>
              </div>

              <div className='h-1/4'>
                <span>
                  <h1>Nome Loja</h1>
                </span>
              </div>
            </div>
            {/* CARD STORE */}

            {/* CARD STORE */}
            <div
              className='h-24 w-24 border-2 border-black bg-neutral-400 rounded'
            >
              <div className='h-1/4'>
                <span>
                  <h1>Nome Loja</h1>
                </span>
              </div>

              <div className='h-2/4 bg-orange-600' >
                <p>logo Loja</p>
              </div>

              <div className='h-1/4'>
                <span>
                  <h1>Nome Loja</h1>
                </span>
              </div>
            </div>
            {/* CARD STORE */}

            {/* CARD STORE */}
            <div
              className='h-24 w-24 border-2 border-black bg-neutral-400 rounded'
            >
              <div className='h-1/4'>
                <span>
                  <h1>Nome Loja</h1>
                </span>
              </div>

              <div className='h-2/4 bg-orange-600' >
                <p>logo Loja</p>
              </div>

              <div className='h-1/4'>
                <span>
                  <h1>Nome Loja</h1>
                </span>
              </div>
            </div>
            {/* CARD STORE */}

            {/* CARD STORE */}
            <div
              className='h-24 w-24 border-2 border-black bg-neutral-400 rounded'
            >
              <div className='h-1/4'>
                <span>
                  <h1>Nome Loja</h1>
                </span>
              </div>

              <div className='h-2/4 bg-orange-600' >
                <p>logo Loja</p>
              </div>

              <div className='h-1/4'>
                <span>
                  <h1>Nome Loja</h1>
                </span>
              </div>
            </div>
            {/* CARD STORE */}

            {/* CARD STORE */}
            <div
              className='h-24 w-24 border-2 border-black bg-neutral-400 rounded'
            >
              <div className='h-1/4'>
                <span>
                  <h1>Nome Loja</h1>
                </span>
              </div>

              <div className='h-2/4 bg-orange-600' >
                <p>logo Loja</p>
              </div>

              <div className='h-1/4'>
                <span>
                  <h1>Nome Loja</h1>
                </span>
              </div>
            </div>
            {/* CARD STORE */}

            {/* CARD STORE */}
            <div
              className='h-24 w-24 border-2 border-black bg-neutral-400 rounded'
            >
              <div className='h-1/4'>
                <span>
                  <h1>Nome Loja</h1>
                </span>
              </div>

              <div className='h-2/4 bg-orange-600' >
                <p>logo Loja</p>
              </div>

              <div className='h-1/4'>
                <span>
                  <h1>Nome Loja</h1>
                </span>
              </div>
            </div>
            {/* CARD STORE */}








          </div>


          {/* LEFT SIDE */}
          {/* <div>
            <span>BALANCE</span>
          </div> */}

          {/* RIGHT SIDE */}
          {/* <div>
            <span>TRANSACTIONS</span>
          </div> */}
        </div>


      </div>
    </>
  )

}

export default Home;