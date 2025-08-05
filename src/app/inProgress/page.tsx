import React from "react";
import Sidebar from '@/components/Universal/Sidebar/Sidebar';
import Text from '@/components/Universal/Text/Text';
import '@fontsource/ubuntu';
import '@/app/inProgress/inProgress.scss';

export default function InProgress() {


    return (
        <div className="inProgress">
            <div className="inProgress">
                <img src='/gifs/clown.gif' alt="Clown" />
                <Text className="h1">УПС...</Text>
                <Text className="h2">Раздел ждет обновления</Text>
            </div>
        </div>
    );
}