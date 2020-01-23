import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1,
    cursor: 'pointer'
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textTransform: 'capitalize',
    cursor: 'pointer'
  }
}));

function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  const dispatch = useDispatch();

  const handleClickTitle = () => {
    props.history.push('/');
  };

  const handleClickLogout = () => {
    dispatch(logout(props.history));
  };

  const handleClickSectionLink = url => {
    props.history.push(url);
  };

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">logo</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
          onClick={handleClickTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small" onClick={handleClickLogout}>
          Logout
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.name}
            variant="body2"
            className={classes.toolbarLink}
            onClick={() => handleClickSectionLink(`/section/${section.name}`)}
          >
            {section.name}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string
};

export default withRouter(Header);
