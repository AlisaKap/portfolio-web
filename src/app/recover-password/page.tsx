'use client';
import {Button, Flex, Form, Input} from "antd";
import Link from "next/link";
import {useEffect} from "react";
import Text from '@/components/Universal/Text/Text';

import '@/app/recover-password/recover-password-page.scss'
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

      <div className="recover-password-page">

      <Text fontSize={18}>Восстановление пароля</Text>
        <Spacer space={20}/>

        <Form form={form} layout="vertical">

          <Flex vertical gap={30}>

            <Form.Item label='Новый пароль' name='password' rules={[{ required: true, message:'Введите новый пароль' }]}>
              <Input />
            </Form.Item>


            <Form.Item label='Подтверждение пароля' name='submitPassword' rules={[{ required: true, message:'Подтвердите пароль' }]}>
              <Input />
            </Form.Item>

            <Button htmlType='submit'>Сохранить новый пароль</Button>

          </Flex>

        </Form>

    </div>
  );
}
