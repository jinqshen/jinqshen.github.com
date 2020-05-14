import React from 'react';
import { Upload, message, Button, Icon } from 'antd';
import NProgress from 'nprogress';

const props = {
    name: 'file',
    action: 'http://localhost:5000/uploader',
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
};

export default class FileUploader extends React.Component {

    constructor() {
        super();
        this.state = {

        };
        NProgress.start();
    }

    componentWillMount = () => {
      NProgress.set(0.5);
    }

    componentDidMount = () => {
      NProgress.done(true);
    }

    /* componentDidMount = () => {
        this.state.props = {
            name: 'file',
            action: 'http://localhost:5000/uploader',
            method: 'post',
            headers: {
              authorization: 'authorization-text',
            },
            onChange(info) {
              if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
              } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            },
        };
    } */


    render() {
        return (
            <div>
                <Upload {...props}>
                    <Button>
                    <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
            </div>
        )
    }
}