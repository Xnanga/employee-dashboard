import { Link } from 'react-router-dom';

import styles from './MainTopBar.module.css';

import DefaultButton from './DefaultButton';

const MainTopBar = (props) => {
  return (
    <header className={styles['employee-list-top-bar']}>
      <h1 className={styles['employee-list-top-bar__heading']}>
        {props.title}
      </h1>
      {props.hyperlink && (
        <Link to={props.hyperlink}>
          <DefaultButton
            btnColor={props.btnColor}
            btnLabel={props.btnLabel}
            btnAction={props.btnAction}
          />
        </Link>
      )}
    </header>
  );
};

export default MainTopBar;
