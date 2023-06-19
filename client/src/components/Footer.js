// import React from 'react';
// import './Footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// export default function Footer() {
//   const [showModal, setShowModal] = useState(false);

//   const handleAboutClick = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <>
  
//       <footer className="footer-distributed">

//         <div className="footer-right">

//           <a href="https://github.com/marl-Am" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
//           <a href="mailto:mamedee001@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGoogle} /></a>
//           <a href="https://www.linkedin.com/in/marlon-a-89715814b/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>


//         </div>

//         <div className="footer-left">

//           <p className="footer-links">
//             <a className="link-1" href="/">Home</a>

//             <a href="#" onClick={handleAboutClick}>About</a>

//           </p>

//           <p>mamedee001@gmail.com &copy; 2023</p>
//         </div>

//       </footer>
//       {showModal && <Modal closeModal={closeModal} />}

//     </>
      
//   );
// }
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {

  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-right">
          <a href="https://github.com/marl-Am" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="mailto:mamedee001@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGoogle} /></a>
          <a href="https://www.linkedin.com/in/marlon-a-89715814b/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <div className="footer-left">
          <p className="footer-links">
            <a className="link-1" href="/">Home</a>
          </p>
          <p>mamedee001@gmail.com &copy; 2023</p>
        </div>
        
      </footer>
    </>
  );
}

export default Footer;
