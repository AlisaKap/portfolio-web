'use client';
import {Button, Flex, Form, Input} from "antd";
import Text from '@/components/Universal/Text/Text';
import Sidebar from '@/components/Universal/Sidebar/Sidebar';
import clown from '../../..//public/gifs/clown.gif';
import '@fontsource/ubuntu';
import '@/app/error/error-page.scss'
import Spacer from "@/components/Universal/Spacer/Spacer";
import Link from "next/link";



export default function Page() {

  return (

      <div className="error-page">

        <Sidebar />

        <img src={clown.src} alt="Clown" />
        <Text className="h1">УПС...</Text>
        <Text className="h2">Раздел до сих пор в разработке</Text>

      </div>
  );
}
