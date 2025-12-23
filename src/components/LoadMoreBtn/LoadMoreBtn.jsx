

import styles from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
  return (
    <button className={styles.loadMore} type="button" onClick={onClick}>
      Load More
    </button>
  );
}