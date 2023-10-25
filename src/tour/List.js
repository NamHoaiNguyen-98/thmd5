import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {findAll, deleteById } from "./service/TourService";

export default function List() {
const [tours, setTours] = useState([]);
const navigate = useNavigate();
const [check, setCheck] = useState(false);
    useEffect(() => {
        findAll().then((result) => {
                setTours(result)
            }
        )
    }, [check])

    function deleteByID(id) {
        if (window.confirm("You are sure")) {
            deleteById(id).then(() => {
                setCheck(!check);
                alert("Delete success!")
            })
        }
    }

    function update(id) {
        return navigate("/update/" +id)
    }


    return (
        <>
            <div className={"container"}>
                <h1 style={{marginLeft: "270px"}}>List Tours</h1>
                <div className={'dropdown'} style={{marginLeft: '10px'}}>
                    <Link className={"btn btn-primary"} to={"/create"}>Create</Link>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th colSpan={2} style={{width: '20%', textAlign: "center"}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tours.map((t, count = 1) => {
                        return(
                            <tr>
                                <td>{++count}</td>
                                <td>
                                    <Link to={`/detail/${t.id}`}>{t.title}</Link>
                                </td>
                                <td>{t.price}</td>
                                <td><button className={"btn btn-info"} onClick={() => {deleteByID(t.id)}}>Delete</button></td>
                                <td><button className={"btn btn-danger"} onClick={() => {update(t.id)}}>Update</button></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </>
    )

}