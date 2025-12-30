import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
export default function GetCourses() {
  return (
    <>
      <Navbar />
        <SubNavbar />

      <div className="container mt-5">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Course Name</th>
              <th>Description</th>
              <th>Fees</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Expire Day</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>IIT-MERN-2025</td>
              <td>MERN</td>
              <td>$4000</td>
              <td>10 Dec 2025</td>
              <td>5 Jan 2026</td>
               <td> 7 </td>
              <td>
                <button className="btn btn-warning btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>IIt-MERN-2025-July</td>
              <td>MERN</td>
                <td>$5000</td>
              <td>1 Jul 2025</td>
              <td>31 Jul 2025</td>
                <td> 7 </td>
              <td>
                <button className="btn btn-warning btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>IIT-WEB-2024-July </td>
              <td>AI Course</td>
              <td>$5000</td>
              <td>1 jul 2025</td>
              <td>31 jul 2025</td>
               <td> 7 </td>
              <td>
                <button className="btn btn-warning btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td>AI</td>
              <td>AI Course</td>
              <td>$10000</td>
              <td>24 Nov 2025</td>
              <td>24 Dec 2025</td>
               <td> 7 </td>
              <td>
                <button className="btn btn-warning btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>

            <tr>
              <td>5</td>
              <td>Android</td>
              <td>Android related course</td>
              <td>$9999</td>
              <td>24 Nov 2025</td>
              <td>24 Dec 2025</td>
              <td> 7 </td>
              <td>
                <button className="btn btn-warning btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>

            <tr>
              <td> 6</td>
              <td> py </td>
              <td>AI Course</td>
              <td>$10000</td>
              <td>24 Nov 2025</td>
              <td>24 Dec 2025</td>
               <td> 20 </td>
              <td>
                <button className="btn btn-warning btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
