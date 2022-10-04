import './index.css'

function Banner () {
  return (
    <header className={ 'banner' }> 
      <img 
        src={ '/imagens/banner.png' }
        alt="banner principal da pagina"
        className='banner__img'
      />
    </header>

  )
}

export default Banner;