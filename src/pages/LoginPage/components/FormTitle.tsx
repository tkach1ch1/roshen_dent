import logo from '../../../assets/roshen-logo-svg.svg'
import { Space, Typography } from 'antd'
import styles from '../style.module.css'

const { Title } = Typography

export const FormTitle = () => {
    return (
        <Space
            direction='vertical'
            style={{ marginBottom: '20px' }}
        >
            <img
                src={logo}
                alt='logo'
                className={styles.logo}
            />

            <Title
                level={5}
                style={{ fontFamily: 'sans-serif', textAlign: 'center' }}
            >
                ROSHEN DENTAL LAB CUSTOMER PORTAL
            </Title>
        </Space>
    )
}
