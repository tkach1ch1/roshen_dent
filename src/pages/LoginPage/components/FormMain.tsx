import { Button, Form, Input } from 'antd'
import { FormTitle } from './FormTitle'

export const FormMain = () => {
    return (
        <Form
            name='basic'
            autoComplete='off'
            style={{ marginTop: '-20px' }}
        >
            <FormTitle />

            <Form.Item
                label='Id'
                name='id'
                rules={[{ required: true, message: 'Please input your id!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    type='primary'
                    htmlType='submit'
                    style={{ marginTop: '5px' }}
                >
                    Enter
                </Button>
            </Form.Item>
        </Form>
    )
}
