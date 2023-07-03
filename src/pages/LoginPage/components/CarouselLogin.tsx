import { Carousel } from 'antd'
import styles from '../style.module.css'
import img1 from '../../../assets/1.jpg'
import img2 from '../../../assets/2.jpg'
import img3 from '../../../assets/3.jpg'

const imgCarousel = [
    {
        id: 1,
        url: img1,
    },
    {
        id: 2,
        url: img2,
    },
    {
        id: 2,
        url: img3,
    },
]

export const CarouselLogin = () => {
    return (
        <Carousel autoplay>
            {imgCarousel.map((img) => (
                <div key={img.id}>
                    <div
                        className={styles.carouselItem}
                        style={{
                            background: `url(${img.url}) 0% 0% / contain`,
                        }}
                    ></div>
                </div>
            ))}
        </Carousel>
    )
}
