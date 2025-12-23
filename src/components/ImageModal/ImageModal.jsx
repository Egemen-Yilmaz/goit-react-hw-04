import Modal from 'react-modal';
import styles from './ImageModal.module.css';

// Modalın nereye bağlanacağını belirtiyoruz
Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, image }) {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose} // ESC veya dışarı tıklanınca kapanır
      className={styles.modal}
      overlayClassName={styles.backdrop}
      contentLabel="Image Modal"
    >
        {image && (
            <div>
                <img className={styles.img} src={image.urls.regular} alt={image.alt_description} />
                <p className={styles.meta}>Owner: {image.user.name}</p>
                <p className={styles.meta}>Like: {image.likes}</p>
            </div>
        )}
      
    </Modal>
  );
}