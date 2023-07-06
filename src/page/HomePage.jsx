import { useEffect, useState } from "react";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import api from "../api";
import { Drawer, Form } from "antd";
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
  
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  useEffect(() => {
    const fn = async () => {
      await showAllThings();
    };
    fn().catch(console.error);
  }, []);

  const onPerformSearch = (value) => {
    const fn = async () => {
      if (isTagTooShort(value)) {
        return await showAllThings();
      }

      const thingsByTag = await api.findThingsByTag(value);
      if (thingsByTag.length <= 0) {
        console.trace("No match found by tag so showing all things.");
        return await showAllThings();
      }

      console.trace("Matches found by tag, so showing them.");
      const imgs = thingsByTag.map(mapToImage);
      setImageUrls(imgs);
    };
    fn().catch(console.error);
  };

  const showAllThings = async () => {
    const things = await api.listAllThings();
    const imgs = things.map(mapToImage);
    setImageUrls(imgs);
  };

  return (
    <>
      <Navbar onPerformSearch={onPerformSearch}>
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
      </Navbar>
    </>
  );
}

const isTagTooShort = (value) => !value || value.length <= 2;

const mapToImage = (thing) => thing.img_url;
}