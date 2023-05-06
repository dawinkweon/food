import { useState } from "react";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import api from "../api";
import { Col, Drawer, Form } from "antd";
import Search from "antd/es/input/Search";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import { FloatButton } from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export default function HomePage() {
  const [searchText, setSearchText] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const onPerformSearch = () => {
    const searchResults = api.search(searchText);
    setImageUrls(searchResults);
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar>
        <Col flex="auto">
          <Search
            style={{ padding: "0px 15px" }}
            size="large"
            value={searchText}
            onChange={(evt) => setSearchText(evt.target.value)}
            allowClear
            placeholder="Search"
            onSearch={onPerformSearch}
            enterButton
          />
        </Col>
      </Navbar>
      <Content imageUrls={imageUrls} />
      <Drawer title="Create" placement="right" onClose={onClose} open={open}>
        <div className="create-container">
          <Form
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
          >
            <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
              <Checkbox>Checkbox</Checkbox>
            </Form.Item>
            <Form.Item label="Radio">
              <Radio.Group>
                <Radio value="apple"> Apple </Radio>
                <Radio value="pear"> Pear </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Input">
              <Input />
            </Form.Item>
            <Form.Item label="Select">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="TreeSelect">
              <TreeSelect
                treeData={[
                  {
                    title: "Light",
                    value: "light",
                    children: [{ title: "Bamboo", value: "bamboo" }],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Cascader">
              <Cascader
                options={[
                  {
                    value: "zhejiang",
                    label: "Zhejiang",
                    children: [
                      {
                        value: "hangzhou",
                        label: "Hangzhou",
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="DatePicker">
              <DatePicker />
            </Form.Item>
            <Form.Item label="RangePicker">
              <RangePicker />
            </Form.Item>
            <Form.Item label="InputNumber">
              <InputNumber />
            </Form.Item>
            <Form.Item label="TextArea">
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Switch" valuePropName="checked">
              <Switch />
            </Form.Item>
            <Form.Item
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item label="Button">
              <Button>Button</Button>
            </Form.Item>
          </Form>
        </div>
      </Drawer>
      <FloatButton type="primary" icon={<PlusOutlined />} onClick={showDrawer} />
    </>
  );
}
