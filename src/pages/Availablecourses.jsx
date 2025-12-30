import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";

export default function AvailableCourses() {
  return (
    <>
      <Navbar />

            {/* Second Navbar */}
      <SubNavbar />


      <div className="container mt-5">
        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card h-100">
              <img src="mern.jpg" className="card-img-top" alt="MERN" />
              <div className="card-body text-center">
                <h5 className="card-title">IIT-MERN-2025</h5>
                <p className="card-text">Starts on: 10 Dec 2025</p>
                <a href="#" className="btn btn-primary">View</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card h-100">
              <img src="ai.jpg" className="card-img-top" alt="AI" />
              <div className="card-body text-center">
                <h5 className="card-title">AI</h5>
                <p className="card-text">Starts on: 23 Nov 2025</p>
                <a href="#" className="btn btn-primary">View</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card h-100">
              <img src="python.jpg" className="card-img-top" alt="Python" />
              <div className="card-body text-center">
                <h5 className="card-title">Python</h5>
                <p className="card-text">Starts on: 24 Nov 2025</p>
                <a href="#" className="btn btn-primary">View</a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-4">
            <div className="card h-100">
              <img src="java.jpg" className="card-img-top" alt="Java" />
              <div className="card-body text-center">
                <h5 className="card-title">Java Full Stack</h5>
                <p className="card-text">Starts on: 15 Jan 2025</p>
                <a href="#" className="btn btn-primary">View</a>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-4">
            <div className="card h-100">
              <img src="web.jpg" className="card-img-top" alt="Web" />
              <div className="card-body text-center">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">Starts on: 1 March 2025</p>
                <a href="#" className="btn btn-primary">View</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
