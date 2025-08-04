import React from "react";
import Sidebar from '@/components/Universal/Sidebar/Sidebar';
import Text from '@/components/Universal/Text/Text';
import '@fontsource/ubuntu';
import '@/app/global-not-found.scss'

export default function Page() {

    return(
        <html>
            <body>
            <Sidebar />
                <div className="global-not-found-page">
                    <img className="global-not-found-page" src='/gifs/clown.gif' alt="Clown" />
                    <Text className="h1">УПС...</Text>
                    <Text className="h2">Раздел до сих пор в разработке</Text>
                </div>
            </body>
        </html>
    );
}