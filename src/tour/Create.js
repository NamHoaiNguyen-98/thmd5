import {Link, useNavigate} from "react-router-dom";
import {createTour, save} from "./service/TourService";
import {Field, Form, Formik} from "formik";

export default function Create() {
const navigate = useNavigate();
function create(tour) {
    createTour(tour, navigate).then()
}
    return(
        <>
            <div className={"container"} style={{width:"600px"}}>
                <h1 style={{textAlign: "center"}}>Create</h1>
                <Formik
                    initialValues={{
                        title: "",
                        price: "",
                        description: ""
                       }}
                    onSubmit={(e) => {
                        create(e)
                    }}
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
                            <button className={'btn btn-primary'} type={'submit'}>Create</button>
                            <Link className={'btn btn-secondary'} to={'/'}>Back to home</Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}