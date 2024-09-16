import Project from "../components/Project"
import TableRow from "../components/TableRow"

function Table() {
    return <>
        <Project />
        <br />
        <table>
            <thead>
                <th>Name</th>
                <th>Days</th>
                <th>Description</th>
                <th>Action</th>
            </thead>
            <tbody>

                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
            </tbody>
        </table>
    </>

}

export default Table