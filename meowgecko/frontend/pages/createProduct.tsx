import React, { useState } from 'react';
import { Button, Form, Input, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import ImageCrop from './ImageCrop'; //假設這個是你的圖片剪裁元件
import ImageFilter from './ImageFilter'; //假設這個是你的圖片濾鏡元件

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
};

export default function ProductForm() {
  const [form] = Form.useForm();
  const [image, setImage] = useState(null);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    // 在此進行送出表單的動作，例如使用 axios 來發送 POST 請求
    // axios.post('/your-endpoint', values)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onUploadChange = (info: { file: { status: string; name: any; originFileObj: React.SetStateAction<null>; }; fileList: any; }) => {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      setImage(info.file.originFileObj);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <Form {...layout} form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} onFinishFailed={onFinishFailed}>
      <Form.Item name={['product', 'name']} label="商品名稱" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['product', 'description']} label="商品介紹" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="上傳商品圖片">
        <Upload name="logo" action="/upload.do" listType="picture" onChange={onUploadChange}>
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
        {image && <ImageCrop src={URL.createObjectURL(image)} />}
        {image && <ImageFilter src={URL.createObjectURL(image)} />}
      </Form.Item>
      <Form.Item name={['product', 'price']} label="價格" rules={[{ required: true }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item name={['product', 'saleCategory']} label="特價類別">
        <Input />
      </Form.Item>
      <Form.Item name={['product', 'tags']} label="Tag Array">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
