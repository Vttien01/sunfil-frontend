import { ReactComponent as IconEmpty } from '@assets/icons/iconEmpty.svg';

import styles from './index.module.scss';
 
const Empty = () => {

    return (
        <div className={styles.empty}>
            <IconEmpty style={{ width: '120px', height: '120px' }} />{' '}
            <div className={styles.noData}>No data</div>
            {/* <div className={styles.shortDescription}>{translate.formatMessage(messages.createEmpty)}</div> */}
        </div>
    );
};
export default Empty;
