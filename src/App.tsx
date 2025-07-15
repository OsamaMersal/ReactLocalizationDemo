import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>

      <button onClick={() => alert(t('clickMe'))}>
        {t('clickMe')}
      </button>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('fr')}>FR</button>
      </div>
    </div>
  );
}

export default App;
