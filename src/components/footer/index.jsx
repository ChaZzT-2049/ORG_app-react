import "./Footer.css"
const Footer = () =>{
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://www.facebook.com/bcarloseduardo.cortesfernandez.56'>
            <img src="/img/facebook.png" alt='Facebook' />
        </a>
        <a href='https://chazzt-2049.github.io/Portafolio/'>
            <img src="/img/twitter.png" alt='twitter' />
        </a>
        <a href='https://instagram.com/chazz_2217.exe?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D'>
            <img src="/img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por <br/> Carlos Eduardo</strong>
</footer>
}
export default Footer