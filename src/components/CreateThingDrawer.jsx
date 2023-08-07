import { CloseCircleOutlined } from "@ant-design/icons";
import { Drawer, Form, Input, Tag, Button, Upload } from "antd";
import { useRef } from "react";
import { FORM_PROPS } from "./CreateThingDrawer.style";

const CreateThingDrawer = ({ onCreate, onClose, open }) => {
  const formRef = useRef(null);

  const onFinish = (values) => {
    console.debug(`Creating thing with values`, values);
    formRef.current?.resetFields();

    onCreate(values);
  };

  return (
    <Drawer title="Create" placement="left" onClose={onClose} open={open}>
      <Form name="form" ref={formRef} onFinish={onFinish} {...FORM_PROPS}>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Tags" name="tags">
          <Tag closeIcon={<CloseCircleOutlined />}>thai</Tag>
          <Tag closeIcon={<CloseCircleOutlined />}>noodle</Tag>
        </Form.Item>
        <Form.Item
          label="Image"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            Upload
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

const normFile = (e) => {
  alert(JSON.stringify(e));
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export default CreateThingDrawer;
