import React, {Component} from 'react';
import Gallery from "react-photo-gallery";
import './GalleryMain.css';

// Here is where pictures from the client go (Express + Axios)
const photos = [
    {
        src: "https://i.ibb.co/n3Xdw4T/Captura-de-pantalla-2019-06-08-a-las-21-10-39.png",
        sizes: ["(min-width: 480px) 10vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 2
    },
    {
        src: "https://i.ibb.co/n3Xdw4T/Captura-de-pantalla-2019-06-08-a-las-21-10-39.png",
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 2
    },
    {
        src: "https://i.ibb.co/n3Xdw4T/Captura-de-pantalla-2019-06-08-a-las-21-10-39.png",
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 2
    },
    {
        src: "https://i.ibb.co/n3Xdw4T/Captura-de-pantalla-2019-06-08-a-las-21-10-39.png",
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 2
    },
    {
        src: "https://i.ibb.co/n3Xdw4T/Captura-de-pantalla-2019-06-08-a-las-21-10-39.png",
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 2
    },
    {
        src: "https://i.ibb.co/n3Xdw4T/Captura-de-pantalla-2019-06-08-a-las-21-10-39.png",
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 3,
        height: 2
    }
];

class GalleryMain extends Component {
    render() {
        return (
            <Gallery photos={photos} className="galleryStyle"/>
        );
    }
}

export default GalleryMain;