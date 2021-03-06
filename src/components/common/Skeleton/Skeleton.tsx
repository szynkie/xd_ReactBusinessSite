import React, {Component} from 'react';

import cx from 'classnames';

type P = {
    type: "articleTile" | "article" | "work",
    count: number;
}

class Skeleton extends Component<P, {}> {
    static defaultProps = {
        count: 1
    }

    render() {
        const {type, count} = this.props;
        const typeClass = `skeleton-${type}`;
        const countArr = new Array(count).fill(0);

        return countArr.map((item, i) => <div key={`skeleton_${type}_${i}`} className={cx('skeleton', typeClass)}/>);
    }
}

export default Skeleton;
