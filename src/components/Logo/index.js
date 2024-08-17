import './Logo.css'; // Importe um arquivo de estilo específico para o logo, se necessário.

const Logo = () => {
    return (
        <div className="logoContainer">
            <img src="https://www.juscash.com.br/wp-content/themes/s3/assets/img/logo-white.svg" 
            alt="Logo" 
            className="logo" />
        </div>
    );
};

export default Logo;