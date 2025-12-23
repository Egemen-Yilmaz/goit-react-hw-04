import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loaderWrapper} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#0070f3"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}