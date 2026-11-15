import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="wrap nav">
        <a className="logo" href="#top">Q<b>spiders</b></a>
        <nav>
          <a href="#courses">All Courses</a>
          <a href="#centers">Centers</a>
          <a href="#why">Why Us</a>
          <a href="#placements">Placements</a>
          <a href="#faq">FAQ</a>
          <Link to="/admin">Admin</Link>
        </nav>
        <a className="btn" href="#contact">Enquire Now</a>
      </div>
    </header>
  );
}
