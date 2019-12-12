import React from 'react';
import { RingLoader } from 'react-spinners';

const style = 'margin: 0 auto';

const Loader = ({ size = 150 }) => <RingLoader css={style} size={size} color="#3A80BA" />;

export default Loader;
