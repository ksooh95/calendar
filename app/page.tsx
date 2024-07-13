import Image from 'next/image';
import styles from './page.module.css';
import Calendar from '@/app/calendar/page';

export default function Home() {
    return (
        <main className="home">
            <Calendar />
        </main>
    );
}
