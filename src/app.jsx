import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    'https://via.placeholder.com/600x300/FF0000/FFFFFF?text=Image+1',
    'https://via.placeholder.com/600x300/00FF00/FFFFFF?text=Image+2',
    'https://via.placeholder.com/600x300/0000FF/FFFFFF?text=Image+3',
];

const Window = () => {
    return (
        <Carousel showArrows={true} infiniteLoop={true} swipeable={true}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} />
                </div>
            ))}
        </Carousel>
    );
};

export default Window;