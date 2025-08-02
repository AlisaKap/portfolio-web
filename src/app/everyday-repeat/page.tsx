'use client';
import {Button, Flex, Form, Input} from "antd";
import Link from "next/link";
import {useEffect} from "react";
import Text from '@/components/Universal/Text/Text';

import '@/app/login/login-page.scss'
import Spacer from "@/components/Universal/Spacer/Spacer";

interface FormValues {
  question: string;
  answer: string;
}


export default function Page() {

  const [form] = Form.useForm<FormValues>();

  const {question, answer} = Form.useWatch([], form) ?? {
    question: '',
    answer: ''
  };

  return (

      <div className="login-page">

      <Text fontSize={18}>Прогресс повторения: 10/100</Text>
        <Spacer space={20}/>

        <Form form={form} layout="vertical">

          <Flex vertical gap={30}>

            <Form.Item label='Передняя сторона (вопрос)' name='question' rules={[{ required: true, message:'?' }]}>
              <Input />
            </Form.Item>


            <Form.Item label='Задняя сторона (ответ)' name='answer' rules={[{ required: true, message:'Введите ответ' }]}>
              <Input />
            </Form.Item>

            <Button htmlType='submit'>Отобразить ответ/убрать ответ</Button>

            <Flex justify={"space-between"} gap={50}>

              <Button htmlType='submit'>Помню</Button>
              <Button htmlType='submit'>Не помню</Button>

            </Flex>


          </Flex>

        </Form>

    </div>
  );
}
