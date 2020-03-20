// Resources
import Link from 'next/link';

// Styles

import styles from './styles.scss';

// Data
import content from '../../content/navigation.md';

export default class FooterPartners extends React.Component {
  render() {
    let {
      attributes: { partners }
    } = content;
    return (
      <div className={styles.FooterPartners}>
        <h4>Partners</h4>
        {partners.map(partner => (
          <img key={partner.label} src={partner.icon} alt={partner.label} />
        ))}
      </div>
    );
  }
}
