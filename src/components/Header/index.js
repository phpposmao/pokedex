import './styles.scss';

export default function Header() {
  return (
    <header className='headerContainer'>
      <div className='headerContent'>
        <h1>pokédex</h1>
        <nav>
          <a className='active'>Home</a>
          <a>Pokédex</a>
          <a>About</a>
        </nav>
      </div>
    </header>
  )
}
