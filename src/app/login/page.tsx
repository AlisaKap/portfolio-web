'use client';
import {Button, Flex, Form, Input} from "antd";
import Link from "next/link";
import {useEffect} from "react";
import Text from '@/components/Universal/Text/Text';

import '@/app/login/login-page.scss'
import Spacer from "@/components/Universal/Spacer/Spacer";

interface FormValues {
  email: string;
  password: string;
}


export default function Page() {

  const [form] = Form.useForm<FormValues>();

  const {email, password} = Form.useWatch([], form) ?? {
    email: '',
    password: ''
  };

  return (

      <div className="login-page">

      <Text fontSize={18}>Вход в аккаунт</Text>
        <Spacer space={20}/>

        <Form form={form} layout="vertical">

          <Flex vertical gap={30}>

            <Form.Item label='Почта' name='email' rules={[{ required: true, message:'Введите вашу почту' }]}>
              <Input />
            </Form.Item>


            <Form.Item label='Пароль' name='password' rules={[{ required: true, message:'Введите ваш пароль' }]}>
              <Input />
            </Form.Item>

            <Button htmlType='submit'>Войти</Button>

            <Flex gap={20}>

              <Link href='/reset-password'>Забыли пароль?</Link>

              <Link href='/register'>Регистрация</Link>

            </Flex>


          </Flex>

        </Form>

    </div>
  );
}
