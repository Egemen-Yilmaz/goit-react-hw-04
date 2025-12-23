import toast, { Toaster } from 'react-hot-toast';
import styles from './SearchBox.module.css';

export default function SearchBox({ onSubmit }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        // name="topic" olan inputa erişiyoruz
        const topic = form.elements.topic.value.trim();

        if (topic === '') {
            toast.error('Please enter a search term');
            return;
        }

        onSubmit(topic);
        form.reset();
    }
    
    return (
        <header className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    name="topic"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images..."
                />
                <button className={styles.button} type="submit">
                    Search
                </button>
            </form>
            <Toaster position="top-right" />
        </header>
    );
}