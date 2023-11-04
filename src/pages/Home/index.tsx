import React from 'react';

import Logo from '../../assets/images/deco.png';
import Logo1 from '../../assets/store_logo/torra.png';
import Logo2 from '../../assets/store_logo/zee.png';
import Logo3 from '../../assets/store_logo/33.png';
import Logo4 from '../../assets/store_logo/44.png';
import Logo5 from '../../assets/store_logo/55.png';
import Logo6 from '../../assets/store_logo/66.png';

const storeData = [
  {
    id: 1,
    name: 'Torra Torra',
    logo: Logo1,
    cash: 11.5,
  },
  {
    id: 2,
    name: 'Zee Dog',
    logo: Logo2,
    cash: 21.7,
  },
  {
    id: 3,
    name: 'Lolja',
    logo: Logo3,
    cash: 14,
  },
  {
    id: 4,
    name: 'Uncle K',
    logo: Logo4,
    cash: 19,
  },
  {
    id: 5,
    name: 'Baw',
    logo: Logo5,
    cash: 13.5,
  },
  {
    id: 6,
    name: 'Osklen',
    logo: Logo6,
    cash: 10,
  },
]

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
            height: '20%',
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
            height: '60%',
            width: '100vw',
            backgroundColor: '#fff',
            padding: '1rem',
          }}
        >
          <div className='mb-2'>
            <p className="text-[#0A2121] text-lg ml-4">Veja algumas lojas parceiras</p>
          </div>


          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
          }}>

            {/* CARD STORE */}

            {
              storeData.map((store) => (
                <div
                  key={store.id}
                  className='h-24 w-24 border rounded'
                >
                  <div className='h-1/4' style={{
                    borderBottomWidth: '1px',
                    borderBottomColor: '#000',
                  }}>
                    <span className='text-center text-slate-900'>
                      <h1>{store.name}</h1>
                    </span>
                  </div>

                  <div className='h-2/4 p-1' >
                    <img src={store.logo} alt="Logo" className='h-full w-full object-contain' />
                  </div>

                  <div className='h-1/4 bg-[#02F67C] flex items-center justify-center'>
                    <span className='text-center'>
                      <h1 className='text-[#0A2121]'>{store.cash}% DCash</h1>
                    </span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div
          style={{
            height: '20%',
            width: '100vw',
            padding: '1rem',
            alignItems: 'center',
            justifyContent: 'space-around',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <button className="bg-[#02F67C] font-bold py-2 px-4 rounded w-full">
            <a className='text-[#0A2121]'
              href='https://dcash-wallet.netlify.app/'
            >
              Acessar minha carteira DCash
            </a>
          </button>

          <a href="" className='text-[#02F67C] mt-2'>
            Ver mais ofertas
          </a>
        </div>

      </div>
    </>
  )

}

export default Home;