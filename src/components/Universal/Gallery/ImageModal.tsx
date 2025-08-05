import React from 'react';
import styles from './Gallery.module.scss';

type Props = {
    src: string;
    onClose: () => void;
};

const ImageModal = ({ src, onClose }: Props) => {
    return (
        <div className={styles.modal} onClick={onClose}>
            <img src={src} alt="Изображение" />
        </div>
    );
};

export default ImageModal;