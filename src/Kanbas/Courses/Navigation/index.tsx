import { Link, useParams, useLocation } from 'react-router-dom';

export default function CoursesNavigation() {
    const { cid } = useParams();
    const location = useLocation();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades","People"];

    return (
        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
            {links.map((link, index) => {
                const isActive = location.pathname.includes(`/Kanbas/Courses/${cid}/${link}`);
                return (
                    <Link
                        key={index}
                        to={`/Kanbas/Courses/${cid}/${link}`}
                        className={`list-group-item ${isActive ? 'active' : 'text-danger'} border-0`}
                    >
                        {link}
                    </Link>
                );
            })}
        </div>
    );
}