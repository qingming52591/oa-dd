import config from "../conf";
import {createBrowserHistory} from 'history';
import {Input, Space, Button} from "antd";
import {SearchOutlined} from '@ant-design/icons';

const md5 = require('md5')

export const history = createBrowserHistory()

export const goPage = (path) => {
    history.push(path)
    history.go()
}
export const log = (msg, debug = false) => {
    if (config.DEBUG || debug) {
        console.log(msg)
    }
}

export const getMd5 = (str) => {
    return md5(str)
}

export const list2dict = (arr, key) => {

}

// 搜索
export const getColSearchLocal = (title, dataIndex) => {
    return {
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
            <div style={{padding: 8}}>
                <Input
                    ref={node => {
                    }}
                    placeholder={`搜索 ${title}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => {
                        confirm()
                    }}
                    style={{width: 188, marginBottom: 8, display: 'block'}}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => {
                            confirm();
                        }}
                        icon={<SearchOutlined/>}
                        size="small"
                        style={{width: 90}}
                    >
                        Search
                    </Button>
                    <Button onClick={() => {
                        clearFilters();
                    }}
                            size="small" style={{width: 90}}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>,
        onFilter: (value, record) => record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
    }
}