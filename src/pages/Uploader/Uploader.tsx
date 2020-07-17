import React from 'react';
import styles from './Uploader.module.scss';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { UsersActions } from '../../store/Users/users.actions';
import { message, Card, Divider, Typography } from 'antd';
import Dragger from 'antd/lib/upload/Dragger';
import { InboxOutlined } from '@ant-design/icons';
import { RootStore } from '../../store';

const Uploader = () => {
    const dispatch = useDispatch();
    const errors = useSelector((state: RootStore) => state.user.upload?.errors);

    const props = {
        name: 'file',
        multiple: true,
        action: 'https://pdf.words-of-wonders.com:443/',
        onChange(info: any) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                console.log(info.file.response);
                dispatch({ type: UsersActions.UploadSuccess, payload: info.file.response });
                message.success(`${info.file.name} файл успешно обработан.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return (
        <Card className={cn(styles.dragger)}>
            <Typography.Title>Проверка нормативных документов</Typography.Title>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other band
                    files
                </p>
            </Dragger>

            <Divider />

            {errors?.length && (
                <>
                    <Typography.Title level={3}>Обнаруженные ошибки:</Typography.Title>
                    {errors.map((item: any) => (
                        <div key={item}>
                            <Typography.Text>{item}</Typography.Text>
                        </div>
                    ))}
                </>
            )}
        </Card>
    );
};

export default Uploader;
