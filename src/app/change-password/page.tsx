'use client';
import {Button, Flex, Form, Input} from "antd";
import Text from '@/components/Universal/Text/Text';

import '@/app/change-password/change-password-page.scss'
import Spacer from "@/components/Universal/Spacer/Spacer";
import Link from "next/link";

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

      <div className="change-password-page">

      <Text fontSize={18}>Изменение пароля пользователя</Text>
        <Spacer space={20}/>

        <Form form={form} layout="vertical">

          <Flex vertical gap={30}>

            <Form.Item label='Старый пароль' name='oldPassword' rules={[{ required: true, message:'Введите старый пароль' }]}>
              <Input />
            </Form.Item>

            <Form.Item label='Новый пароль' name='newPassword' rules={[{ required: true, message:'Введите новый пароль' }]}>
              <Input />
            </Form.Item>

            <Form.Item label='Подтверждение пароля' name='submitNewPassword' rules={[{ required: true, message:'Подтвердите новый пароль' }]}>
              <Input />
            </Form.Item>

            <Button htmlType='submit'>Сохранить новый пароль</Button>

            <Link href='/reset-password'>Забыли пароль?</Link>

          </Flex>

        </Form>

    </div>
  );
}
