export default {
    createPackage: (todo) => fetch(
        "http://localhost:8081/booking", {
            mode: 'cors',
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(todo)
        })
}