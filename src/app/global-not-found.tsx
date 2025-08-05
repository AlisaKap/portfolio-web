import React from "react";
import Sidebar from '@/components/Universal/Sidebar/Sidebar';
import Text from '@/components/Universal/Text/Text';
import '@fontsource/ubuntu';
import '@/app/global-not-found.scss';

export default function GlobalNotFound() {


    return (
        <div className="global-not-found-wrapper">
            <div className="not-found-page">
                <img src='/gifs/clown.gif' alt="Clown" />
                <Text className="h1">УПС...</Text>
                <Text className="h2">Что-то пошло не так...</Text>
            </div>
        </div>
    );
}