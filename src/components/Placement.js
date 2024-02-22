import React from 'react'

export default function Placement() {
  return (
    <div className="d-flex flex-nowrap overflow-auto " style={{ maxHeight: "100vh", height: "-webkit-fill-available" }}>

      <div className="flex-shrink-0 p-2 bg-white mx-3" style={{ width: "280px" }}>

        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
              <strong> Branch</strong>
            </button>
            <div className="collapse show" id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small mx-3">
                <li><a href="/" className="link-dark d-inline-flex text-decoration-none rounded">ENTC</a></li>
                <li><a href="/" className="link-dark d-inline-flex text-decoration-none rounded">IT</a></li>
                <li><a href="/" className="link-dark d-inline-flex text-decoration-none rounded">Computer Science</a></li>
              </ul>
            </div>
          </li>
          <li className="mb-1 fixed-bottom mx-4">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
              <strong>Account</strong>
            </button>
            <div className="collapse" id="account-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small mx-4">
                <li><a href="/" className="link-dark d-inline-flex text-decoration-none rounded">Profile</a></li>
                <li><a href="/" className="link-dark d-inline-flex text-decoration-none rounded">Settings</a></li>
                <li><a href="/" className="link-dark d-inline-flex text-decoration-none rounded">Sign out</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <table className="table shadow p-3 mb-5 bg-white rounded mx-3 ">
        <thead>
          <tr>
            <th scope="col">Seq. No.</th>
            <th scope="col">Name</th>
            <th scope="col">Branch</th>
            <th scope="col">Placed Year</th>
            <th scope="col">Company</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark Vendi</td>
            <td>ENTC</td>
            <td>2020-24</td>
            <td>Aramco</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}
