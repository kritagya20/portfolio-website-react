import './Footer.css';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
        <small>Designed &amp; Developed by Kritagya Singh Chouhan  	&rarr; &copy; {year}</small>
    </footer>

  )
}

export default Footer
