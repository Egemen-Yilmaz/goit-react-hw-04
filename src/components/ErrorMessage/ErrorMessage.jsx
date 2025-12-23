import styles from './ErrorMessage.module.css';

export default function ErrorMessage({ message = 'Whoops, something went wrong! Please try reloading this page!' }) {
  return <div className={styles.wrapper}>{message}</div>;
}