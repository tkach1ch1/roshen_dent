import React, { ReactNode } from 'react'
import styles from '../style.module.css'

interface FormContainerProps {
    children: ReactNode
}

export const FormContainer = ({ children }: FormContainerProps) => {
    return <div className={styles.formContainer}>{children}</div>
}
