// Resources
import Link from 'next/link';

// Styles

import styles from './styles.scss';

// Data
import content from '../../content/navigation.md';

export default class FooterConnect extends React.Component {
  render() {
    let {
      attributes: { connect },
    } = content;
    return (
      <div className={styles.FooterConnect}>
        <div className={styles.socialButtons}>
          {connect.map((connect) => (
            <a key={connect.label} href={connect.href} target="_blank">
              <i className={connect.icon}></i>
            </a>
          ))}
        </div>
      </div>
    );
  }
}
