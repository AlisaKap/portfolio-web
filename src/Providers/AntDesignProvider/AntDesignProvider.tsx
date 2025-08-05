'use client';

import {AntdRegistry} from "@ant-design/nextjs-registry";
import type {PropsWithChildren} from "react";
import '@ant-design/v5-patch-for-react-19';

const AntDesignProvider=({children}: PropsWithChildren)=>{

    return (
        <AntdRegistry>
            {children}
        </AntdRegistry>
    )
}


export default AntDesignProvider;
