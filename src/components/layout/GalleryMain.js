import React, {Component} from 'react';
import Gallery from "react-photo-gallery";
import './GalleryMain.css';

const photos = [
    {
        src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 1,
        height: 1
    },
    {
        src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 1,
        height: 1
    },
    {
        src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 1,
        height: 1,
    },
    {
        src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 1,
        height: 1
    },
    {
        src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 1,
        height: 1
    },
    {
        src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
        sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
        width: 1,
        height: 1
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