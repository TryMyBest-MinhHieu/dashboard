import {Link, useLocation} from 'react-router-dom';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);

  if (paths.length === 0) return null;

  return (
    <nav className="text-sm text-gray-500">
      <Link to="/" className="hover:underline text-gray-700">
        Home
      </Link>
      {paths.map((path, index) => {
        const href = '/' + paths.slice(0, index + 1).join('/');
        const isLast = index === paths.length - 1;

        return (
          <span key={index} className="mx-2">
            /
            {isLast ? (
              <span className="text-gray-700"> {capitalize(path)}</span>
            ) : (
              <Link to={href} className="hover:underline text-gray-700">
                {' '}
                {capitalize(path)}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
