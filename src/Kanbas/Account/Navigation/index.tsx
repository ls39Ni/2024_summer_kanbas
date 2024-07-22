import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser
    ? [{ name: "Profile", path: "Profile" }]
    : [
        { name: "Sign in", path: "Signin" },
        { name: "Sign up", path: "Signup" },
      ];
  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          to={`/Kanbas/Account/${link.path}`}
          className={`wd-link border border-0 list-group-item
           ${
             pathname.includes(link.path) ? "active text-black" : "text-danger"
           }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
