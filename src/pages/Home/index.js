import HomeButton from '../../components/HomeButton';

import homeImg from '../../assets/snorlax.png';

import './styles.scss';


export default function Home() {
  return(
    <>
      <main className='contentContainer'>
        <section className='mainContent'>
          <span></span>
          <h1>Find all details about your favorite <span>pokémon</span>.</h1>

          <HomeButton />
        </section>

        <img src={homeImg} />
      </main>
    </>
  )
}
