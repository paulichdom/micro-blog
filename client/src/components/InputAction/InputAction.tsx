import { Flex, Typography, Input, Button, Form, FormProps } from 'antd';
import axios from 'axios';

interface InputActionType {
  inputLabel: string;
  buttonLabel: string;
  buttonVariant?: 'link' | 'text' | 'primary' | 'default' | 'dashed';
  value: string;
  changeValue: (value: string) => void;
}

interface FieldType {
  title?: string;
}

const InputAction: React.FC<InputActionType> = ({
  inputLabel,
  buttonLabel,
  buttonVariant,
  value,
  changeValue,
}) => {
  const [form] = Form.useForm();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeValue(event.target.value);
  };

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    await axios.post('http://localhost:4000/posts', {
      title: values.title,
    });

    form.resetFields();
  };

  return (
    <Form form={form} name="create-post" onFinish={onFinish}>
      <Flex gap="small" align="start" vertical>
        <Typography.Title level={5} style={{ marginBottom: 0 }}>
          {inputLabel}
        </Typography.Title>
        <Form.Item<FieldType> name="title" rules={[{ required: true }]}>
          <Input
            value={value}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Button type={buttonVariant} htmlType="submit">
          {buttonLabel}
        </Button>
      </Flex>
    </Form>
  );
};

export default InputAction;
