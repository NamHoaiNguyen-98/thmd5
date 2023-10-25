import {Link, useNavigate, useParams} from "react-router-dom";
import {findOne, updateTour} from "./service/TourService";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";

export default function Update() {
    const [tour, setTour] =  useState({});
    let navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        findOne(id).then((result) => {
            return setTour(result)
        })
    })

    function update(e) {
        updateTour(id, e, navigate).then()
    }
    return(
        <>
            <div className={"container"} style={{width:"600px"}}>
                <h1 style={{textAlign: "center"}}>Update</h1>
                <Formik
                    initialValues={tour}
                    onSubmit={(e) => {
                        update(e)
                    }}
                    enableReinitialize={true}
                >
                    <Form>
                        <div className="mb-3">
                            <label htmlFor={'title'} className="form-label">Name</label>
                            <Field type={'text'} name={'title'} className={'form-control'} id="{'title'}"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor={'price'} className="form-label">Price</label>
                            <Field type={'number'} name={'price'} className={'form-control'} id="{'price'}"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor={'description'} className="form-label">Description</label>
                            <Field as={"textarea"} name={'description'} className={'form-control'} id="{'description'}"/>
                        </div>
                        <div style={{textAlign: "center"}}>
                            <button className={'btn btn-primary'} type={'submit'}>Update</button>
                            <Link className={'btn btn-secondary'} to={'/'}>Back to home</Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}