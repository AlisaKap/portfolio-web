'use client';
import {Button, Flex, Form, Input} from "antd";
import {useRouter} from "next/navigation";
import '@/app/reset-password/reset-password-page.scss';
import Spacer from "@/components/Universal/Spacer/Spacer";
import Text from "@/components/Universal/Text/Text";

export default function Page() {

  const router=useRouter();

  const returnToEnterPage=()=>{
    router.push("/login");
  }

  const [form] = Form.useForm();



  return (

    <div className='reset-password-page'>

      <Text fontSize={18}>Сброс пароля</Text>
      <Spacer space={20}/>

      <Form layout="vertical" form={form}>

        <Flex vertical gap={20}>

          <Form.Item label='Почта' name='email' rules={[{ required: true, message:'Введите вашу почту' }]}>
            <Input />
          </Form.Item>

          <Flex gap={10}>
            <Button onClick={returnToEnterPage}>Назад</Button>
            <Button htmlType='submit'>Сбросить пароль</Button>
          </Flex>

        </Flex>

      </Form>

    </div>
  );
}
