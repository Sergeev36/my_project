import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nFortTests from 'shared/configs/i18n/i18nFortTests';

export function renderWithTranslation(component: ReactNode) {
    return render(
        <I18nextProvider i18n={i18nFortTests}>
            {component}
        </I18nextProvider>,
    );
}