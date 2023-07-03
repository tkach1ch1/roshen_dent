import { CarouselLogin } from './components/CarouselLogin'
import { LoginForm } from './components/LoginForm'

export const LoginPage = () => {
    return (
        <div style={{ height: '100vh', position: 'relative', background: 'red' }}>
            <CarouselLogin />
            <LoginForm />
        </div>
    )
}
