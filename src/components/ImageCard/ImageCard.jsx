import styles from './ImageCard.module.css';

export default function ImageCard({ image, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img className={styles.img} src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}