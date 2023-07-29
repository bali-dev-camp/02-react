import { Link, Outlet } from "react-router-dom";

export default function PageAbout() {
  return (
    <div>
      <h1>This is about Page</h1>
      <Link to="/">Home page</Link>
      <br />
      
      <Link to="singaraja">Cabang Singaraja</Link>
      <br />
      <Link to="karangasem">Cabang Karangasem</Link>
      <br />
      <Link to="denpasar">Cabang Denpasar</Link>

      <Outlet />
    </div>
  )
}
