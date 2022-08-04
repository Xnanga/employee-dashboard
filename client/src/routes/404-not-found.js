import { Link } from 'react-router-dom';

import MainTopBar from '../components/ui/MainTopBar';

const NotFoundPage = () => {
  return (
    <>
      <MainTopBar
        title="404 Not Found"
        hyperlink="/"
        btnColor="default-btn--red"
        btnLabel="Return to All Entries"
      />
      <p>Well this is embarassing....</p>
      <p>
        Why not <Link to="/">return to all employee entries?</Link>
      </p>
    </>
  );
};

export default NotFoundPage;
