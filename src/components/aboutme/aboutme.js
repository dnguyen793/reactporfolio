import React from 'react';
import PropTypes from 'prop-types';
import styles from './aboutme.module.scss';
import me from '../../img/self.png';
import {Box} from "@mui/material";
import classNames from 'classnames';


const Aboutme = () => (
  <div className={styles.Aboutme}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
    Aboutme Component
  </div>
);

Aboutme.propTypes = {};

Aboutme.defaultProps = {};

export default Aboutme;
