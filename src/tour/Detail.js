import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {findOne} from "./service/TourService";


export default function Detail() {
    const { id } = useParams();
    const [tour, setTour] = useState({});

    useEffect(() => {
        findOne(id).then((result) => {
            setTour(result);
        });
    }, []);

    return (
        <div className="container">
            <h2>Detail Tour</h2>
            <div>
                <strong>Title: </strong>
                {tour.title}
            </div>
            <div>
                <strong>Price: </strong>
                {tour.price}
            </div>
            <div>
                <strong>Description: </strong>
                {tour.description}
            </div>
        </div>
    );
}