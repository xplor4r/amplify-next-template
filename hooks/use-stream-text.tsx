import { useState, useEffect} from 'react';

const useStreamText = (text: string, delay: number = 50) => {
    const [streamedText, setStreamedText] = useState('');

    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setStreamedText(prevText => prevText + text[index]);
                setIndex(prevIndex => prevIndex + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [index, delay, text]);
    return streamedText;
}

export default useStreamText;