import React, { FC } from 'react';
import { Provider, useStore, useDispatch } from 'react-redux';

import styles from './App.module.scss';
import Consumer from './pages/Consumer';
import Trigger from './pages/Trigger';
import Transformer from './pages/Transformer';
import { store } from './store';
import './style/styles.scss';
import { Upload, message, Card, Divider, Typography } from 'antd';
import cn from 'classnames';
import { UsersActions } from './store/Users/users.actions';
import Uploader from './pages/Uploader';

const { Dragger } = Upload;

const App: FC = () => {
    return (
        <Provider store={store}>
            <div className={styles.App}>
                <div className={styles.Components}>
                    {/* <Trigger />
                    <Consumer />
                    <Transformer /> */}
                    <Uploader />
                </div>
            </div>
        </Provider>
    );
};

export default App;
