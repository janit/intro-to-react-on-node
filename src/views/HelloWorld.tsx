import * as React from 'react';
import BaseLayout from '../layouts/BaseLayout';

export default (props) => {
    const pageTitle = 'Greeting page for ' + props.name;  
    return <BaseLayout title={pageTitle}>Hello {props.name}</BaseLayout>
}
