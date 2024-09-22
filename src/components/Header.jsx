import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
};

Header.propTypes = {
  title: PropTypes.string.isRequired, // El título debe ser una cadena
};

export default Header;
