import styles from './ErrorMessage.module.css';

export default function ErrorMessage({ message = 'An error occurred' }) {
  return <div className={styles.wrapper}>{message}</div>;
}
import css from './ErrorMessage.module.css';

export default function ErrorMessage({ message = "Whoops, something went wrong! Please try reloading this page!" }) {
  return (
    <div className={css.container}>
      <p className={css.text}>{message}</p>
    </div>
  );
}