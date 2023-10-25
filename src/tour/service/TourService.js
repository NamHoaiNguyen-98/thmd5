import axios from "axios";

export const findAll = () => {
    return new Promise((resolve) => {
        resolve(
            axios.get("http://localhost:3000/tuors")
                .then(response => {
                    return response.data
                })
        )
    }).catch(() => {
        return []
    })

}

export const findOne = (id) => {
    return new Promise((resolve) => {
        resolve(
            axios.get("http://localhost:3000/tuors/" + id)
                .then(response => {
                    return response.data
                })
        )
    }).catch(() => {
        return {}
    })
}

export const createTour = (tour, navigate) => {
    return new Promise((resolve) => {
        resolve(
            axios.post("http://localhost:3000/tuors", tour)
                .then(() => {
                    return navigate("/")
                })
        )
    }).catch(() => {
        return navigate("/create")
    })
}

export const updateTour = (id, tour, navigate) => {
    return new Promise((resolve) => {
        resolve(
            axios.put("http://localhost:3000/tuors/" +id, tour)
                .then(() => {
                    alert("Update success")
                    return navigate("/")

                })
        )
    }).catch(() => {
        return navigate("/update/" +id)
    })
}

export const deleteById = (id) => {
    return new Promise((resolve) => {
        resolve(
            axios.delete("http://localhost:3000/tuors/" +id)
                .then(response => {
                    return response.data
                })
        )
    }).catch(() => {
        return {}
    })
}

