import { useTranslation } from 'react-i18next';

const Loader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <em>{t('global.loading')} ...</em>
  );
};

export default Loader;